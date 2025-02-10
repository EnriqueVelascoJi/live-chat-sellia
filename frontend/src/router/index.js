import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"
import Users from "../pages/Users.vue"
import MainChat from "../pages/MainChat.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main-chat',
      name: 'mainChat',
      component: MainChat
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
})

export default router