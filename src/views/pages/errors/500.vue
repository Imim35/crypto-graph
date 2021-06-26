<template>
  <div fluid class="main-content-container px-4 pb-4" id="error500">
    <div class="error">
      <div class="error__content">
        <h2>500</h2>
        <h3>Ошибка сервера!</h3>
        <p>Ошибка критического уровня, обратитесь к администратору сервиса</p>
        <p v-if="message && message.length">Описание: <code>{{ message }}</code></p>
        <button pill @click="push">&larr; {{ nameRedirect }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error500",
  props: {
    message: {
      type: String,
      default: 'Неизвестная ошибка'
    }
  },
  computed: {
    nameRedirect() {
      return 'redirect' in this.$route.query ? 'Назад' : 'На главную'
    }
  },
  methods: {
    push() {
      if ('redirect' in this.$route.query) { this.$router.push({ path: this.$route.query.redirect }) }
      else { this.$router.push({ name: 'Home' }) }
    }
  }
}
</script>
