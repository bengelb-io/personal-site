import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import Service from './pages/Service.vue'
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/services",
        component: Service
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(router).mount('#app')
