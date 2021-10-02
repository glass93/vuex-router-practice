import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "sj", email: "sj@abc.com", password: "12345" },
      { id: 1, name: "dj", email: "dj@abc.com", password: "54321" },
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    // 로그인이 성공했을 때,
    loginSuccess(state) {
      state.isLogin = true;
      state.isLoginError = false;
    },
    // 로그인이 실패했을 때,
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
  },
  actions: {
    // 로그인 시도
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach((user) => {
        if (user.email === loginObj.email) {
          selectedUser = user;
        }
      });
      selectedUser === null
        ? commit("loginError")
        : selectedUser.password !== loginObj.password
        ? commit("loginError")
        : commit("loginSuccess");
    },
  },
  modules: {},
});
