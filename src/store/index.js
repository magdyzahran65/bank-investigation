import Vue from "vue";
import Vuex from "vuex";

// import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showAnimation: false,
        isLogged: localStorage.getItem("isLogged") || false,
    },
    getters: {
        isLogged(state) {
            return state.isLogged;
        },
    },
    mutations: {},
    actions: {},
    modules: {},
});
