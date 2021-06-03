import Vue from "vue";
import Login from "../views/Login.vue";
import Welcome from "../views/Welcome.vue";
import NotFound from "../views/NotFound.vue";
import VueRouter from "vue-router";

import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/welcome", // making '/welcome' the default route
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
    meta: { title: "Welcome", requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title: "Login", requiresGuest: true },
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
    meta: { title: "404 Not Found" },
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const userExists = store.state.user;
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    // the authentication middleware redirects '/welcome' => '/login' if user is not authenticated
    if (!userExists) {
      next({
        name: "Login",
      });
    } else {
      next();
    }
  } else if (to.matched.some((route) => route.meta.requiresGuest)) {
    // the guest middleware redirects '/login' => '/welcome' if user is authenticated
    if (userExists) {
      next({
        name: "Welcome",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} | Instabug` || "Instabug";
  });
});
export default router;
