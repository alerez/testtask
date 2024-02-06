import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
	{
		path: '/',
    redirect: { name: 'home-page' }
	},
	{
		path: '/home',
		name: 'home-page',
		component: HomePage
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
