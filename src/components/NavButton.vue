<template>
  <div class="nav-button">
    <router-link :to="{ name: navigateTo }">{{ text }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    navigateTo: {
      type: String,
      default: '/'
    },
    text: {
      type: String
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: ComicSansMS;
  src: url('../assets/fonts/ComicSansMSRegular.ttf');
}

.nav-button {
  width: fit-content;
  display: inline-block;
}

.nav-button > a {
  color: white !important;
  font-family: 'ComicSansMS';
  padding: 5px;
  border: 3px solid white;
  border-radius: 10px;
}
</style>
