<template>
  <section>
    <div class="description">
      <div class="info">
        <h1>Solar System</h1>
        <p>
          This is one of the projects that I have enjoyed doing the most. It is
          possibly the project that has taken me the longest to complete, mainly
          due to the work done in the design part.
        </p>
        <p>
          In this simple website you can find
          <span>information about each planet in English or Spanish.</span> Also
          you can interact with a <span>3D model</span> of the planet and see
          images provided by NASA.
        </p>
        <p>
          To make this project I used <span>Figma, Vue</span> and some other
          <span>NPM libraries.</span>
        </p>
        <div class="tags">
          <Tag text="Responsive" color="green" />
          <Tag text="Desktop" color="green" />
          <Tag text="Mobile" color="green" />
          <Tag text="English and Spanish" color="green" :invert="true" />
        </div>
      </div>
      <model-viewer
        class="planet"
        loading="eager"
        camera-controls
        auto-rotate
        src="https://solarsystem.nasa.gov/system/resources/gltf_files/2372_Mars_1_6792.glb"
        alt="A 3D model of mars"
        ar
        autoplay
        disable-zoom
      >
      </model-viewer>
    </div>
    <img
      src="@/assets/portfolio-imgs/solar-system.png"
      alt="solar-system image"
    />
    <div class="button-area">
      <WebLinkButton link="https://solar-system-d831d.web.app/" color="green" />
      <GithubLinkButton
        link="https://github.com/miggy97/solar-system"
        color="green"
      />
    </div>
  </section>
</template>
<script>
import Tag from "../../../components/Tag.vue";
import WebLinkButton from "../../../components/WebLinkButton.vue";
import GithubLinkButton from "../../../components/GithubLinkButton.vue";
import "@google/model-viewer";

export default {
  name: "SolarSystem",
  components: {
    Tag,
    WebLinkButton,
    GithubLinkButton,
  },
};
</script>
<style lang="scss" scoped>
section {
  margin-top: 5em;
  padding-left: 2em;
  border-left: 3px solid #1fba73;

  .description {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .info {
      h1 {
        font-size: 2.8em;
        color: white;
        font-weight: 300;
        margin-bottom: 3rem;
      }

      p {
        color: white;
        font-size: 1.1em;
        margin-bottom: 2em;
        line-height: 1.6;
        width: 60ch;
        span {
          color: #1fba73;
        }
      }

      .tags {
        margin-top: 3em;
        display: flex;
        gap: 1em;
        margin-bottom: 2em;
      }
    }

    model-viewer {
      width: 100%;
      height: 25rem;
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
