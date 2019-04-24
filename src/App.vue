<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  margin: auto auto;
  max-width: 608.8px;
  max-height: 839.2px;
  overflow: scroll;
  border: 5px solid black;
  border-radius: 20px;
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
