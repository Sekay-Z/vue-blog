import Vue from "vue";
import gbook from "./gbook.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/book.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(gbook)
}).$mount("#gbook");
