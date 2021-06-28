import axios from "axios";
import Vue from 'vue'
export default {
  namespaced: true,
  state: {
    data: {
      BTS: {
        id    : 1,
        price : null,
        name  : 'BTS',
        data  : null,
      },
      ETH: {
        id    : 2,
        price : null,
        name  : 'ETH',
        data  : null,
      },
      XRP: {
        id    : 3,
        price : null,
        name  : 'XRP',
        data  : null,
      },
      ADA: {
        id    : 4,
        price : null,
        name  : 'ADA',
        data  : null,
      },
      BNB: {
        id    : 5,
        price : null,
        name  : 'BNB',
        data  : null,
      },
      LTC: {
        id    : 6,
        price : null,
        name  : 'LTC',
        data  : null,
      },
      TRX: {
        id    : 7,
        price : null,
        name  : 'TRX',
        data  : null,
      },
      BCH: {
        id    : 8,
        price : null,
        name  : 'BCH',
        data  : null,
      }
    },
    fetched_at: null
  },
  getters: {

  },
  actions: {

    // Получение данных 8 криптовалют за 30 дней
    // Проверка на затягивание данных ограничение на 10 мин
    index({ state, commit }) {
      if(!state.fetched_at || ((new Date().valueOf() - new Date(state.fetched_at).valueOf()) / 1000) > 10) {
        let getCrypto = ( names ) => {
          names.forEach(name => {
            axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=${ name }&tsym=USD&limit=30`)
              .then(res => {
                let value = res.data.Data.Data
                commit('SET', { value, name } )
              })
              .catch(() => Vue.prototype.$notification.show('error', `В данный момент не удалось получить данные ${ name }, попробуйте позже`))
          })
        }
        getCrypto(['BTS', 'ETH', 'XRP', 'ADA', 'BNB', 'LTC', 'TRX', 'BCH'])
      }
    },

    // Получение актуальной стоимости криптовалют
    getPrice({ commit }) {
      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTS,ETH,XRP,ADA,BNB,LTC,TRX,BCH&tsyms=USD')
        .then(res => {
          let value = res.data
          commit('GET_PRICE', { value })
        } )
        .catch(() => Vue.prototype.$notification.show('error', `В данный момент не удалось получить данные актуальной стоимости криптовалют, попробуйте позже`))
    }

  },
  mutations: {
    // Добавление данных по каждой валюте в поле data
    SET(state, { value, name } ) {
      Object.values(state.data).forEach(el => {
        if(el.name === name) el.data = value
      })
      state.fetched_at = new Date().valueOf()
    },

    // Добавление данных по каждой валюте в поле price
    GET_PRICE(state, { value }) {
      Object.values(state.data).forEach(cript => {
        Object.keys(value).forEach(el => {
          if(cript.name === el) cript.price = value[el].USD
        })
      })
    }
  }
}
