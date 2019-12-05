<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <Content></Content>
    <Footer></Footer>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    Content,
    Footer,
  }
};
</script>

<style scoped lang="scss">
  @import './styles/App.scss';
</style>
