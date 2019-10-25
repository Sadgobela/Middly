import React from 'react';
import { Query } from 'react-apollo';

const QueryProvider = (props) => {
  const { query, children } = props;
  return (
    <Query query={query}>
      {(data) => {
        // if (loading) {
        //   return <div>loading</div>;
        // }
        // if (error) {
        //   console.log(error);
        // }
        console.log(data);
        return children;
      }}
    </Query>
  );
};

export default QueryProvider;
