import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      isLogin :false
  },
  //更改用户登录状态
  mutations: {
    updateLoginStates(states){
      // 在组件中是通过 this.$store.commit('updateLoginStates', states); 方法来调用
      this.state.isLogin = states
    }
  },
  // 定义触发 mutations 里函数的方法，可以异步执行 mutations 里的函数
  actions: {
    // 在组件中是通过 this.$store.dispatch('asyncUpdateUser', user); 来调用 actions
    updated(context,states){
      context.commit( 'updateLoginStates',states);
    }
  },
  //用户状态
  getters: {
    // 在组件中是通过 this.$store.getters.getLoginState 来获取
    getLoginState(state){
      return state.isLogin;
    }
  }
})
