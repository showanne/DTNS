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
  // {
  //   path: '/signin',
  //   name: 'SignIn',
  //   component: () => import(/* webpackChunkName: "signin" */ '../views/SignIn.vue'),
  //   meta: {
  //     title: 'DTNS - SignIn'
  //   }
  // },
  // {
  //   path: '/signup',
  //   name: 'SignUp',
  //   component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
  //   meta: {
  //     title: 'DTNS - SignUp'
  //   }
  // },
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
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue'),
    meta: {
      title: 'DTNS - News'
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
    children: [
      {
      // path: '', 不打代表跟上面路徑相同
      // /* webpackChunkName: "admin" */ 打包時 是否要單獨存 js 檔
        path: '',
        name: 'ManageHome',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageHome.vue'),
        meta: {
          title: 'DTNS - ManageHome'
        }
      },
      {
        path: 'editApp',
        name: 'ManageEditApp',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageEditApp.vue'),
        meta: {
          title: 'DTNS - ManageEditApp'
        }
      },
      {
        path: 'memberData',
        name: 'ManageMemberData',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageMemberData.vue'),
        meta: {
          title: 'DTNS - ManageMemberData'
        }
      },
      {
        path: 'template',
        name: 'ManageTemplate',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageTemplate.vue'),
        meta: {
          title: 'DTNS - ManageTemplate'
        }
      },
      {
        path: 'reply',
        name: 'ManageReply',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageReply.vue'),
        meta: {
          title: 'DTNS - ManageReply'
        }
      },
      {
        path: 'special',
        name: 'ManageSpecial',
        component: () => import(/* webpackChunkName: "manage" */ '../views/ManageSpecial.vue'),
        meta: {
          title: 'DTNS - ManageSpecial'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// .afterEach 在進去每頁之後，更改網頁標題
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
