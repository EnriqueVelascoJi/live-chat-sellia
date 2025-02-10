import { HttpLink, split } from "@apollo/client/core"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"; // <-- This one uses graphql-ws
import { getMainDefinition } from "@apollo/client/utilities"
import { createClient } from "graphql-ws";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

// Create an http link:
const httpLink = new HttpLink({
  uri: "http://localhost:4000/subscriptions"
})

// Create a GraphQLWsLink link:
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink
)

// Create the apollo client with cache implementation.
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

export default apolloProvider