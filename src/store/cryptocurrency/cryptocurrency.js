import axios from "axios";
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    data: {
      BTS: {
        name  : 'BTS',
        data  : null,
      },
      ETH: {
        name  : 'ETH',
        data  : null,
      },
      XRP: {
        name  : 'XRP',
        data  : null,
      },
      ADA: {
        name  : 'ADA',
        data  : null,
      },
      BNB: {
        name  : 'BNB',
        data  : null,
      },
      LTC: {
        name  : 'LTC',
        data  : null,
      },
      TRX: {
        name  : 'TRX',
        data  : null,
      },
      BCH: {
        name  : 'BCH',
        data  : null,
      }
    }
  },
  getters: {},
  actions: {
    // Получение данных 8 криптовалют
    index({ commit }) {
      const BTS = []
      const ETH = []
      const XRP = []
      const ADA = []
      const BNB = []
      const LTC = []
      const TRX = []
      const BCH = []

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=30')
        .then(res => BTS.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные BTS, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=30')
        .then(res => ETH.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные ETH, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=30')
        .then(res => XRP.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные XRP, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ADA&tsym=USD&limit=30')
        .then(res => ADA.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные ADA, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BNB&tsym=USD&limit=30')
        .then(res => BNB.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные BNB, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=30')
        .then(res => LTC.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные LTC, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=TRX&tsym=USD&limit=30')
        .then(res => TRX.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные TRX, попробуйте позже'))

      axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=TRX&tsym=BCH&limit=30')
        .then(res => BCH.push(res.data.Data.Data))
        .catch(() => Vue.prototype.$notification.show('error', 'В данный момент не удалось получить данные BCH, попробуйте позже'))

      commit('SET', { BTS, ETH, XRP , ADA, BNB, LTC, TRX, BCH })
    }
  },
  mutations: {
    SET(state, { BTS, ETH, XRP , ADA, BNB, LTC, TRX, BCH }) {
      state.data.BTS.data = BTS
      state.data.ETH.data = ETH
      state.data.XRP.data = XRP
      state.data.ADA.data = ADA
      state.data.BNB.data = BNB
      state.data.LTC.data = LTC
      state.data.TRX.data = TRX
      state.data.BCH.data = BCH
    }
  }
}
