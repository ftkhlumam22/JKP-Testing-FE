import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { api_url } from "../config/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedItem: [],
    selectedColumns: null,
    exclude_branch: [],
    excludeAagen: [],
    set_agen: null,
    branch: [],
    payment: [],
    courier: [],
    agen: [],
  },
  mutations: {
    setExcludeAgen(state, payload) {
      state.excludeAagen = payload;
    },
    setNameAgent(state, payload) {
      state.set_agen = payload;
    },
    putSelectedItem(state, payload) {
      state.selectedItem = payload;
    },
    putSelectedColumns(state, payload) {
      state.selectedColumns = payload;
    },
    putExcludeBranch(state, payload) {
      state.exclude_branch = payload;
    },
    getBranch(state, payload) {
      state.branch = payload;
    },
    getPayment(state, payload) {
      state.payment = payload;
    },
    getCourier(state, payload) {
      state.courier = payload;
    },
    getAgen(state, payload) {
      state.agen = payload;
    },
  },
  guards: {},
  actions: {
    // get branch
    async getBranch({ commit }) {
      let query_params = {
        pagination: false,
      };
      await axios
        .get(`${api_url}/api/v1/master/branch/admin`, {
          params: query_params,
          headers: JSON.parse(
            window.localStorage.getItem("token-auth-jaskipin")
          ),
        })
        .then((res) => {
          commit("getBranch", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getPayment({ commit }) {
      let query_params = {
        pagination: false,
      };
      await axios
        .get(`${api_url}/api/v1/master/bank/admin`, {
          params: query_params,
          headers: JSON.parse(
            window.localStorage.getItem("token-auth-jaskipin")
          ),
        })
        .then((res) => {
          commit("getPayment", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getCourier({ commit }) {
      let query_params = {
        pagination: false,
      };
      await axios
        .get(`${api_url}/api/v1/shipping-rates/courier/admin`, {
          params: query_params,
          headers: JSON.parse(
            window.localStorage.getItem("token-auth-jaskipin")
          ),
        })
        .then((res) => {
          commit("getCourier", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getListAgen({ commit }) {
      let query_params = {
        pagination: false,
      };
      await axios
        .get(`${api_url}/api/v1/users/user`, {
          params: query_params,
          headers: JSON.parse(
            window.localStorage.getItem("token-auth-jaskipin")
          ),
        })
        .then((res) => {
          commit("getAgen", res.data);
          console.log("get agen", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
