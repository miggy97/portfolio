<template>
  <main class="sidebar">
    <div class="square-selection" ref="square"></div>
    <section>
      <div
        class="square"
        @click="selected('Home', true)"
        :class="{ selected: selection === 'Home' }"
      >
        <img src="@/assets/home.svg" alt="home icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Skills', true)"
        :class="{ selected: selection === 'Skills' }"
      >
        <img src="@/assets/skills.svg" alt="skills icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Portfolio', true)"
        :class="{ selected: selection === 'Portfolio' }"
      >
        <img src="@/assets/portfolio.svg" alt="portfolio icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Work', true)"
        :class="{ selected: selection === 'Work' }"
      >
        <img src="@/assets/work.svg" alt="work icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Person', true)"
        :class="{ selected: selection === 'Person' }"
      >
        <img src="@/assets/person.svg" alt="person icon" />
      </div>
    </section>
    <div class="contact-area">
      <div
        class="square"
        @click="selected('Contact', true)"
        :class="{ selectedContact: selection === 'Contact' }"
      >
        <img src="@/assets/contact.svg" alt="contact icon" />
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      // isHome: true,
      // isSkills: false,
      // isPortfolio: false,
      // isWork: false,
      // isPerson: false,
      // isContact: false,
      selection: "Work",
      isAnimation: false,
      timeoutHandler: null,
    };
  },
  watch: {
    "$store.getters.getSelectionSidebar"() {
      if (this.isAnimation === false) {
        this.selected(this.$store.getters.getSelectionSidebar, false);
      }
    },
  },
  methods: {
    selected(selectionName, isCliked) {
      this.isAnimation = true;
      if (this.timeoutHandler) {
        clearTimeout(this.timeoutHandler);
      }
      this.timeoutHandler = setTimeout(() => {
        this.isAnimation = false;
      }, 500);
      this.selection = selectionName;
      // home: 2.25em
      // skills: 7.75
      // portfolio: 13.25
      // work: 18.75
      // person: 24.25
      switch (selectionName) {
        case "Home":
          this.$refs.square.style = "top:2.25em";
          if (isCliked) {
            document
              .querySelector(".home-view")
              .scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "Skills":
          this.$refs.square.style = "top:7.75em";
          if (isCliked) {
            document
              .querySelector(".skills-view")
              .scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "Portfolio":
          this.$refs.square.style = "top:13.25em";
          if (isCliked) {
            document
              .querySelector(".portfolio-view")
              .scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "Work":
          this.$refs.square.style = "top:18.75em";
          if (isCliked) {
            document
              .querySelector(".work-view")
              .scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "Person":
          this.$refs.square.style = "top:24.25em";
          if (isCliked) {
            document
              .querySelector(".person-view")
              .scrollIntoView({ behavior: "smooth" });
          }
          break;

        default:
          this.$refs.square.style = "top:40em";
          document.querySelector(".square-selection").style.opacity = 0;
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  opacity: 0;
  width: 5em;
  height: 90vh;
  background: rgba(55, 58, 84, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.27);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0em;
  margin: auto;
  border-radius: 0.8em;
  padding: 1em 0;

  section {
    height: 5.5em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .square {
      // background: #0375ff;
      background: transparent;
      width: 3em;
      height: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.4em;
      img {
        width: 1.5em;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .contact-area {
    position: absolute;
    bottom: 0;
    background: rgba(61, 64, 91, 1);
    height: 5.5em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 0.8em;
    border-bottom-left-radius: 0.8em;
    border-top: 1px solid rgba(255, 255, 255, 0.27);

    .square {
      // background: #0375ff;
      background: transparent;
      width: 3em;
      height: 3em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.4em;
      img {
        width: 1.5em;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .square-selection {
    width: 3em;
    height: 3em;
    background: #0375ff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
    border-radius: 0.4em;
    top: 2.25em;
    transition: top 0.3s ease-in-out, opacity 0.2s ease-in;
    // home: 2.25em
    // skills: 7.75
    // portfolio: 13.25
    // work: 18.75
    // person: 24.25
  }
}
.selectedContact {
  background: #0375ff !important;

  img {
    opacity: 1 !important;
  }
}

.selected {
  img {
    opacity: 1 !important;
  }
}
</style>
