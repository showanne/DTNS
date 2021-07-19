import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'DTNS'
    }
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
    meta: {
      title: 'DTNS - Edit'
    }
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "collection" */ '../views/Collection.vue'),
    meta: {
      title: 'DTNS - Collection'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: {
      title: 'DTNS - Contact'
    }
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
    meta: {
      title: 'DTNS - Setting'
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    meta: {
      title: 'DTNS - Member'
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue'),
    meta: {
      title: 'DTNS - Manage'
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "signin" */ '../views/SignIn.vue'),
    meta: {
      title: 'DTNS - SignIn'
    }
  // },
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
  //   meta: {
  //     title: 'DTNS - SignUp'
  //   }
  }
]

const router = new VueRouter({
  routes
})

export default router
