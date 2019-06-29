import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:'4',
    user:null,
    isLogin:false,
    token:''
  },
  mutations: {
    changId(state,id){
      state.id=id;
    },
    changeUser(state,user){
      if(user){
        state.user=user;
        state.isLogin=true
      }else if(user==null){
        sessionStorage.setItem("user",null);
        sessionStorage.setItem("token","");
        state.user=null;
        state.isLogin=false;
        state.token='';
      }
    }
  },
  actions: {
    changeId({commit},id){
      return commit('changeId',id)
    },
    changeUser({commit},user){
      return commit('changeUser',user)
    }
  },
  getters:{
    returnId(state){
      return state.id
    },
    returnUser(state){
      return state.user;
    },
    returnIsLogin(state){
      return state.isLogin;
    }
  }
});







