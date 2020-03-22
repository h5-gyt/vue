import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

// 引入路由配置
import router from './plugins/router.js'

// 引入控制字体大小
import './assets/js/font.js'

// 引入基础样式
import './assets/css/base.css'


//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上


// 引入axios
import './plugins/axios.js'

let vm =new Vue({
	data:{
	  bNav:false,
	  bFoot:false,
	  bLoading:false,
	},
  render: h => h(App),
  router//配置路由
}).$mount('#app')

export default vm;
