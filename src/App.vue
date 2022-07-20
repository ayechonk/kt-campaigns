<template>
  <div>
    <router-link to="/">
      <h1 class="mt-3">Kill Team 2021 Campaign Manager</h1>
    </router-link>
    <div class="my-3">
      <router-link to="/">
        <img alt="KillTeam logo" id="img-logo" src="./assets/logo.png">
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url("./assets/fonts/Roboto-Regular.ttf") format("truetype")
}

@font-face {
  font-family: 'Impact';
  src: local("Impact"), url("./assets/fonts/Anton-Regular.ttf") format("truetype")
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
  color: #eee !important;
  background-color: #333 !important;
  border-radius: 0 !important;
  border-color: #c54c21 !important;
}

select {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Impact", sans-serif;
}

a {
  color: #8080ff !important;
  text-decoration: none !important;
}

.text-orange {
	color: #c54c21 !important;
}
</style>
