<template>
  <main>
    <h1>Skills</h1>
    <section class="skill-cards">
      <div class="frontend">
        <h2>Frontend</h2>
        <p>
          This is the area in which I have the most experience and I feel the
          most comfortable. I have worked more than 3 years developing web
          frontend applications.
        </p>
      </div>
      <div class="backend">
        <h2>Backend</h2>
        <p>
          I've been working on backend application development for about a year.
          Although I have been using linux for much longer and this is speeding
          up my learning a lot.
        </p>
      </div>
      <div class="others">
        <h2>Others</h2>
        <p>
          During these years I have participated in projects using technologies
          such as Android, Raspberry Pi, DialogFlow, Figma and Photoshop, to
          name a few.
        </p>
      </div>
    </section>
    <section class="comments">
      <div class="vue-comment">
        <div class="circle">
          <img src="@/assets/logos/vue-js.svg" alt="vue logo" />
        </div>
        <p>I have worked with Vue from the beginning.</p>
      </div>
      <div class="figma-comment">
        <div class="circle">
          <img src="@/assets/logos/figma.svg" alt="vue logo" />
        </div>
        <p>I use Figma to design my projects.</p>
      </div>
      <div class="design-comment">
        <div class="circle">
          <img src="@/assets/logos/design.svg" alt="vue logo" />
        </div>
        <p>I love UI-UX design and web animations.</p>
      </div>
    </section>
    <section class="stack">
      <div class="frontend">
        <img
          style="grid-area: html"
          src="@/assets/logos/html-5.svg"
          alt="logo html5"
        />
        <img
          style="grid-area: css"
          src="@/assets/logos/css.svg"
          alt="logo css"
        />
        <img
          style="grid-area: js"
          src="@/assets/logos/javascript.svg"
          alt="logo javascript"
        />
        <img
          style="grid-area: ts"
          src="@/assets/logos/typescript.svg"
          alt="logo typescript"
        />
        <img
          style="grid-area: sass"
          src="@/assets/logos/sass.svg"
          alt="logo sass"
        />
        <img
          style="grid-area: vue"
          src="@/assets/logos/vue-js.svg"
          alt="logo vue"
        />
        <img
          style="grid-area: npm"
          src="@/assets/logos/npm.svg"
          alt="logo npm"
        />
      </div>
      <div class="backend">
        <img
          style="grid-area: node"
          src="@/assets/logos/node-js.svg"
          alt="logo nodejs"
        />
        <img
          style="grid-area: express"
          src="@/assets/logos/express.svg"
          alt="logo express"
        />
        <img
          style="grid-area: nginx; max-width: 11em"
          src="@/assets/logos/nginx.svg"
          alt="logo nginx"
        />
        <img
          style="grid-area: mongodb"
          src="@/assets/logos/mongodb.svg"
          alt="logo mongodb"
        />
        <img
          style="grid-area: npm"
          src="@/assets/logos/npm.svg"
          alt="logo npm"
        />
      </div>
      <div class="others">
        <img
          style="grid-area: figma"
          src="@/assets/logos/figma.svg"
          alt="logo figma"
        />
        <img
          style="grid-area: photoshop"
          src="@/assets/logos/photoshop.svg"
          alt="logo photoshop"
        />
        <img
          style="grid-area: android"
          src="@/assets/logos/android.svg"
          alt="logo android"
        />
        <img
          style="grid-area: dialogflow"
          src="@/assets/logos/dialogflow.svg"
          alt="logo dialogflow"
        />
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "Skills",
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

  .skill-cards {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;
    padding-top: 3em;

    div {
      background: rgba(55, 58, 84, 0.9);
      padding: 1.5em;
      color: white;
      border-radius: 0.7em;

      h2 {
        font-size: 2em;
        font-weight: 400;
      }

      p {
        font-size: 1.1em;
        font-weight: 300;
        margin-top: 1em;
        line-height: 1.6;
      }
    }

    .frontend {
      border: 1px solid #1fba73;
      box-shadow: 0px 0px 4px 4px rgba(31, 186, 115, 0.25);
      h2 {
        color: #1fba73;
      }
    }

    .backend {
      border: 1px solid #34a9fe;
      box-shadow: 0px 0px 4px 4px rgba(52, 169, 254, 0.25);
      h2 {
        color: #34a9fe;
      }
    }

    .others {
      border: 1px solid #a29bfe;
      box-shadow: 0px 0px 4px 4px rgba(162, 155, 254, 0.25);
      h2 {
        color: #a29bfe;
      }
    }
  }

  .comments {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;
    margin-top: 5em;

    .vue-comment,
    .figma-comment,
    .design-comment {
      background: rgba(55, 58, 84, 0.9);
      border-radius: 3em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5em;
      padding-right: 2em;

      div {
        width: 5em;
        height: 5em;
        border-radius: 100%;
        background: rgba(55, 58, 84, 0.9);
        box-shadow: 5px 2px 4px 0px rgba(0, 0, 0, 0.25);
        display: grid;
        place-items: center;
      }

      p {
        font-size: 1.1em;
        font-weight: 300;
        color: white;
      }
    }

    .vue-comment div img {
      width: 3em;
      height: auto;
    }
    .figma-comment div img {
      width: auto;
      height: 3em;
    }
    .design-comment div img {
      width: auto;
      height: 3em;
    }
  }

  .stack {
    width: 90%;
    margin-top: 5em;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3em;

    div {
      width: 100%;
      height: 100%;
      padding-left: 2em;
      padding-right: 5em;

      img {
        transform: scale(0.9, 0.9);
      }
    }

    .frontend {
      border-left: 2px solid #2fba73;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      align-items: center;
      justify-items: start;
      grid-template-areas:
        "html css js"
        "ts sass sass"
        "vue npm npm";
    }

    .backend {
      border-left: 2px solid #34a9fe;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      align-items: center;
      justify-items: start;
      grid-template-areas:
        "node express express"
        "nginx nginx mongodb"
        "npm npm npm";
    }

    .others {
      border-left: 2px solid #a29bfe;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto;
      align-items: center;
      justify-items: start;
      grid-template-areas:
        "figma photoshop ."
        "android dialogflow ."
        ". . .";
    }
  }
}
</style>
