<template>
  <div id="under-construction">
    <FireTitle msg="Welcome to mapolonio.dev" />
    <WarningMessage msg="This page is under construction" />
  </div>
</template>

<script>
import WarningMessage from '@/components/WarningMessage';
import FireTitle from '@/components/FireTitle';

export default {
  name: 'UnderConstruction',
  components: { WarningMessage, FireTitle }
};
</script>

<style scoped>
#under-construction {
  color: white;
  min-height: 30vh;
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
</style>
