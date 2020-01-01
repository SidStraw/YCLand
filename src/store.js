import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: [
      { name: "首頁", id: "home", next: null },
      { name: "服務項目", id: "about", next: null },
      { name: "專業團隊", id: "service", next: null },
      { name: "最新消息", id: "news", next: null },
      { name: "特定工廠簡介", id: "regulations", next: null },
      { name: "常見問答", id: "qna", next: null },
      { name: "聯絡我們", id: "contact", next: null }
    ],
    scrollOption: {
      duration: 700,
      offset: 0,
      easing: "linear"
    },
    fullHeight: 0,
    activeLink: 0
  },

  mutations: {
    setState(state, targetState, value) {
      state[targetState] = value;
    },
    setFullHeight(state, height) {
      state.fullHeight = height;
    }
  },
  actions: {}
});
