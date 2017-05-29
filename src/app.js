if (module.hot)
  module.hot.accept()

import Vue from 'vue'

Vue.component('timer', require('./components/Timer.vue'));

new Vue({
    el: "#app",
    data: {
        name: "Tomato"
    }
});