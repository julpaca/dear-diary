import { createRouter, createWebHistory } from 'vue-router'
import NoteYourDay from '../../pages/NoteYourDay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NoteYourDay
    }
  ]
})
export default router