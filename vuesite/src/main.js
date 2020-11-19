import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '#Clickable',
  data: {
    counter: 0
  },
  methods: {
    click: function () {
      this.counter+=1
    }
  }
})