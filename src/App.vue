<template>
  <toast :style="'z-index: 2000;'"/>
  <div class="app">
      <LoginPage></LoginPage>
  </div>
</template>

<script>



import LoginPage from "@/pages/LoginPage.vue";
export default {
  components: {
    LoginPage
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
