import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "material-icons/iconfont/material-icons.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";
import store from "./store";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
