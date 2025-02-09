import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApp } from 'vue';
import App from './App.vue';
import { apolloProvider } from './apollo';




// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/subscriptions',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp(App);

app.use(apolloProvider);
app.mount('#app');