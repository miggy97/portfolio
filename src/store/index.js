import { createStore } from "vuex";

export default createStore({
  state: {
    selectionSidebar: "Work",
    isBlob: true,
  },
  mutations: {
    changeSelectionSidebar(state, payload) {
      state.selectionSidebar = payload;
    },
    addIsBlob(state, payload) {
      state.isBlob = payload;
    },
  },
  getters: {
    getSelectionSidebar(state) {
      return state.selectionSidebar;
    },
    getIsBlob(state) {
      return state.isBlob;
    },
  },
  actions: {},
  modules: {},
});
