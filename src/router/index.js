import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Main from "../views/Main.vue";
import MyDesk from "../views/ClassRoom/Desk.vue";
import Courses from "../views/ClassRoom/Courses.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/home",
        name: "Main",
        component: Main,
    },
    {
        path: "/my-desk",
        name: "MyDesk",
        component: MyDesk,
    },
    {
        path: "/my-courses",
        name: "Courses",
        component: Courses,
    },
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;