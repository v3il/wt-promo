<template>
  <div id="app">
    <MainView></MainView>
  </div>
</template>

<script>
  import MainView from './views/Main';

  export default {
      components: {
          MainView,
      }
  }
</script>

<style lang="less">
  @import './constants';

  @font-face {
    font-family: Myriad;
    src: url(assets/fonts/MyriadPro-Regular.woff);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Myriad, sans-serif;
  }

  html {
    font-size: 18px;
    color: white;
  }

  body {
    background-color: @bg;
  }
</style>
