<template>
  <toast :style="'z-index: 2000;'"/>
  <div class="app">
      <LoadingPage></LoadingPage>
  </div>
</template>

<script>

import LoadingPage from "@/pages/LoadingPage.vue"
export default {
  components: {
     LoadingPage
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
