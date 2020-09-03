<template>
  <div id="visitor-counter">
    <span id="visitor-msg">you are visitor number</span>
    <vue-odometer :value="visitNumber" theme="digital"></vue-odometer>
  </div>
</template>

<script>
import VueOdometer from 'v-odometer/src';

export default {
  name: 'VisitorCounter',
  components: { 'vue-odometer': VueOdometer },
  data() {
    return {
      visitNumber: 0
    };
  },
  created() {
    return fetch('/.netlify/functions/getAndIncrementVisits')
      .then(res => res.json())
      .then(({ visits }) => {
        this.visitNumber = visits;
      });
  }
};
</script>

<style scoped>
@font-face {
  font-family: iPixelU;
  src: url('../assets/fonts/I-pixel-u.ttf');
}

#visitor-counter {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

#visitor-msg {
  font-family: iPixelU;
  color: #fff67c;
  font-size: 1.3em;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.odometer {
  font-size: 1.5em;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 6px;
  border-image-source: linear-gradient(to left, #9e9e9e, #b5b5b5);
}
</style>
