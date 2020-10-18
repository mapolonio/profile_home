<template>
  <div id="under-construction">
    <FireTitle msg="Welcome to mapolonio.dev" />
    <WarningMessage msg="Sorry, this page is under construction" />
    <PageSuggestions />
  </div>
</template>

<script>
import FireTitle from '@/components/FireTitle';
import PageSuggestions from '@/components/PageSuggestions';
import WarningMessage from '@/components/WarningMessage';

export default {
  name: 'UnderConstruction',
  components: { FireTitle, PageSuggestions, WarningMessage }
};
</script>

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
