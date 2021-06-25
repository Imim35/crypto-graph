<template>
  <div class="app-layout h-100" id="app-layout">
    <!-- Page Content -->
    <div class="main-content-container h-100 px-4 pt-4 mt-1">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  data() {
    return {
      navigationBarShow: false
    }
  }
}
</script>
