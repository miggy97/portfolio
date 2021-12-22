<template>
  <main>
    <h1>About me</h1>
    <div class="content">
      <div class="half-circle">
        <div
          @click="clicked('camara')"
          @mouseover="isCamaraHover = true"
          @mouseleave="isCamaraHover = false"
          :class="{ selected: isCamara || isCamaraHover }"
          class="camera"
        >
          <img
            v-if="!isCamara && !isCamaraHover"
            src="@/assets/about-me/camara.svg"
            alt=""
          />
          <img v-else src="@/assets/about-me/camara-dark.svg" alt="" />
        </div>
        <div
          @click="clicked('movies')"
          @mouseover="isMoviesHover = true"
          @mouseleave="isMoviesHover = false"
          :class="{ selected: isMovies || isMoviesHover }"
          class="movies"
        >
          <img
            v-if="!isMovies && !isMoviesHover"
            src="@/assets/about-me/movie.svg"
            alt=""
          />
          <img v-else src="@/assets/about-me/movie-dark.svg" alt="" />
        </div>
        <div
          @click="clicked('person')"
          @mouseover="isPersonHover = true"
          @mouseleave="isPersonHover = false"
          :class="{ selected: isPerson || isPersonHover }"
          class="person"
        >
          <img
            v-if="!isPerson && !isPersonHover"
            src="@/assets/about-me/person.svg"
            alt=""
          />
          <img v-else src="@/assets/about-me/person-dark.svg" alt="" />
        </div>
        <div
          @click="clicked('games')"
          @mouseover="isGamesHover = true"
          @mouseleave="isGamesHover = false"
          :class="{ selected: isGames || isGamesHover }"
          class="games"
        >
          <img
            v-if="!isGames && !isGamesHover"
            src="@/assets/about-me/games.svg"
            alt=""
          />
          <img v-else src="@/assets/about-me/games-dark.svg" alt="" />
        </div>
        <div
          @click="clicked('sports')"
          @mouseover="isSportsHover = true"
          @mouseleave="isSportsHover = false"
          :class="{ selected: isSports || isSportsHover }"
          class="sports"
        >
          <img
            v-if="!isSports && !isSportsHover"
            src="@/assets/about-me/ball.svg"
            alt=""
          />
          <img v-else src="@/assets/about-me/ball-dark.svg" alt="" />
        </div>
        <transition name="grow">
          <div v-if="isCamara" class="line _camara"></div>
          <div v-else-if="isMovies" class="line _movies"></div>
          <div v-else-if="isPerson" class="line _person"></div>
          <div v-else-if="isGames" class="line _games"></div>
          <div v-else-if="isSports" class="line _sports"></div>
        </transition>

        <!-- Center area -->
        <div v-if="isCamara" class="camara-content">
          <h2>Me</h2>
          <img class="photo" src="@/assets/about-me/me.png" alt="" />
        </div>

        <div v-else-if="isMovies" class="movies-content">
          <h2>My top movies</h2>
          <img class="gif" src="@/assets/about-me/movies.gif" alt="" />
        </div>

        <div v-else-if="isPerson" class="person-content">
          <div>
            <p>name</p>
            <p>Miguel Ingelmo Barrada</p>
          </div>
          <div>
            <p>age</p>
            <p>24</p>
          </div>
          <div>
            <p>born</p>
            <p>28-04-1997</p>
          </div>
          <div>
            <p>live</p>
            <p>Madrid, Spain</p>
          </div>
          <div>
            <p>language</p>
            <p>Spanish</p>
            <p>English</p>
          </div>
        </div>

        <div v-else-if="isGames" class="games-content">
          <h2>My top games</h2>
          <img class="gif" src="@/assets/about-me/games.gif" alt="" />
        </div>

        <div v-else-if="isSports" class="sports-content">
          <h2>I love padel</h2>
          <img class="gif" src="@/assets/about-me/sports.gif" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "Person",
  data() {
    return {
      isCamara: true,
      isMovies: false,
      isPerson: false,
      isGames: false,
      isSports: false,
      isCamaraHover: false,
      isMoviesHover: false,
      isPersonHover: false,
      isGamesHover: false,
      isSportsHover: false,
    };
  },
  methods: {
    clicked(selection) {
      this.isCamara = false;
      this.isMovies = false;
      this.isPerson = false;
      this.isGames = false;
      this.isSports = false;

      switch (selection) {
        case "camara":
          this.isCamara = true;
          break;
        case "movies":
          this.isMovies = true;
          break;
        case "person":
          this.isPerson = true;
          break;
        case "games":
          this.isGames = true;
          break;

        default:
          this.isSports = true;
          break;
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
    padding-top: 3em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .half-circle {
      width: 70em;
      height: 35em; /* as the half of the width */
      border: 2px #1fba7465;
      border-style: dashed;
      border-top-left-radius: 35em; /* 100px of height + 10px of border */
      border-top-right-radius: 35em; /* 100px of height + 10px of border */
      border-bottom: 0;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      position: relative;

      .camera,
      .movies,
      .person,
      .games,
      .sports {
        position: absolute;
        width: 10.25em;
        height: 10.25em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 2px solid #1fba73;
        left: calc(50% - 5em);
        bottom: -4em;
        background: #27293d;
        cursor: pointer;

        img {
          width: 6em;
          height: auto;
        }
      }

      .camera {
        transform: translateX(-35em);
      }

      .movies {
        transform: rotate(45deg) translateX(-35em);
        img {
          transform: rotate(-45deg);
        }
      }

      .person {
        transform: translateY(-35em);
      }

      .games {
        transform: rotate(135deg) translateX(-35em);
        img {
          transform: rotate(45deg);
        }
      }

      .sports {
        transform: translateX(35em);
      }

      .line {
        height: 1px;
        width: 25em;
        background: #1fba73;
        position: absolute;
        z-index: 0;
      }

      ._camara {
        left: 5em;
        bottom: 1em;
      }
      ._movies {
        left: 23.5em;
        transform: rotate(45deg) translateX(-18.9em);
      }
      ._person {
        left: 22.5em;
        transform: rotate(90deg) translateX(-18.5em);
      }
      ._games {
        left: 23.5em;
        bottom: 2em;
        transform: rotate(135deg) translateX(-16em);
      }
      ._sports {
        right: 4.8em;
        bottom: 1em;
        transform: rotate(180deg);
      }

      // center-area
      .camara-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        h2 {
          font-size: 3em;
          color: #1fba73;
          font-weight: 300;
        }

        .photo {
          width: 25em;
          height: auto;
          margin-bottom: -4em;
          z-index: 1;
        }
      }

      .movies-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        h2 {
          font-size: 3em;
          color: #1fba73;
          font-weight: 300;
        }
        .gif {
          width: 25em;
          height: auto;
          margin-bottom: -4em;
          z-index: 1;
        }
      }

      .person-content {
        width: 26em;
        height: 26em;
        margin-bottom: -4em;
        border-radius: 50%;
        border-top: 1px solid #1fba73;
        background: #27293d;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        align-content: center;
        // flex-direction: column;
        z-index: 1;
        gap: 1.5em;

        div {
          display: flex;
          gap: 0.5em;
          p {
            color: white;
            font-size: 1.1rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-weight: 300;
            &:nth-child(1) {
              border: 1px solid #34a9fe;
              background: rgba(52, 169, 254, 0.17);
            }
            &:nth-child(2),
            &:nth-child(3) {
              border: 1px solid rgba(255, 255, 255, 0.27);
            }
          }
        }
      }

      .games-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        h2 {
          font-size: 3em;
          color: #1fba73;
          font-weight: 300;
        }
        .gif {
          width: 25em;
          height: auto;
          margin-bottom: -4em;
          z-index: 1;
        }
      }

      .sports-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2em;

        h2 {
          font-size: 3em;
          color: #1fba73;
          font-weight: 300;
        }
        .gif {
          width: 25em;
          height: auto;
          margin-bottom: -4em;
          z-index: 1;
        }
      }
    }
  }
}

.grow-enter-active {
  animation: grow 0.5s ease-out;
}

// .grow-enter-from{
//   transform: scale(0, 1);
// }

.selected {
  background: #1fba73 !important;
}

@keyframes grow {
  0% {
    background: linear-gradient(to left, transparent 50%, #1fba73 50%) right;
    background-size: 200%;
  }
  100% {
    background: linear-gradient(to left, transparent 50%, #1fba73 50%) left;
    background-size: 200%;
  }
}
</style>
