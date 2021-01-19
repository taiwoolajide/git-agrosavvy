import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import user from '@/user';

Vue.use(VueRouter);

const routes = [
  {
    path: "/i",
    alias: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import ( /* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import ( /* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/coal",
    name: "coal",
    component: () =>
      import ( /* webpackChunkName: "coal" */ "../views/Coal.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import ( /* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import ( /* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import ( /* webpackChunkName: "notFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!user.login) {
      next({ name: "login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;