import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ToolsView from '@/views/ToolsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CertificatesView from '@/views/CertificatesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'about',
        name: 'about',
        component: AboutView
      },
      {
        path: 'tools',
        name: 'tools',
        component: ToolsView
      },
      {
        path: 'projects',
        name: 'projects',
        component: ProjectsView
      },
      {
        path: 'certificates',
        name: 'certificates',
        component: CertificatesView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
