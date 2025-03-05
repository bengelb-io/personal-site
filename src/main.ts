import { createApp } from 'vue'
import { createRouter,createMemoryHistory } from 'vue-router'
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
    history: createMemoryHistory(),
    routes
})
createApp(App).use(router).mount('#app')
