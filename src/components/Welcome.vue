<template>
  <div id="welcome">
    <h1 class="font-effect-fire-animation">{{ msg }}</h1>
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
@import url('https://fonts.googleapis.com/css?family=Roboto&effect=fire-animation');

#welcome {
  color: white;
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
  min-height: 33vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#welcome > h1 {
  text-align: center;
}
</style>
