import Vue from "vue";
import VueRouter from "vue-router";

// Import pages
const Home = () => import("../pages/Home.vue");
const TechStack = () => import("../pages/TechStack");

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/techstack",
		name: "TechStack",
		component: TechStack,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
