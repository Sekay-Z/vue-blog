import Vue from "vue";
import learn from "./learn.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/learn.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(learn)
}).$mount("#learn");
