<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="fire-title">
    <h1 class="font-effect-fire">{{ msg }}</h1>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&effect=fire');

.fire-title {
  color: white;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  min-height: 30vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.fire-title > h1 {
  text-align: center;
}
</style>
