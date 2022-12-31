import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// Array<RouteRecordRaw> routes 路由信息类型
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/login.vue')
    },
    {
        path: '/reg',
        component: () => import('../components/reg.vue')
    }
]


// 返回一个 router 实例
const router = createRouter({
    // 路由模式
    history: createWebHashHistory(),
    // 路由信息
    routes,
})


export default router