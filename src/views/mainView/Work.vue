<template>
  <main>
    <div class="current-job">
      <p>I am currently working at Fundación ONCE</p>
      <div class="image-container">
        <img
          src="@/assets/experience/fundacion_logo.png"
          alt="Fundación ONCE"
        />
      </div>
    </div>
    <h1>Experience</h1>
    <div class="content">
      <TimeStamp
        :isOne="isOne"
        :isTwo="isTwo"
        :isThree="isThree"
        :isFour="isFour"
        @selected="changeCard"
      />
      <div class="cards">
        <transition name="slide">
          <ImageCard
            v-if="isOne"
            :img="cardContent[0].img"
            :title="cardContent[0].title"
            :text="cardContent[0].text"
          />
          <ImageCard
            v-else-if="isTwo"
            :img="cardContent[1].img"
            :title="cardContent[1].title"
            :text="cardContent[1].text"
          />
          <ImageCard
            v-else-if="isThree"
            :img="cardContent[2].img"
            :title="cardContent[2].title"
            :text="cardContent[2].text"
            :isTag="true"
          />
          <ImageCard
            v-else-if="isFour"
            :img="cardContent[3].img"
            :title="cardContent[3].title"
            :text="cardContent[3].text"
          />
        </transition>

        <div class="button-area">
          <button v-if="!isOne" class="back" @click="back">
            <img src="@/assets/back-white.svg" alt="back icon" />
            <p>Back</p>
          </button>
          <button v-if="!isFour" class="next" @click="next">
            <p>Next</p>
            <img src="@/assets/next-white.svg" alt="next icon" />
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import TimeStamp from "../../components/TimeStamp.vue";
import ImageCard from "../../components/ImageCard.vue";

export default {
  name: "Work",
  components: {
    TimeStamp,
    ImageCard,
  },
  data() {
    return {
      cardContent: [
        {
          img: "recuerdo.png",
          title: "Colegio Nuestra Señora del Recuerdo",
          text: "A really good school where I learned a lot, made good friends and acquire good manners. Here is where I started to be interested in programming.",
        },
        {
          img: "lower-dauphin.png",
          title: "Lower Dauphin School District Pennsylvania",
          text: "The best experience of my life, I learned English, traveled, made friends and began to show interest in web design.",
        },
        {
          img: "utad.jpg",
          title: "Software Engineer Degree at U-tad",
          text: "This degree in software engineering made the difference regarding my knowledge in programming and brought me closer to the world of work.",
        },
        {
          img: "fonce.jpeg",
          title: "Fundación ONCE",
          text: "Now I am working as a developer at Fundación ONCE where we take care of making the world more accessible for people with disabilities.",
        },
      ],
      isOne: true,
      isTwo: false,
      isThree: false,
      isFour: false,
    };
  },
  methods: {
    changeCard(selection) {
      this.isOne = false;
      this.isTwo = false;
      this.isThree = false;
      this.isFour = false;

      if (selection === "one") {
        this.isOne = true;
      } else if (selection === "two") {
        this.isTwo = true;
      } else if (selection === "three") {
        this.isThree = true;
      } else if (selection === "four") {
        this.isFour = true;
      }
    },
    next() {
      if (this.isOne) {
        this.isOne = false;
        this.isTwo = true;
      } else if (this.isTwo) {
        this.isTwo = false;
        this.isThree = true;
      } else if (this.isThree) {
        this.isThree = false;
        this.isFour = true;
      }
    },
    back() {
      if (this.isTwo) {
        this.isOne = true;
        this.isTwo = false;
      } else if (this.isThree) {
        this.isTwo = true;
        this.isThree = false;
      } else if (this.isFour) {
        this.isThree = true;
        this.isFour = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  min-height: 100vh;
  scroll-snap-align: start;
  text-align: left;
  display: flex;
  flex-flow: column;
  padding: 3em 3em 3em 2em;
  flex: 0 0 100%;

  .current-job {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    background: #ca3d42;
    padding-left: 2em;
    border-radius: 3em;
    gap: 1em;
    z-index: 1;
    height: 5em;
    right: 3em;
    top: 3em;

    .image-container {
      width: 5em;
      height: 5em;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      img {
        width: 4em;
      }
    }

    p {
      font-size: 1em;
      color: white;
      font-weight: 300;
    }
  }

  h1 {
    font-size: 3.5em;
    color: white;
    font-weight: 400;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 1.7em;
      height: 4px;
      background: #1fba73;
      bottom: 0;
      left: 0;
      border-radius: 4px;
    }
  }

  .content {
    padding-top: 6em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100%;
    align-items: center;

    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2em;

      .button-area {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 2em;
        button {
          font-family: "Inter", sans-serif;
          background: #1fba73;
          text-decoration: none;
          border: none;
          font-size: 2rem;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 300;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5em;
          cursor: pointer;
          color: white;

          img {
            margin-top: 4px;
            width: 0.7em;
            transition: all 0.2s ease-out;
          }
        }
        .next:hover {
          &:hover img {
            transform: translateX(4px);
          }
        }
        .back:hover {
          &:hover img {
            transform: translateX(-4px);
          }
        }
      }
    }
  }
}

.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-enter-from {
  opacity: 0;
}
</style>
