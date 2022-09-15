import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue"
import Food from "./pages/Food.vue"
import Drink from "./pages/Drink.vue"

Vue.use(VueRouter)

const routes = [
    
    { path: "/", component: Home, name: "home.index" },
    { path: "/food", component: Food, name: "food.index" },
    { path: "/drink", component: Drink, name: "drink.index" },
]

export default new VueRouter({
    routes,
    mode: "history"
})
