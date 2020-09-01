import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'

Vue.use(Router)

const vueRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            meta: {
                icon: '',
                name: '首页',
                auth: '',
                keepAlive: true
            },
            component: index
        }
    ]
})

export default vueRouter