import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "";

axios.interceptors.response.use(undefined, function(error) {
    if (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            store.dispatch("LogOut");
            return router.push("/login");
        }
    }
});

Vue.config.productionTip = false;
Vue.use(VueSidebarMenu);


new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");