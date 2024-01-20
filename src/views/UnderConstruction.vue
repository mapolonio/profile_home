<script setup lang="ts">
import FireTitle from '../components/FireTitle.vue'
import PageSuggestions from '../components/PageSuggestions.vue'
import WarningMessage from '../components/WarningMessage.vue'
</script>

<template>
  <div id="under-construction">
    <FireTitle msg="Welcome to mapolonio.dev" />
    <WarningMessage msg="Sorry, this page is under construction" />
    <PageSuggestions />
  </div>
</template>

<style scoped>
@font-face {
  font-family: iPixelU;
  src: url('../assets/fonts/I-pixel-u.ttf');
}

#under-construction {
  color: white;
  min-height: 30vh;
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
</style>
