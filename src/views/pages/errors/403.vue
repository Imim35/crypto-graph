<template>
  <div fluid class="main-content-container px-4 pb-4" id="error403">
    <div class="error">
      <div class="error__content">
        <h2>403</h2>
        <h3>Доступ запрещен!</h3>
        <p>Похоже что у вас недостаточно прав доступа!<br></p>
        <d-button pill @click="push">&larr; {{ nameRedirect }}</d-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error403",
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
