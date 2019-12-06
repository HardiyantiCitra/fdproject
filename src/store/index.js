import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    editorsChoice: [],
    latestArticles: [],
    latestReview: []
  },
  getters: {
    DATA: state => state.data,
    EDITORS_CHOICE: state => state.editorsChoice,
    LATEST_ARTICLES: state => state.latestArticles,
    LATEST_REVIEWS: state => state.latestReview,
  },
  mutations: {
    SET_DATA: (state, payload) => {
      state.data = payload;
    },
    SET_EDITORS_CHOICE: (state, payload) => {
      state.editorsChoice = payload;
    },
    SET_LATEST_ARTICLES: (state, payload) => {
      state.latestArticles = payload;
    },
    SET_LATEST_REVIEWS: (state, payload) => {
      state.latestReview = payload;
    }
  },
  actions: {
    setData(context, payload) {
      context.commit("SET_DATA", payload);
      context.commit("SET_EDITORS_CHOICE", payload["editor's choice"]);
      context.commit("SET_LATEST_ARTICLES", payload["latest articles"]);
      context.commit("SET_LATEST_REVIEWS", payload["latest review"]);
    }
  },
  modules: {}
});
