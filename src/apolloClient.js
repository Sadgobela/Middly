import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { RetryLink } from 'apollo-link-retry';

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      movie: (_, { id }, { getCacheKey }) => getCacheKey({ __typename: 'Movie', id }),
    },
  },
});

const middlyLink = new HttpLink({
  uri: 'https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/graphql',
  // credentials: 'include',
});
const magentoLink = new HttpLink({
  uri:
    ' https://4h5hs4wxt9.execute-api.eu-west-1.amazonaws.com/dev/magento/graphql',
  // credentials: 'include',
});

const httpLink = new RetryLink().split(
  (operation) => operation.getContext().clientType === 'magento',
  magentoLink,
  middlyLink,
);

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.error(graphQLErrors);
      }
      if (networkError) {
        console.error(networkError);
      }
    }),
    withClientState({
      defaults: {
        isConnected: true,
      },
      resolvers: {
        Mutation: {
          updateNetworkStatus: (_, { isConnected }, { cache: cacheObj }) => {
            cacheObj.writeData({ data: { isConnected } });
            return null;
          },
        },
      },
      cache,
    }),
    httpLink,
  ]),
  cache,
});

export default client;
