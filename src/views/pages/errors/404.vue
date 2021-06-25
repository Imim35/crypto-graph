<template>
  <d-container fluid class="main-content-container px-4 pb-4" id="error404">
    <div class="error">
      <div class="error__content">
        <h2>404</h2>
        <h3>Страница не найдена!</h3>
        <p>Страница, на которую Вы хотели перейти, не найдена.<br>
          Возможно, введён не корректный адрес или страница была удалена.</p>
        <d-button pill @click="push">&larr; {{ nameRedirect }}</d-button>
      </div>
    </div>
  </d-container>
</template>

<script>
export default {
  name: "error404",
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

