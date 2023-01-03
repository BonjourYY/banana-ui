<template>
  <div id="app">
    <b-button loading>我爱JS</b-button>
    <b-button>我爱Node.js<icon-park type="AddText" theme="filled" /></b-button>
    <b-button-group>
      <b-button><icon-park type="left" theme="filled" />上一页</b-button>
      <b-button>更多</b-button>
      <b-button>下一页<icon-park type="right" theme="filled" /></b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  name: 'App',
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
