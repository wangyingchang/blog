import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Login from '../views/Login'
import BlogEdit from '../views/BlogEdit'
import BlogList from '../views/BlogList'
import SortList from '../views/SortList'
import TagList from '../views/TagList'
import MarkDown from '../views/MarkDown'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      { path: '/blog/edit', component: BlogEdit},
      { path: '/blog/list', component: BlogList},
      { path: '/sort/list', component: SortList},
      { path: '/tag/list', component: TagList},
      { path: '/note/list', component: MarkDown},
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
