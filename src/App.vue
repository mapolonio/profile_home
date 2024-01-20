<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div id="main-container">
    <RouterView />
    <MainFooter />
  </div>
</template>

<style>
#main-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  overflow: hidden;
}

body {
  background-image: url('./images/bg.gif');
  margin: 0px;
  cursor: url('./assets/cursor/cursor.cur'), auto;
}
</style>
