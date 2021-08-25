import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'DTNS - 每字美句每個你喜歡的瞬間'
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
  // {
  //   path: '/setting',
  //   name: 'Setting',
  //   component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
  //   meta: {
  //     title: 'DTNS - Setting'
  //   }
  // },
  {
    path: '/member',
    // name: 'Member',
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
    children: [
      {
      // path: '', 不打代表跟上面路徑相同
      // /* webpackChunkName: "admin" */ 打包時 是否要單獨存 js 檔
        path: 'memberProfile',
        name: 'MemberProfile',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member/MemberProfile.vue'),
        meta: {
          signIn: true,
          title: 'DTNS - MemberProfile'
        }
      },
      {
        path: 'memberArticle',
        name: 'MemberArticle',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member/MemberArticle.vue'),
        meta: {
          signIn: true,
          title: 'DTNS - MemberArticle'
        }
      },
      {
        path: 'memberAnalytics',
        name: 'MemberAnalytics',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member/MemberAnalytics.vue'),
        meta: {
          signIn: true,
          title: 'DTNS - MemberAnalytics'
        }
      },
      {
        path: 'memberReply',
        name: 'MemberReply',
        component: () => import(/* webpackChunkName: "member" */ '../views/Member/MemberReply.vue'),
        meta: {
          signIn: true,
          title: 'DTNS - MemberReply'
        }
      }
    ]
  },
  {
    path: '/manage',
    // name: 'Manage',
    component: () => import(/* webpackChunkName: "manage" */ '../views/Manage.vue'),
    children: [
      {
      // path: '', 不打代表跟上面路徑相同
      // /* webpackChunkName: "admin" */ 打包時 是否要單獨存 js 檔
        path: '',
        name: 'ManageHome',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageHome.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageHome'
        }
      },
      {
        path: 'memberData',
        name: 'ManageMemberData',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageMemberData.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageMemberData'
        }
      },
      {
        path: 'article',
        name: 'ManageArticle',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageArticle.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageArticle'
        }
      },
      {
        path: 'template',
        name: 'ManageTemplate',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageTemplate.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageTemplate'
        }
      },
      {
        path: 'reply',
        name: 'ManageReply',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageReply.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageReply'
        }
      },
      {
        path: 'special',
        name: 'ManageSpecial',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageSpecial.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageSpecial'
        }
      },
      {
        path: 'editApp',
        name: 'ManageEditApp',
        component: () => import(/* webpackChunkName: "manage" */ '../views/Manage/ManageEditApp.vue'),
        meta: {
          signIn: true,
          admin: true,
          title: 'DTNS - ManageEditApp'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

// .beforeEach 在進去每頁之前，判斷是否為登入狀態及是否有權限訪問該頁面
// to 從哪頁來 / from 要去哪頁 / next 如果符合判斷條件要丟去哪裡
router.beforeEach((to, from, next) => {
  // 檢查要去的那個頁面是否需要登入
  if (to.meta.signIn && store.state.jwt.token.length === 0) {
    next('/') // 未登入者丟給登入頁面，直接觸發登入按鈕??
  } else if (to.meta.admin && store.state.user.role !== 1) {
    // 檢查要去的那個頁面是否需為管理員登入，且須有管理員權限 role = 1
    next('/') // 不是管理員丟回首頁
  } else {
    // () 內有放路徑就是指定要跳去哪頁
    // () 內沒放東西就是原本要去哪頁就直接去哪頁
    next()
  }
})

// .afterEach 在進去每頁之後，更改網頁標題
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
