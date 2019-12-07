import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
    editorsChoice: [],
    latestArticles: [],
    latestReview: [],
    topBrands: [
      "../assets/images/nivea.png",
      "../assets/images/to.png",
      "../assets/images/tbs.png",
      "../assets/images/skii.png",
      "../assets/images/maybelline.png",
      "../assets/images/inisfree.png"
    ]
  },
  getters: {
    DATA: state => state.data,
    EDITORS_CHOICE: state => state.editorsChoice,
    LATEST_ARTICLES: state => state.latestArticles,
    LATEST_REVIEWS: state => state.latestReview,
    TOP_BRANDS: state => state.topBrands
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
