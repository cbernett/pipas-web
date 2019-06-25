import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mission",
      name: "mission",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Mission.vue")
    },
    {
      path: "/platform",
      name: "platform",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ThePlatform.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/program",
      name: "program",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/TheProgram.vue")
    },
    {
      path: "/pipaslabscasavoz",
      name: "pipaslabscasavoz",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/PipasLabsCasaVoz.vue")
    }
  ]
});
