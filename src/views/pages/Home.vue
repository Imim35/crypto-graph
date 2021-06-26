<template>
  <div class="crypto-home" v-if="initialized">
    <h1 class="crypto-home__title">Валюты</h1>
    <div class="crypto-home__content">

      <!-- Отображение карточек криптовалют -->
      <div v-for="(card, idx) in crypto" :key="idx" class="card">
        <div class="info">
          <div class="name">
            <span>{{ card.name }}</span> <span>/ USDT</span>
          </div>
          <span v-if="card.data.length" class="price">{{ card.data[0][30].open }}</span>
        </div>
        <div  class="link" @click="selectCard = card">Смотреть график</div>
      </div>

      <!-- Отображение компонента с передаваемыми данные по каждой карточке -->
      <transition name="fade">
        <graph v-if="selectCard" :card="selectCard" />
      </transition>

    </div>
  </div>
</template>

<script>

import Graph from "@/components/Graph"
export default {
  name: "Home",
  components: { Graph },
  data() {
    return {
      intervalCrypto: null,
      selectCard    : null,
      initialized   : false
    }
  },
  created() {
    // Событие закрытия графика
    this.$bus.$on('graph:close', () => { this.selectCard = null })

    // Получение криптовалют
    this.$store.dispatch('cryptocurrency/index').then( () => this.initialized = true)

    // Запуск интервала на перезатягивание данных валют(15сек)
    this.intervalCrypto = setInterval(this.updateCrypto, 15000);
  },
  computed: {
    crypto() {
      return this.$store.state.cryptocurrency.data
    }
  },
  methods: {

    // Перезатягивание данных
    updateCrypto() {
      this.$store.dispatch('cryptocurrency/index')
    }

  },

  beforeDestroy() {
    // Очистка интервала
    clearInterval(this.intervalCrypto)
  }
}
</script>

<style lang="scss">
.crypto-home {
  &__title {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 28px;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex: 1 0 20%;
      justify-content: space-between;
      height: 176px;
      padding: 24px;
      box-shadow: 2px 2px 15px rgba(41, 41, 41, 0.06);
      border-radius: 4px;
      margin: 0 20px 20px 0;
      transition: 0.3s ease;
      &:nth-child(4n + 4) {
        margin-right: 0;
      }
      &:hover {
        background-color: #F8FAFF;
        border: 1px solid #F0F3FD;
      }
      .info {
        .name {
          span {
            font-size: 16px;
            line-height: 24px;
          }
          display: flex;
          margin-bottom: 15px;
          :first-child {
            margin-right: 5px;
          }
          :nth-child(2) {
            color: #E5E5E5;;
          }
        }
        .price {
          font-size: 24px;
          line-height: 24px;
        }
      }
      .link {
        font-size: 14px;
        line-height: 24px;
        color: #2872CA;
        cursor: pointer;
      }
      @media (max-width: 800px) {
        flex-wrap: wrap;
        flex: 1 0 33%;
        &:nth-child(2n + 2) {
          margin-right: 0;
        }
      }
      @media (max-width: 420px) {
        flex: 1 0 100%;
        margin-right: 0;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
