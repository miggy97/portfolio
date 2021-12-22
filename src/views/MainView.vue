<template>
  <!-- <router-link to="/about">About</router-link> -->
  <div class="side-menu"></div>
  <div class="content">
    <Home class="home-view" />
    <Skills class="skills-view" />
    <Portfolio class="portfolio-view" />
    <Work class="work-view" />
    <Person class="person-view" />
  </div>
</template>

<script>
import Home from "./mainView/Home.vue";
import Skills from "./mainView/Skills.vue";
import Portfolio from "./mainView/Portfolio.vue";
import Work from "./mainView/Work.vue";
import Person from "./mainView/Person.vue";

export default {
  name: "MainView",
  components: {
    Home,
    Skills,
    Portfolio,
    Work,
    Person,
  },
  // created() {
  //   window.addEventListener("beforeunload", () => {
  //     document.body.scrollTop = document.documentElement.scrollTop = 0;
  //   });
  // },
  mounted() {
    const observerShort = new IntersectionObserver(
      (entries) => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true) {
          console.log(entries[0].target.className);
          if (entries[0].target.className === "home-view") {
            this.$store.commit("changeSelectionSidebar", "Home");
            this.$store.commit("addIsBlob", true);
          }
          if (entries[0].target.className === "skills-view") {
            this.$store.commit("changeSelectionSidebar", "Skills");
            this.$store.commit("addIsBlob", false);
          }
          // if (entries[0].target.className === "portfolio-view") {
          //   this.$store.commit("changeSelectionSidebar", "Portfolio");
          // }
          if (entries[0].target.className === "work-view") {
            this.$store.commit("changeSelectionSidebar", "Work");
            this.$store.commit("addIsBlob", false);
          }
          if (entries[0].target.className === "person-view") {
            console.log("fulsadfjl");
            this.$store.commit("changeSelectionSidebar", "Person");
            this.$store.commit("addIsBlob", false);
          }
        }
      },
      { threshold: [0.3] }
    );
    const observerLong = new IntersectionObserver(
      (entries) => {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true) {
          if (entries[0].target.className === "portfolio-view") {
            this.$store.commit("changeSelectionSidebar", "Portfolio");
            this.$store.commit("addIsBlob", false);
          }
        }
      },
      { threshold: [0.1] }
    );

    observerShort.observe(document.querySelector(".home-view"));
    observerShort.observe(document.querySelector(".skills-view"));
    observerLong.observe(document.querySelector(".portfolio-view"));
    observerShort.observe(document.querySelector(".work-view"));
    observerShort.observe(document.querySelector(".person-view"));
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5em;
  scroll-snap-type: y proximity;
  overflow-y: scroll;
}

.side-menu {
  width: 10em;
  min-height: 100%;
}
</style>
