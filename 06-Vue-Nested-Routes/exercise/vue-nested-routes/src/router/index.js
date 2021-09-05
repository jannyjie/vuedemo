import { createRouter, createWebHistory } from "vue-router";
// 大專案還是建議使用這個載入方式
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AboutHome from "../views/About/index.vue";
import Guide from "../views/About/Guide.vue";
import Reference from "../views/About/Reference.vue";
import Changelog from "../views/About/Changelog.vue";
import GitHub from "../views/About/GitHub.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // 載入方式 適合小網站使用 可拆成很多個不同的檔案但這樣會新增很多個reqest
    //component: () => import("../views/About.vue"),
    component: About,
    //嵌套式網址
    children: [
      // 404 頁面
      {
        path: "",
        component: AboutHome,
      },
      {
        path: "guide",
        component: Guide,
      },
      {
        path: "reference",
        component: Reference,
      },
      {
        path: "changelog",
        component: Changelog,
      },
      {
        path: "gitHub",
        component: GitHub,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
