import { createRouter, createWebHistory } from "vue-router"
// import { RouteRecordRaw } from "./types"
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Category from '../views/Category.vue'

const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/:category',
        component: Category
    }
]

const router = createRouter({ history, routes });

export default router