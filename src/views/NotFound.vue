<script setup lang="ts">
import FireTitle from '../components/FireTitle.vue'
import NavButton from '../components/NavButton.vue'
import WarningMessage from '../components/WarningMessage.vue'
</script>

<template>
  <div id="not-found-container">
    <FireTitle msg="404" />
    <WarningMessage msg="Sorry, we couldn't find the page you were looking for..." />
    <div id="go-home-container">
      <NavButton navigateTo="home" text="Go to main page" />
    </div>
  </div>
</template>

<style scoped>
#not-found-container {
  color: white;
  min-height: 30vh;
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#go-home-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 40px;
}
</style>
