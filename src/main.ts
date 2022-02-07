import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue"
import Layout from "@/components/Layout.vue"
import './icons'
import { component } from 'vue/types/umd'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
// 手动引入 ECharts 各模块来减小打包体积

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);


Vue.config.productionTip = false
Vue.component('v-chart', ECharts)
Vue.component('Nav', Nav)
Vue.component('Layout', Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 10000)
  }, 0)
}
