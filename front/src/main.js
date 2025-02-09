import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { createApp } from 'vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from './App.vue';
import apolloProvider  from './apollo';
import router from './router';




const app = createApp(App);

app.use(apolloProvider);
app.use(router)

app.mount('#app');