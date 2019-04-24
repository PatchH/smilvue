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
  margin: auto;
  max-width: 768px;
  max-height: 1024px;
  overflow-x: hidden;
  /* border: 5px solid black;
  border-radius: 20px; */
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
