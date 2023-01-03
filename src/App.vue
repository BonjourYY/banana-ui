<template>
  <div id="app">
    <BananaButton loading>我爱JS</BananaButton>
    <BananaButton>我爱Node.js<icon-park type="AddText" theme="filled" /></BananaButton>
    <BananaButtonGroup>
      <BananaButton loading>我爱JS</BananaButton>
      <BananaButton>我爱Node.js<icon-park type="AddText" theme="filled" /></BananaButton>
    </BananaButtonGroup>
  </div>
</template>

<script>
import BananaButton from './components/BananaButton.vue';
import BananaButtonGroup from './components/ButtonGroup.vue';

export default {
  name: 'App',
  components: {
    BananaButton,
    BananaButtonGroup,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
