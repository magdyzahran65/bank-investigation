import Vue from "vue";
import App from "./views/app-vue/App.vue";
import router from "./router";
import store from "./store/index";
import "axios";

import "normalize.css";
import "../src/assets/fontawesome-free-6.2.0-web/css/all.css";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./scss/main.scss";

import "jquery";

Vue.config.productionTip = false;

Vue.filter("formatDate", function (value) {
    const date = new Date(value);
    const formatted = date.toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });
    return formatted;
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
