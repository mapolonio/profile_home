<template>
  <div id="warning-message">
    <hr />
    <div id="msg-container">
      <ImageContainer :image="constructionGif" />
      <h1>{{ msg }}</h1>
      <ImageContainer :image="constructionGif" />
    </div>
    <hr />
  </div>
</template>

<script>
import ImageContainer from '@/components/ImageContainer';

export default {
  name: 'WarningMessage',
  components: { ImageContainer },
  props: {
    msg: String
  },
  data() {
    return {
      constructionGif: 'men_at_work_spin.gif'
    };
  }
};
</script>

<style scoped>
#warning-message >>> h1 {
  text-align: center;
  animation-duration: 800ms;
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes blink {
  from {
    color: red;
  }
  to {
    color: yellow;
  }
}

#warning-message > hr {
  height: 20px;
  width: 100%;
  background-image: repeating-linear-gradient(
    45deg,
    #000000,
    #000000 20px,
    #ffff00 20px,
    #ffff00 40px
  );
  border: none;
}

#msg-container {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
</style>
