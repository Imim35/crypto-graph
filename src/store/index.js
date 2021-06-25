import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { createStore } from 'vuex-extensions'

import cryptocurrency from './cryptocurrency/cryptocurrency'

export default createStore(Vuex.Store, {
  plugins: [],
  modules: { cryptocurrency }
})
