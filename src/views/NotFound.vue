<template>
  <div id="not-found-container">
    <FireTitle msg="404" />
    <WarningMessage
      msg="Sorry, we couldn't find the page you were looking for..."
    />
    <div id="go-home-container">
      <NavButton navigateTo="home" text="Go to main page" />
    </div>
  </div>
</template>

<script>
import FireTitle from '@/components/FireTitle';
import NavButton from '@/components/NavButton';
import WarningMessage from '@/components/WarningMessage';

export default {
  name: 'UnderConstruction',
  components: { NavButton, WarningMessage, FireTitle }
};
</script>

<style scoped>
#not-found-container {
  color: white;
  min-height: 30vh;
  width: 75%;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

#go-home-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 40px;
}
</style>
