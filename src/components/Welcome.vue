<template>
  <div id="welcome">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
};
</script>

<style scoped>
#welcome {
  color: white;
  font-size: 1em;
  min-height: 33vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#welcome > h1 {
  text-align: center;
}
</style>
