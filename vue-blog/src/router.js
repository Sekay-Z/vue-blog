import Vue from "vue";
import Router from "vue-router";

import About from "./views/about/About.vue";
import Article from "./views/article/Article.vue";
import Manshenghuo from "./views/manshenghuo/Manshenghuo.vue";
import Mbfx from "./views/mbfx/mbfx.vue";
import learn from "./views/learn/learn.vue";
import gbook from "./views/gbook/gbook.vue";
import index from "./components/index";
import login from "./components/login";
import regist from "./components/regist";
import comment from "./components/comment";
import commentList from "./components/commentList";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      name:"index",
      component:index
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path:"/article",
      name:"article",
      component:Article
    },
    {
      path:"/manshenghuo",
      name:"manshenghuo",
      component:Manshenghuo
    },
    {
      path:"/mbfx",
      name:"mbfx",
      component:Mbfx
    },
    {
      path:"/learn",
      name:"learn",
      component:learn
    },
    {
      path:"/gbook",
      name:"gbook",
      component:gbook
    },
    {
      path:"/login",
      name:"login",
      component:login
    },
    {
      path:"/regist",
      name:"regist",
      component:regist
    },
    {
      path:"/comment",
      name:"comment",
      component:comment
    },
    {
      path:"/commentList",
      name:"commentList",
      component:commentList
    }
  ]
});
