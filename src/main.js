import Vue from 'vue'
import App from './App.vue'

import store          from "./store"
import router         from './router'

/*
|--------------------------------------------------------------------------
| Импорт стилей
|--------------------------------------------------------------------------
*/

import 'bootstrap/dist/css/bootstrap.css'           // Bootstrap
import '@/assets/scss/main.scss'                    // Основной файл кастомных стилей проекта

/*
|--------------------------------------------------------------------------
| Импорт плагинов
|--------------------------------------------------------------------------
*/
import VueBus         from 'vue-event-bus'
import HighchartsVue from "highcharts-vue"
import Notification   from './plugins/notification'

Vue.use(VueBus)
Vue.use(Notification)
Vue.use(HighchartsVue)
/*
|--------------------------------------------------------------------------
| Конфигурация приложения
|--------------------------------------------------------------------------
*/

Vue.config.productionTip = false

/*
|--------------------------------------------------------------------------
| Старт приложения
|--------------------------------------------------------------------------
*/

new Vue({ render: h => h(App), router, store }).$mount('#app')
