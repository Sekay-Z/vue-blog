import Vue from "vue";
import About from "./About.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/about.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(About)
}).$mount("#about");
