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
    // vue2 mode histroy vue3 createWebHistory() 
    /**
     * vue2 mode hash vue3 createWebHashHistory() 
     * URL带 # 号 原理是 location.hash 去匹配的  
     * hash 是 URL中 hash(#) 及后面的那部分, 常用作用锚点在页面内进行导航, 
     * 改变 URL 中的 hash 部分不会引起页面刷新
     *  通过 hashchange 事件监听URL 中的变化, 改变URL的方式只有这几种
     *  1. 通过浏览器前进后退改变URL
     *  2. 通过<a>标签改变URL
     *  3. 通过window.location 改变 URL
     */
    // vue2 mode abstact vue3createMemoryHistory()
    history: createWebHashHistory(),
    // 路由信息
    routes,
})


export default router