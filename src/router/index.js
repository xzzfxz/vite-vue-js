import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'index',
		component: () => import('@/views/index.vue'),
	},
	{
		path: '/course-list',
		name: 'courseList',
		component: () => import('@/views/course/list.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router