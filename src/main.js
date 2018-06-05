import Vue from 'vue'
import App from './App.vue'
require('file-loader?name=[name].[ext]!../index.html');

var mainApp = new Vue({
  el: '#app',
  render: h => h(App)
})
