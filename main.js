import Vue from 'vue'
import App from './App'
import '@/styles/base/app.scss'
import store from './store'
import * as filters from './filters'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false
Vue.prototype.$store = store

// 初始化小程序版本更新代码
import updateManage from '@/lib/updateManage'

//全局filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

App.mpType = 'app'

// setTimeout(() => {
//     uni.onNetworkStatusChange(function(res) {
//         console.log(res,'lee');
//     });
// }, 100)

const app = new Vue({
    store,
    ...App
})
app.$mount()
