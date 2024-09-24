<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('message', (event) => {
    console.log('Received message:', event)
  })
})
</script>

<template>
  <div>
    <a href="https://celaris.cc/" target="_blank">
      <img src="./assets/celaris.svg" class="logo celaris" alt="Celaris logo" />
    </a>
  </div>
  <HelloWorld msg="Celaris" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
