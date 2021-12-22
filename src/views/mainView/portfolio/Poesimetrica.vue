<template>
  <section>
    <h1>Poesimétrica</h1>
    <div class="description">
      <div class="info">
        <p>
          This web application helps you create poems and songs in Spanish,
          while you write you will be able to visualize the metrics of your
          verses and the rhyme. As an addition you can also go to the definition
          in the dictionary of each of the words you write. In the future it is
          thought that you can add poems already written and convert them to the
          application format.
        </p>
        <p>
          This is a less visually appealing but more
          <span>programmatically challenging project.</span> In order to carry
          out this project <span>I have created two new npm libraries:</span>
        </p>
        <div class="npm-section">
          <NpmLinkButton text="riman" link="" />
          <NpmLinkButton text="metrica-verso" link="" />
        </div>
        <p>
          <span>Riman</span> is a library that checks if two words rhyme in
          Spanish. It also provides you with relevant infromation about words
          such as assonace rhyme, consonant rhyme, syllables, stressed syllable
          and much more.
        </p>
        <p>
          <span>Metrica-verso</span> is a library that analyzes the meter of a
          verse in Spanish taking into account the synalepha, diereis and rhyme
          of the verse.
        </p>
        <p>
          Both of this npm modules are programed in <span>TypeScript</span> and
          free to use.
        </p>
        <p>
          To make this project I used
          <span>Figma, Vue with TypeScript</span> and some other
          <span>NPM libraries.</span>
        </p>
        <div class="tags">
          <Tag text="Desktop" color="blue" />
          <Tag text="New version soon" color="blue" />
          <Tag text="Spanish" :invert="true" color="blue" />
        </div>
      </div>
      <div class="rhyme">
        <p class="title">Try to rhyme two words in Spanish</p>
        <p class="error" v-if="error !== ''">{{ error }}</p>
        <div class="input-rhyme">
          <input type="text" placeholder="Word one" v-model="wordOne" />
          <input type="text" placeholder="Word two" v-model="wordTwo" />
        </div>
        <button @click="checkRhyme">Check result</button>
        <div class="input-words">
          <p>{{ wordOne }}</p>
          <div class="line"></div>
          <p>{{ wordTwo }}</p>
        </div>
        <div class="result">
          <div class="center">
            <div>
              <p>rhyme</p>
              <p>{{ rhyme }}</p>
            </div>
            <div>
              <p>type</p>
              <p>{{ typeRhyme }}</p>
            </div>
            <div>
              <p>rhyme ending</p>
              <p>{{ endRhyme[0] }}</p>
              <p>{{ endRhyme[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <img
      src="@/assets/portfolio-imgs/poesimetrica.png"
      alt="solar-system image"
    />
    <div class="button-area">
      <WebLinkButton link="" color="blue" />
      <GithubLinkButton
        link="https://github.com/miggy97/poesimetrica"
        color="blue"
      />
    </div>
  </section>
</template>
<script>
import Tag from "../../../components/Tag.vue";
import WebLinkButton from "../../../components/WebLinkButton.vue";
import GithubLinkButton from "../../../components/GithubLinkButton.vue";
import NpmLinkButton from "../../../components/NpmLinkButton.vue";
import * as riman from "riman";

export default {
  name: "Poesimetrica",
  components: {
    Tag,
    WebLinkButton,
    GithubLinkButton,
    NpmLinkButton,
  },

  data() {
    return {
      wordOne: "",
      wordTwo: "",
      rhyme: null,
      typeRhyme: "",
      endRhyme: [],
      error: "",
    };
  },
  methods: {
    checkRhyme() {
      try {
        const result = riman.analyze(this.wordOne, this.wordTwo);
        this.rhyme = result.riman;
        this.typeRhyme = result.tipoRima;
        this.endRhyme = [];
        if (this.rhyme && result.tipoRima === "asonante") {
          this.endRhyme.push(result.palabraUno.rimaAsonante);
          this.endRhyme.push(result.palabraDos.rimaAsonante);
        } else {
          this.endRhyme.push(result.palabraUno.rimaConsonante);
          this.endRhyme.push(result.palabraDos.rimaConsonante);
        }
        this.error = "";
      } catch (error) {
        this.error = error.toString();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  margin-top: 5em;
  padding-left: 2em;
  border-left: 3px solid #34a9fe;

  h1 {
    font-size: 2.8em;
    color: white;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  .description {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;
    .info {
      .npm-section {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 2em;
        margin-top: 2em;
        gap: 4rem;
      }

      p {
        color: white;
        font-size: 1.1em;
        margin-bottom: 2em;
        line-height: 1.6;
        width: 60ch;
        span {
          color: #34a9fe;
        }
      }

      .tags {
        margin-top: 3em;
        display: flex;
        gap: 1em;
        margin-bottom: 2em;
      }
    }

    .rhyme {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.5em;
      border: 2px solid #34a9fe;
      padding: 2em;

      .title {
        font-size: 2rem;
        font-weight: 300;
        color: white;
        margin-bottom: 2em;
      }

      .error {
        font-size: 1.1rem;
        color: #b33638;
        margin-bottom: 1em;
      }

      .input-rhyme {
        display: flex;
        justify-content: center;
        gap: 2em;
        align-items: center;
        width: 100%;
        margin-bottom: 1.5em;

        input {
          font-size: 1.1rem;
          padding: 1em 1em;
          width: 13em;
          color: white;
          border-radius: 0.5rem;
          font-weight: 300;
          background: #34364e;
          border: 1px solid rgba(255, 255, 255, 0.27);
          outline: none;

          &::placeholder {
            color: rgba(255, 255, 255, 0.27);
            font-weight: 300;
            opacity: 1;
          }

          &:focus {
            border: 1px solid #34a9fe;
            box-shadow: 0px 0px 4px 2px rgba(52, 169, 254, 0.5);
          }
        }
      }

      button {
        font-family: "Inter", sans-serif;
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: 300;
        border: 1px solid #34a9fe;
        background: rgba(52, 169, 254, 0.17);
        cursor: pointer;
        margin-bottom: 2em;

        &:hover {
          background: #34a9fe;
        }
      }

      .input-words {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5em;
        margin-bottom: 1.5em;
        p {
          font-size: 1.5rem;
          border-radius: 0.5rem;
          font-weight: 300;
          border: 1px solid rgba(255, 255, 255, 0.27);
          color: white;
          padding: 0.5rem 1rem;
        }

        .line {
          width: 3em;
          height: 1px;
          background: rgba(255, 255, 255, 0.27);
        }
      }

      .result {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .center {
          display: flex;
          flex-direction: column;
          gap: 1em;

          div {
            display: flex;
            gap: 0.5em;
            p {
              color: white;
              font-size: 1.5rem;
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
      }
    }
  }

  img {
    width: 100%;
  }

  .button-area {
    margin-top: 3em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4rem;
  }
}
</style>
