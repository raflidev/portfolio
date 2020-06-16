import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
