import Vue from "vue";
import Mbfx from "./mbfx.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/share.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(Mbfx)
}).$mount("#mbfx");
