import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const API = {
  QA:
    "https://script.googleusercontent.com/macros/echo?user_content_key=ELrbtYWl6UfpWA44RYPAmnTnv97XD7dIHZiPZJUDw8BNSvjbmDt-nOZNMah29nNka8dMjFTER5r05T7VBxJXErk0WnkEibQym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPzkONM1X-giJWf0gCVNWjV-XF8svTyfHF43Y3TOiSAh53onIMEWEGGd4W_D5URiKvKfVnhjI6Uu&lib=MDuESR0Kv-guCENHtS6ChmB9mFKBBzY6Y",
  LINK:
    "https://script.googleusercontent.com/macros/echo?user_content_key=sZ1TS8Xtn4mqhEINj5fQBUOcmOtajSth-aOCqcov3Ua3xGP2_OaiAnywVSznfVUhQDW9wqcPxPH05T7VBxJXElPkNqy46Qn7m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMkJBAVJKt88CXD5IpUgqA5iaxIrtID6m42-rkoRwJ23o-J1OULqAFEnjBOTt1elYcBmPgpXFICF&lib=Mjso9lMr8pXvvfvGjYCmNt35rZz3jZy9b",
  DOC:
    "https://script.googleusercontent.com/macros/echo?user_content_key=URo8_jAsPDt5opyassXp208sohnvxdUbszkw_NFL66ul9vJ4SqMaErditWZ4bB50qg4XqiFM8MNXQX14NjbyXs50ZphQ2CBfm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLFCSY540VzhLhKK9LqEr2BXaM36tt04Dpk_dX3XsOoaHm8T7ScbJh32ul4sWXtu959Jvz51VLMH&lib=MjVvQKcZxOzIa__jgYglgUH5rZz3jZy9b"
};

export default new Vuex.Store({
  state: {
    menu: [
      { name: "首頁", id: "home", next: null },
      { name: "服務項目", id: "about", next: null },
      { name: "專業團隊", id: "team", next: null },
      { name: "最新消息", id: "news", next: null },
      { name: "特定工廠簡介", id: "regulations", next: null },
      { name: "常見問答", id: "qna", next: null },
      { name: "聯絡我們", id: "contact", next: null }
    ],
    bolckOffsetTop: [],
    scrollOption: {
      duration: 700,
      offset: 0,
      easing: "linear"
    },
    fullHeight: 0,
    activeLink: 0,
    QAData: [],
    LINKData: [],
    DOCData: []
  },

  mutations: {
    setState(state, { targetState, value }) {
      state[targetState] = value;
    },
    setFullHeight(state, height) {
      state.fullHeight = height;
    }
  },
  actions: {
    async getQA({ commit }) {
      let QAData = await axios.get(API.QA);
      commit("setState", { targetState: "QAData", value: QAData.data });
    },
    async getLINK({ commit }) {
      let LINKData = await axios.get(API.LINK);
      commit("setState", { targetState: "LINKData", value: LINKData.data });
    },
    async getDOC({ commit }) {
      let DOCData = await axios.get(API.DOC);
      commit("setState", { targetState: "DOCData", value: DOCData.data });
    },
    async getData({ dispatch }) {
      await dispatch("getQA");
      await dispatch("getLINK");
      await dispatch("getDOC");
    }
  }
});
