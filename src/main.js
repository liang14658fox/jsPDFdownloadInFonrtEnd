import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import router from '@/router/index.js'
//全局引入echarts
import * as echarts from 'echarts';
//需要挂载到Vue原型上
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
