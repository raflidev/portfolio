import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";
import store from './store'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
