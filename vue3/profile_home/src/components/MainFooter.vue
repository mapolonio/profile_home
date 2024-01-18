<template>
  <div id="footer">
    <VisitorCounter />
  </div>
</template>

<script setup lang="ts">
import VisitorCounter from './VisitorCounter.vue';
</script>

<style scoped>
#footer {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  min-height: 20vh;
}
</style>
