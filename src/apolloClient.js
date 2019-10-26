import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Auth } from 'aws-amplify';
import { ApolloLink, Observable } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      movie: (_, { id }, { getCacheKey }) =>
        getCacheKey({ __typename: 'Movie', id }),
    },
  },
});

const request = async (operation) => {
  const jwtToken = await Auth.currentSession();
  operation.setContext({
    headers: {
      authorization: jwtToken.idToken.jwtToken,
    },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const middlyLink = new HttpLink({
  uri: 'https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphql',
  credentials: 'include',
});
const magentoLink = new HttpLink({
  uri:
    ' https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/magento/graphql',
  credentials: 'include',
});

const httpLink = new RetryLink().split(
  (operation) => operation.getContext().clientType === 'magento',
  magentoLink,
  middlyLink
);
export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.error(graphQLErrors);
        // sendToLoggingService(graphQLErrors);
      }
      if (networkError) {
        console.error(networkError);
        // logoutUser();
      }
    }),
    requestLink,
    withClientState({
      defaults: {
        isConnected: true,
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache }) => {
            cache.writeData({ data: { isConnected } });
            return null;
          },
        },
      },
      cache,
    }),
    httpLink,
    // new HttpLink({
    //   uri: 'https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphql',
    //   credentials: 'include',
    // }),
  ]),
  cache,
});

export default client;
