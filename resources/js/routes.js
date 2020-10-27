import VueRouter from "vue-router";
import Example2 from "./components/Example2";
import ExampleComponent from "./components/ExampleComponent";
import Bookables from "./bookables/Bookables";


const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: 'home',
    },
    {
        path: "/second",
        component: Example2,
        name: 'second',
    },
];


const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
