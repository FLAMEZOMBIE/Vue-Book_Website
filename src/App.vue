<template>
  <div id="app">
    <NavBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    SideBar,
    NavBar
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
}
</style>