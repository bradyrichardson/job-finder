import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import mock from "./MOCK_DATA.json";

Vue.config.productionTip = false;

let data = {
  jobs: mock,
  marked: [],
  show: [-471.6411092892824, 40.228305377437636],
  refresh: 0,
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
