<template>
  <div class="container">
    <HeaderSubsection />
    <main> 
      <MainSubsection />
    </main>
    <FooterSubsection />
    <Toolbar />
  </div>
</template>

<script>
import HeaderSubsection from "./components/HeaderSubsection/HeaderSubsection.vue";
import MainSubsection from "./components/MainSubsection/MainSubsection.vue";
import FooterSubsection from "./components/FooterSubsection/FooterSubsection.vue";
import Toolbar from "./components/Toolbar/Toolbar.vue";

export default {
  name: "Container",
  components: {
    HeaderSubsection,
    MainSubsection,
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
  max-width: 380px;
  margin: 0 auto;
  background-color: #FAF9F6;
  position: relative;
  padding-bottom: 100px;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>ширину 