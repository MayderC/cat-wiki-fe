<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar flex-center-v">
    <RouterLink to="/">
      <img class="img-logo" src="./assets/img/CatwikiLogo.svg" alt="" />
    </RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

  <footer class="footer-main flex-center-b">
    <img class="search" src="./assets/img/CatwikiLogo.svg" alt="" />
    <p>
      &copy; Created by <span><a href="">MayderC</a></span> - DevChallenge.io
      2021
    </p>
  </footer>
</template>

<style>
.flex-center-v {
  display: flex;
  align-items: center;
}
.flex-center-h {
  display: flex;
  justify-content: center;
}
.flex-center-b {
  display: flex;
  align-items: center;
  align-items: center;
}
.navbar {
  height: 99px;
  max-width: var(--width);
  margin-left: auto;
  margin-right: auto;
}

main {
  max-width: var(--width);
  margin-left: auto;
  margin-right: auto;
}

.footer-main {
  background-color: black;
  color: aliceblue;
  height: 99px;
  border-radius: 42px 42px 0 0;
  margin: 0 96px;
  justify-content: space-between;
  padding: 0 50px;
  max-width: var(--width);
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
}

.footer-main img {
  filter: grayscale() invert(100%);
}

.footer-main p > span > a {
  color: #fff;
  font-weight: bold;
}

@media (max-width: 1283px) {
  .navbar,
  main {
    padding: 0 20px;
  }
  footer.footer-main {
    margin: 0 20px;
  }
}
</style>
