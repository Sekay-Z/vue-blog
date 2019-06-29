import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import Vuerify from "vuerify";
/*import modernizr from "./assets/js/modernizr";
import scrollReveal from "./assets/js/scrollReveal";*/

Vue.use(ElementUi);
Vue.use(Vuerify);
Vue.prototype.axios=axios;
Vue.config.productionTip = false;

new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount("#app");
