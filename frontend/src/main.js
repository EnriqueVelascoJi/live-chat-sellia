import { createApp } from 'vue';

import App from './App.vue';
import apolloProvider  from './apollo';
import router from './router';
import store from './store';

import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";




const app = createApp(App);

app.use(apolloProvider);
app.use(router);
app.use(store)


app.mount('#app');