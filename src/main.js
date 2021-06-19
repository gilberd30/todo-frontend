import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import todo from './components/todo.vue'
import user from './components/user.vue'
import auth from './components/auth.vue'

const routes = [
    { path: '/', component: auth },
    { path: '/todo', component: todo },
    { path: '/user', component: user }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })


createApp(App).use(router).mount('#app')
