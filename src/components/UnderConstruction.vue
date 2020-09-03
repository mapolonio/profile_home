<template>
  <div id="under-construction">
    <hr />
    <div id="construction-msg">
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
  name: 'UnderConstruction',
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
#under-construction {
  color: white;
  min-height: 30vh;
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#under-construction >>> h1 {
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

#under-construction > hr {
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

#construction-msg {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
</style>
