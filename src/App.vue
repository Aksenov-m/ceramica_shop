<template>
  <div class="container">
    <HeaderSubsection />

    <main>
      <router-view /> 
    </main>

    <FooterSubsection />
    <Toolbar />
  </div>
</template>

<script>
import HeaderSubsection from "./components/HeaderSubsection/HeaderSubsection.vue";
import FooterSubsection from "./components/FooterSubsection/FooterSubsection.vue";
import Toolbar from "./components/Toolbar/Toolbar.vue";

export default {
  name: "Container",
  components: {
    HeaderSubsection,
    FooterSubsection,
    Toolbar
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  background-color: #FAF9F6;
  position: relative;
  padding-bottom: 100px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>