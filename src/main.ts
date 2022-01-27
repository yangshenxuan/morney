import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue"
import Layout from "@/components/Layout.vue"
import './icons'
import { component } from 'vue/types/umd'
import tagListModel from './models/tagListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)

window.tagList = tagListModel.fetch()
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === "space") {
    window.alert("标签名不能为空");
  } else if (message === "duplicated") {
    window.alert("标签重复，请重新输入");
  } else if (message === "success") {
    window.alert("添加成功");
  }
}
window.removeTag = (id: string) => {
  return tagListModel.remove(id)
}
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name)
}
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0]
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
