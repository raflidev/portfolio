import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProjectID from "../views/ProjectID.vue";
import Project from "../views/Project.vue";
import Blog from "../views/Blog.vue";
import BlogID from "../views/BlogID.vue";
import Contact from "../views/Contact.vue";
import Cert from "../views/Cert.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/project/:slug",
    component: ProjectID,
  },
  {
    path: "/project/",
    component: Project,
  },
  {
    path: "/certificate/",
    component: Cert,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/blog/:slug",
    component: BlogID,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
