import { createRouter,createWebHistory } from "vue-router";

import Home from "./components/Home/main.vue";
import Blog from "./components/Blog/main.vue";
import Customer from "./components/Customer/main.vue";


const routes=[
    {path : '/' , component : Home , name : 'Home'},
    {path : '/blog' , component : Blog , name : 'blog'},
    {path : '/customer' , component : Customer , name : 'customer'},
]
const router = createRouter({
    history : createWebHistory(),
    routes: routes
})

export default router;