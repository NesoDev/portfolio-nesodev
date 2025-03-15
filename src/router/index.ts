import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ResumeView from '@/views/AboutViews/ResumeView.vue'
import MoviesSeriesView from '@/views/AboutViews/MoviesSeriesView.vue'
import MusicsView from '@/views/AboutViews/MusicsView.vue'
import GamesView from '@/views/AboutViews/GamesView.vue'
import ToolsView from '@/views/ToolsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CertificatesView from '@/views/CertificatesView.vue'
import EducationView from '@/views/AboutViews/EducationView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: { name: 'about' },
    children: [
      {
        path: 'about',
        name: 'about',
        component: AboutView,
        redirect: { name: 'resume' },
        children: [
          {
            path: 'resume',
            name: 'resume',
            component: ResumeView
          },
          {
            path: 'education',
            name: 'education',
            component: EducationView
          },
          {
            path: 'movies&series',
            name: 'movies&series',
            component: MoviesSeriesView
          },
          {
            path: 'musics',
            name: 'musics',
            component: MusicsView
          },
          {
            path: 'games',
            name: 'games',
            component: GamesView
          },
        ]
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
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
