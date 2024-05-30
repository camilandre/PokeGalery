<script  lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from "vue";
import Carousel from "./components/Carousel.vue";

export default defineComponent({name: "App",
  components: {
    Carousel,
  },
});
</script>

<template>
<!--   <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->

  <section class="section">
    <header>
      <div class="logo">
        GaleryPoke
      </div>
<!--       <nav> 
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">Info</a>
      </nav> -->
    </header>
    <Carousel/>

  </section>




</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Poppins' ;
  box-sizing: border-box;
  margin: 0
}

</style>

<style scoped>
section {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0.6rem 1.4rem;
}

a {
  text-decoration: none;
  color: #555;
}
 
header .logo {
  font-weight: 900;
}

header nav {
  display: flex;
  gap: 0.7rem;
}

</style>
