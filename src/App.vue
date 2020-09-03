<template>
  <div id="app">
    <Welcome msg="Welcome to mapolonio.dev" />
    <UnderConstruction msg="This page is under construction" />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import UnderConstruction from '@/components/UnderConstruction';
import Welcome from '@/components/Welcome';

export default {
  name: 'App',
  components: { Footer, UnderConstruction, Welcome }
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
  background-image: url('./assets/images/space_219.gif');
  margin: 0px;
}
</style>
