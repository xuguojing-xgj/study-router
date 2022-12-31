import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'


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
    /**
     * vue2 mode histroy vue3 createWebHistory() 
     * histroy 实现
     * histroy 提供了pushState 和 replaceState 两个方法, 这两个方法改变URL的path部分不会引起页面刷新
     * histroy 提供类似 hashchange 事件 popstate 事件, 但 popstate 事件有些不同
     *  1. 通过浏览器前进后退改变URL时会触发 popstate 事件
     *   window.addEventListener('popstate', (e) => {
     *      console.log(e)
     *   })
     *  2. 通过pushState 和 replaceState 或 <a> 标签的点击事件不会触发 popstate 事件
     *  histroy.pushState({state:''}, null, '/reg') // 第一个参数为 对象存储一些值, 第二个参数为 title, 第三个参数为跳转的路径 
     *  3. 好在我们可以拦截pushState/replaceState的调用和<a> 标签的点击事件来检测URL的变化
     *  4. 通过js调用histroy的back(返回路径), go, forward(上一个页面)方法触发该事件
     * 所以监听URL变化可以实现,只是没有hashchange那么方法
     */
    /**
     * vue2 mode hash vue3 createWebHashHistory() 
     * URL带 # 号 原理是 location.hash 去匹配的  
     * hash 是 URL中 hash(#) 及后面的那部分, 常用作用锚点在页面内进行导航, 
     * 改变 URL 中的 hash 部分不会引起页面刷新
     *  通过 hashchange 事件监听URL 中的变化, 改变URL的方式只有这几种
     *  1. 通过浏览器前进后退改变URL
     *  window.addEventListener('hashchange', (e) => {
     *      console.log(e)
     *  })
     *  2. 通过<a>标签改变URL
     *  3. 通过window.location 改变URL location.hash = '/'
     */
    // vue2 mode abstact vue3createMemoryHistory()
    history: createWebHistory(),
    // 路由信息
    routes,
})


export default router