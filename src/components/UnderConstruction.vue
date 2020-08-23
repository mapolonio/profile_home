<template>
  <div id="under-construction">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction',
  props: {
    msg: String
  }
};
</script>

<style scoped>
#under-construction {
  color: white;
  min-height: 33vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#under-construction > h1 {
  text-align: center;
}
</style>
