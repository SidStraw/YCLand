import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const API = {
  QA:
    "https://script.googleusercontent.com/macros/echo?user_content_key=VcnJnXDxX1kpGDtq5P83tp9YHnKG2ug-Iu1BykeGDY-zBoKpIGN5-yQ3fSgfSOhLF_O7BRnoXNZub0G87VYNYS8LjDEG9wWKm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPzkONM1X-giJWf0gCVNWjV-XF8svTyfHF43Y3TOiSAh53onIMEWEGGd4W_D5URiKvKfVnhjI6Uu&lib=MDuESR0Kv-guCENHtS6ChmB9mFKBBzY6Y",
  LINK:
    "https://script.googleusercontent.com/macros/echo?user_content_key=eO-6yOkcLg-svzlVKFCuKyY0K0IZ6-0LX2E8Uq9jNmWyJBAbCAj9pY6qe3Sdk0ZNH3yVd9kgrFpub0G87VYNYei8Eed3Iqzcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMkJBAVJKt88CXD5IpUgqA5iaxIrtID6m42-rkoRwJ23o-J1OULqAFEnjBOTt1elYcBmPgpXFICF&lib=Mjso9lMr8pXvvfvGjYCmNt35rZz3jZy9b",
  DOC:
    "https://script.googleusercontent.com/macros/echo?user_content_key=t2tjbwhFwcaWNXhJ1bw1XTAK-SrQVLXKcwPPwbcSv4jn3n328Kj9__wnvBnHQaoJR3C8AGUo2gFub0G87VYNYWg2w_IdJR1Tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLFCSY540VzhLhKK9LqEr2BXaM36tt04Dpk_dX3XsOoaHm8T7ScbJh32ul4sWXtu959Jvz51VLMH&lib=MjVvQKcZxOzIa__jgYglgUH5rZz3jZy9b"
};

export default new Vuex.Store({
  state: {
    menu: [
      { name: "首頁", id: "home", next: null },
      { name: "服務項目", id: "about", next: null },
      { name: "專業團隊", id: "team", next: null },
      { name: "特定工廠簡介", id: "regulations", next: null },
      { name: "最新消息", id: "news", next: null },
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
      QAData.data.shift();
      commit("setState", { targetState: "QAData", value: QAData.data });
    },
    async getLINK({ commit }) {
      let LINKData = await axios.get(API.LINK);
      LINKData.data.shift();
      commit("setState", { targetState: "LINKData", value: LINKData.data });
    },
    async getDOC({ commit }) {
      let DOCData = await axios.get(API.DOC);
      DOCData.data.shift();
      commit("setState", { targetState: "DOCData", value: DOCData.data });
    },
    async getData({ dispatch }) {
      await dispatch("getQA");
      await dispatch("getLINK");
      await dispatch("getDOC");
    }
  }
});
