import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomeView.vue'),
		meta: {
			title: 'Santiago Ceballos | Full Stack Engineer',
		},
	},
	{
		path: '/cv',
		name: 'CV',
		component: () => import('../views/CvView.vue'),
		meta: {
			title: 'Curriculum Vitae | Santiago Ceballos',
		},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		redirect: '/',
	},
];
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

router.beforeEach((to, _from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title as string;
	}
	next();
});

export default router;
