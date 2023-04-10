import { createRouter, createWebHashHistory } from "vue-router";

import FormSignUp from '/src/components/Forms/FormSignUp.vue';
import ReadVideo from '/src/components/ReadVideo.vue';

const BrowsePage = () => import("./BrowsePage/index.vue");
const SearchPage = () => import("./SearchPage/index.vue");
const ReplayPage = () => import("./ReplayPage/index.vue");
const DirectPage = () => import("./DirectPage/index.vue");
const LoginPage = () => import("./LoginPage/index.vue");
const UserProfilePage = () => import("./UserProfilePage/index.vue");

const routes = [
  {
    path: "/login",
    component: LoginPage,
    props: { isHeader: false },
  },
  {
    path: "/signin",
    component: FormSignUp,
    props: { isHeader: false },
  },
  {
    path: "/readvideo/:id",
    component: ReadVideo,
    props: { isHeader: false },
  },

  {
    path: "/",
    component: BrowsePage,
    name: "Home",
    props: { isHeader: false },
  },

  {
    path: "/browse/replay",
    component: ReplayPage,
    name: "Programmes",
    props: { isHeader: true },
  },

  {
    path: "/browse/direct",
    component: DirectPage,
    name: "Direct",
    props: { isHeader: true },
  },
  
  {
    path: "/browse/stream",
    component: BrowsePage,
    name: "Stream",
    props: { isHeader: true },
  },

  {
    path: "/user/profile",
    component: UserProfilePage,
    name: "UserProfile",
    props: { isHeader: false },
  },

  {
    path: "/search",
    component: SearchPage,
    name: "Search",
    props: { isHeader: false },
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, __, savedPosition) {
    if (to.query.scrollTop) {
      return { left: 0, top: to.query.scrollTop };
    }

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

export default router;
