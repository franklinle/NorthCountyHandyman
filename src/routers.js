import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'

const routes = [
    {
        name: 'HomeView',
        component: HomeView,
        path:'/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;