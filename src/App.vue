<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>
        <router-link to="/map">Map</router-link>
      </div>
      <div>
        <router-link to="/marked">Marked</router-link>
      </div>
    </nav>
    <router-view />
    <footer>
      <a href="/">Github</a>
    </footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("@/assets/telescope.jpg");
}

nav {
  display: flex;
  justify-content: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  background-color: rgba(236, 236, 236, 0.5);
  padding: 10px 30px;
}
nav a:hover {
  background-color: rgba(236, 236, 236, 1);
}

nav a.router-link-exact-active {
  color: #7ea4b3;
}
footer {
  background-color: rgba(236, 236, 236, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
