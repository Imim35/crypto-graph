import Vue from 'vue';
import VueToast from 'vue-toast-notification'

Vue.use(VueToast);

import 'vue-toast-notification/dist/theme-sugar.css';
import '@/assets/scss/vue-toast.scss'

export default {
  install(Vue) {
    Vue.prototype.$notification = {
      delay: 300,
      show(type, message = '..', options = {}) {
        setTimeout(() => {
          Vue.prototype.$toast[type](message, options)
        }, options.delay || this.delay)
      }
    }
  }
}
