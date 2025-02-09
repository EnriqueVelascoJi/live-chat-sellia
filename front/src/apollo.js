import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createApolloProvider } from '@vue/apollo-option';
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/graphql`,
  options: {
    reconnect: true,
  },
});
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});