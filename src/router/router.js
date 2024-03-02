import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    
    {
        path: "/ver-estudiante",
    
        component: () => import('../pages/PaginaEsstudainte.vue')
    },
    {
        path: "/guardar-token",
    
        component: () => import('../pages/PaginaToken.vue')
    },
]

const router=createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router