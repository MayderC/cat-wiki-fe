<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
    <nav class="navbar flex-center-v">
      <img class="img-logo" src="./assets/img/CatwikiLogo.svg" alt="">
    </nav>
  <RouterView />

  <footer class="footer-main">

  </footer>

</template>

<style>

.flex-center-v{
    display: flex;
    align-items: center;
  }
  .flex-center-h{
    display: flex;
    justify-content: center;
  }
  .flex-center-b{
    display: flex;
    align-items: center;
    align-items: center;
  }
  .navbar{
    height: 99px;
    padding: 0 96px;
  }

  .footer-main{
    background-color: black;
    color: aliceblue;
    height: 99px;
    border-radius: 42px 42px 0 0;
    margin: 0 96px;
  }
</style>
