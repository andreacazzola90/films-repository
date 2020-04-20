import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import NotFoundComponent from '../components/NotFoundComponent.vue'

import RootProfile from '../components/profile/RootProfile.vue'
import ListProfile from '../components/profile/ListProfile.vue'
import NewProfile from '../components/profile/NewProfile.vue'
import DetailProfile from '../components/profile/DetailProfile.vue'

import RootCategory from '../components/category/RootCategory.vue'
// import ListCategory from '../components/category/ListCategory.vue'
import NewCategory from '../components/category/NewCategory.vue'
// import DetailCategory from '../components/category/DetailCategory.vue'

import ListVideo from '../components/video/ListVideo.vue'

import RootPost from '../components/post/RootPost.vue'
import ListPost from '../components/post/ListPost.vue'
import NewPost from '../components/post/NewPost.vue'
import DetailPost from '../components/post/DetailPost.vue'

Vue.use(VueRouter)

const protect = (to, from, next) => {
  const isLogged = true
  if (isLogged) {
    next()
    return
  }
  next({ name: 'Home' })
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/404',
    name: 'notFound',
    component: NotFoundComponent
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundComponent
  },
  {
    path: '/profile',
    name: 'Profile',
    component: RootProfile,
    beforeEnter: protect,
    children: [
      { path: '', name: 'listProfile', component: ListProfile },
      { path: 'new', name: 'newProfile', component: NewProfile },
      { path: ':id', name: 'detailProfile', component: DetailProfile }
    ]
  },
  {
    path: '/category',
    name: 'Category',
    component: RootCategory,
    beforeEnter: protect,
    children: [
      { path: '', name: 'listVideo', component: ListVideo },
      { path: 'new', name: 'newCategory', component: NewCategory },
      { path: ':id', name: 'listVideo', component: ListVideo }
    ]
  },
  {
    path: '/post',
    name: 'Post',
    component: RootPost,
    beforeEnter: protect,
    children: [
      { path: '', name: 'listPost', component: ListPost },
      { path: 'new', name: 'newPost', component: NewPost },
      { path: ':id', name: 'detailPost', component: DetailPost }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
