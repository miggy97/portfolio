<template>
  <section>
    <h1>Joanna-letter</h1>
    <div class="description">
      <div class="info">
        <p>
          This is a more personal
          <span> project focused on micro-interactions.</span> Rather, it is a
          letter in the form of a web page that I wrote to a friend.
        </p>
        <p>
          The most complicated part of this website is the
          <span
            >concatenation of animations and creating complex elements with
            CSS.</span
          >
          Also the design and textures of the elements were dificult to
          implement.
        </p>
        <p>
          To make this project I used <span>Figma, Vue</span> and some other
          <span>NPM libraries.</span>
        </p>
        <div class="tags">
          <Tag text="Desktop" color="purple" />
          <Tag text="Animations" color="purple" />
          <Tag text="English" color="purple" :invert="true" />
        </div>
      </div>
      <div class="letter">
        <input type="text" placeholder="Your name..." v-model="name" />
        <div>
          <Letter :name="name" />
        </div>
      </div>
    </div>
    <img
      src="@/assets/portfolio-imgs/joanna-letter.png"
      alt="solar-system image"
    />
    <div class="button-area">
      <WebLinkButton link="https://joanna-letter.web.app/" color="purple" />
      <GithubLinkButton
        link="https://github.com/miggy97/letter-joanna"
        color="purple"
      />
    </div>
  </section>
</template>
<script>
import Tag from "../../../components/Tag.vue";
import WebLinkButton from "../../../components/WebLinkButton.vue";
import GithubLinkButton from "../../../components/GithubLinkButton.vue";
import Letter from "../../../components/Letter.vue";

export default {
  name: "JoannaLetter",
  components: {
    Tag,
    WebLinkButton,
    GithubLinkButton,
    Letter,
  },
  data() {
    return {
      name: "",
    };
  },
};
</script>
<style lang="scss" scoped>
section {
  margin-top: 5em;
  // margin-bottom: 5em;
  padding-left: 2em;
  border-left: 3px solid #a29bfe;

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
      p {
        color: white;
        font-size: 1.1em;
        margin-bottom: 2em;
        line-height: 1.6;
        width: 60ch;
        span {
          color: #a29bfe;
        }
      }

      .tags {
        margin-top: 3em;
        display: flex;
        gap: 1em;
        margin-bottom: 2em;
      }
    }

    .letter {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      flex-direction: column;
      gap: 6em;

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

      div {
        width: 100%;
        height: 12em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
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
