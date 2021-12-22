<template>
  <lottie-player
    v-if="isClick"
    class="bubble-lottie"
    src="https://assets3.lottiefiles.com/packages/lf20_swdqej6v.json"
    background="transparent"
    speed="1"
    autoplay
  ></lottie-player>
  <div class="letter" ref="letter" @click="moveLetter">
    <div class="fold-wrap" :class="{ 'fold-wrap-transition': isAnimation }">
      <div class="fold"></div>
    </div>
    <div class="msg-wrap" :class="{ 'msg-wrap-transition': isAnimation }">
      <div class="msg" :class="{ 'msg-transition': isAnimation }">
        Hi {{ name }}
      </div>
    </div>
    <div class="inside-wrap">
      <div class="inside"></div>
    </div>
    <div class="body">
      <p>Miggy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Letter",
  props: {
    name: {
      type: String,
      required: true,
      default: "Someone",
    },
  },
  data() {
    return {
      isClick: false,
      isAnimation: false,
      isFirstClick: true,
    };
  },
  methods: {
    moveLetter() {
      if (this.isFirstClick === true) {
        this.isClick = this.isFirstClick;
        this.isAnimation = true;
        this.isFirstClick = false;
      } else {
        this.isClick = this.isFirstClick;
        this.isAnimation = false;
        this.isFirstClick = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bubble-lottie {
  width: 18em;
  height: 18em;
  margin-top: -5em;
}
.letter {
  font-size: 1.2em;
  width: 8em;
  aspect-ratio: 3/ 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-shadow: 2px 4px 5px rgb(0, 0, 0, 0.2);
  border-radius: 3px;
  cursor: pointer;
  // animation: displace 1s ease;
  transition: margin 1s ease, top 1s ease, left 1s ease, font-size 1s ease;
  // &:hover .msg {
  //   color: #000 !important;
  //   transition: color 0.3s ease 1s !important;
  // }
  // &:hover .fold-wrap {
  //   transform: scaleY(-1);
  //   filter: drop-shadow(0px -1px 0px #6f9cf7);
  //   transition: transform 0.4s ease 0s;
  // }
  // &:hover .msg-wrap {
  //   z-index: 3;
  //   animation: show 0.5s ease 0.5s forwards;
  // }
  .fold-wrap {
    margin-top: 1px;
    position: absolute;
    filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.4));
    transition-delay: 1s;
    transform-origin: top;
    transition: transform 0.4s ease 0.5s;
    z-index: 2;
    .fold {
      width: 8em;
      height: 5.25em;
      background: #6f9cf7;
      background-image: url("https://www.transparenttextures.com/patterns/light-paper-fibers.png");
      clip-path: polygon(50% 50%, 0 0, 100% 0);
      border-radius: 3px;
    }
  }
  .inside-wrap {
    margin-top: 1px;
    position: absolute;
    filter: drop-shadow(0px 1px 0px rgba(255, 255, 255, 0.4));
    transform-origin: top;
    z-index: 0;
    .inside {
      width: 8em;
      height: 5.25em;
      background: #5990ff;
      background-image: url("https://www.transparenttextures.com/patterns/light-paper-fibers.png");
      clip-path: polygon(50% 50%, 0 0, 100% 0);
      border-radius: 3px;
    }
  }
  .msg-wrap {
    position: absolute;
    width: 100%;
    height: 5.8em;
    z-index: 1;
    bottom: 0;
    clip-path: polygon(100% 15%, 100% 10%, 50% 54%, 0 10%, 0 15%);
    animation: hide 0.5s ease forwards;
    .msg {
      width: 65%;
      height: 100%;
      position: absolute;
      font-family: "Yomogi", cursive;
      left: 17.5%;
      background: white;
      color: white;
      position: absolute;
      padding-left: 4px;
      font-size: 0.85em;
    }
  }
  .body {
    width: 100%;
    height: 100%;
    background: #6f9cf7;
    background-image: url("https://www.transparenttextures.com/patterns/light-paper-fibers.png");
    border-radius: 3px;

    p {
      position: absolute;
      font-family: "Yomogi", cursive;
      right: 7px;
      font-size: 0.9em;
      font-weight: 400;
      padding: 0px 5px;
      border-radius: 3px;
      bottom: 5px;
      border: 1px dotted white;
      color: white;
      margin: 0;
    }
  }
}

.load-ready {
  animation: hide 0.5s ease 0s;
}

.msg-transition {
  color: #000 !important;
  transition: color 0.3s ease 1.5s !important;
}
.fold-wrap-transition {
  transform: scaleY(-1);
  filter: drop-shadow(0px -1px 0px #6f9cf7);
  transition: transform 0.4s ease 0.5s;
}
.msg-wrap-transition {
  z-index: 3;
  animation: show 0.5s ease 1s forwards !important;
}

@keyframes hide {
  0% {
    clip-path: polygon(100% 0%, 100% 10%, 50% 54%, 0 10%, 0 0%);
    z-index: 3;
  }
  /*    90% {clip-path: polygon(100% 15%, 100% 10%, 50% 54%, 0 10%, 0 15%);z-index: 3;} */
  100% {
    clip-path: polygon(100% 15%, 100% 10%, 50% 54%, 0 10%, 0 15%);
    z-index: 1;
  }
}
@keyframes show {
  0% {
    z-index: 3;
    clip-path: polygon(100% 15%, 100% 10%, 50% 54%, 0 10%, 0 15%);
  }
  100% {
    z-index: 3;
    clip-path: polygon(100% 0%, 100% 10%, 50% 54%, 0 10%, 0 0%);
  }
}
</style>
