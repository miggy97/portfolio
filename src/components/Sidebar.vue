<template>
  <main class="sidebar">
    <div class="square-selection" ref="square"></div>
    <section>
      <div
        class="square"
        @click="selected('Home')"
        :class="{ selected: isHome }"
      >
        <img src="@/assets/home.svg" alt="home icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Skills')"
        :class="{ selected: isSkills }"
      >
        <img src="@/assets/skills.svg" alt="skills icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Portfolio')"
        :class="{ selected: isPortfolio }"
      >
        <img src="@/assets/portfolio.svg" alt="portfolio icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Work')"
        :class="{ selected: isWork }"
      >
        <img src="@/assets/work.svg" alt="work icon" />
      </div>
    </section>
    <section>
      <div
        class="square"
        @click="selected('Person')"
        :class="{ selected: isPerson }"
      >
        <img src="@/assets/person.svg" alt="person icon" />
      </div>
    </section>
    <div class="contact-area">
      <div
        class="square"
        @click="selected('Contact')"
        :class="{ selectedContact: isContact }"
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
      isHome: true,
      isSkills: false,
      isPortfolio: false,
      isWork: false,
      isPerson: false,
      isContact: false,
    };
  },
  methods: {
    selected(selectionName) {
      this.isHome = false;
      this.isSkills = false;
      this.isPortfolio = false;
      this.isWork = false;
      this.isPerson = false;
      this.isContact = false;
      // home: 2.25em
      // skills: 7.75
      // portfolio: 13.25
      // work: 18.75
      // person: 24.25
      switch (selectionName) {
        case "Home":
          this.isHome = true;
          this.$refs.square.style = "top:2.25em";
          break;
        case "Skills":
          this.isSkills = true;
          this.$refs.square.style = "top:7.75em";
          break;
        case "Portfolio":
          this.isPortfolio = true;
          this.$refs.square.style = "top:13.25em";
          break;
        case "Work":
          this.isWork = true;
          this.$refs.square.style = "top:18.75em";
          break;
        case "Person":
          this.isPerson = true;
          this.$refs.square.style = "top:24.25em";
          break;

        default:
          this.isContact = true;
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
