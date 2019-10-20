import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.baseUrl = 'http://evc.api.php.8kpay.com:10001'
const app = new Vue({
    ...App
})
app.$mount()
