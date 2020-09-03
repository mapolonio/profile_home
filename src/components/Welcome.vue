<template>
  <div id="welcome">
    <h1 class="font-effect-fire">{{ msg }}</h1>
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
@import url('https://fonts.googleapis.com/css?family=Roboto&effect=fire');

#welcome {
  color: white;
  font-size: 1.4em;
  font-family: 'Roboto', sans-serif;
  min-height: 30vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#welcome > h1 {
  text-align: center;
}
</style>
