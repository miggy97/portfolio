<template>
  <!-- <router-link to="/about">About</router-link> -->
  <div class="side-menu"></div>
  <div class="content">
    <Home class="home-view" />
    <Skills class="skills-view" />
  </div>
</template>

<script>
import Home from "./mainView/Home.vue";
import Skills from "./mainView/Skills.vue";
export default {
  name: "MainView",
  components: {
    Home,
    Skills,
  },
  mounted() {
    const observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true)
          console.log(entries[0].target.className);
      },
      { threshold: [0.3] }
    );

    observer.observe(document.querySelector(".home-view"));
    observer.observe(document.querySelector(".skills-view"));
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

.side-menu {
  width: 10em;
  min-height: 100%;
}
</style>
