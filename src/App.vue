<template>
  <div id="app">
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: { Footer }
};
</script>

<style>
#app {
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
  background-image: url('./assets/images/bg.gif');
  margin: 0px;
  cursor: url('./assets/cursor/cursor.cur'), auto;
}
</style>
