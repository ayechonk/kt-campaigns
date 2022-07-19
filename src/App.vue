<template>
  <div>
    <img alt="KillTeam logo" id="img-logo" src="./assets/logo.png">
    <DataSlates />
    <DataCard />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DataSlates from './components/DataSlates.vue'
import DataCard from './components/DataCard.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    DataSlates,
    DataCard
  }
}
</script>

<style>
@font-face{
  font-family: "Roboto";
  src: local("Roboto"), url("./assets/fonts/Roboto-Regular.ttf") format("truetype")
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
}

#img-logo {
  width: 100px;
}

label {
  color: #bbb !important;
}

input,
textarea,
select,
option {
  color: #bbb !important;
  background-color: #333 !important;
}

select {
  cursor: pointer;
}
</style>
