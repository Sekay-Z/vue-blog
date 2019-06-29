import Vue from "vue";
import Article from "./Article.vue";
import router from "../../router";
import store from "../../store";
import '../../assets/css/base.css';
import '../../assets/css/index.css';
import axios from "axios";

Vue.prototype.axios=axios;
Vue.config.productionTip = false;


new Vue({
    router,
    store:store,
    render: h => h(Article)
}).$mount("#Article");
