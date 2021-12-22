<template>
  <div class="card">
    <div class="img-area">
      <div class="img-tag" v-if="isTag">
        <p>7 month internship at Ericsson</p>
        <img src="@/assets/experience/ericsson.png" alt="Ericsson" />
      </div>
      <img class="main-img" :src="require(`@/assets/experience/${img}`)" />
      <p class="tag">{{ title }}</p>
    </div>
    <section>
      <p>
        {{ text }}
      </p>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "ImageCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    isTag: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  mounted() {
    gsap.timeline().to(".img-tag", {
      "clip-path": "circle(130% at 89% 50%)",
      duration: 1,
      ease: "out",
      delay: 1,
    });
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(55, 58, 84, 0.9);
  border-radius: 0.5em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .img-area {
    position: relative;
    box-shadow: none;

    .img-tag {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      position: absolute;
      background: rgba(55, 58, 84, 0.8);
      padding-left: 2em;
      border-radius: 3em;
      gap: 1em;
      z-index: 1;
      height: 5em;
      right: 1em;
      top: 1em;
      clip-path: circle(15.5% at 89% 50%);

      img {
        width: 5em;
      }

      p {
        font-size: 1em;
        color: white;
        font-weight: 300;
      }
    }

    .main-img {
      position: relative;
      width: 40vw;
      height: 20em;
      object-fit: cover;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }
    .tag {
      position: absolute;
      font-size: 1em;
      color: white;
      font-weight: 300;
      bottom: 0;
      left: 0;
      padding: 0.3em 0.8em;
      background: rgba(31, 186, 115, 0.85);
    }
  }

  section {
    padding: 1.5em 1.5em;

    p {
      font-size: 1.1em;
      color: white;
      font-weight: 300;
      line-height: 1.6;
    }
  }
}
</style>
