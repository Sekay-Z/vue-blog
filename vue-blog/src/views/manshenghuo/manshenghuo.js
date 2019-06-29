import Vue from "vue";
import Manshenghuo from "./Manshenghuo.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/msh.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(Manshenghuo)
}).$mount("#manshenghuo");
