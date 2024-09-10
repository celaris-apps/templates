<script setup>
import { ref } from 'vue'

defineProps()

const greetMsg = ref('')
const name = ref('')

async function greet() {
  window.greet(name.value).then((res) => {
    greetMsg.value = res['response']
  })
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." />
    <button type="submit">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
