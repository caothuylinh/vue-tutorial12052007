import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import BlogDetail from '../components/BlogDetail.vue'
import AdminMain from '../components/AdminMain.vue'
import AdminBlog from '../components/AdminBlog.vue'
import AdminUser from '../components/AdminUser.vue'
import Login from '../components/Login.vue'
Vue.use (Router)

export default new Router ({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home, props: true },
    { path: '/login', name: 'Login', component: Login, props: true },
    { path: '/frontend-training/:id', name: 'Blog Detail', component: BlogDetail, props: true },
    { path: '/admin', name: 'Admin', component: AdminMain, props: true },
    { path: '/admin/blogs', name: 'Admin Blog', component: AdminBlog, props: true },
    { path: '/admin/users', name: 'Admin User', component: AdminUser, props: true },
    { path: '*', name: 'Page not found', component: { template: '<div class="list-full-height text-center">Page Not Found</div>' } }
  ]
})
