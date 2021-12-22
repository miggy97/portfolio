<template>
  <main>
    <!-- <img class="blob" src="@/assets/blob.svg" alt="blob" /> -->
    <svg viewBox="0 0 200 200" class="blob">
      <defs>
        <!-- Our gradient fill #gradient -->
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <!-- Use CSS custom properties for the start / stop colors of the gradient -->
          <stop id="gradientStop1" offset="0%" stop-color="var(--startColor)" />
          <stop
            id="gradientStop2 "
            offset="100%"
            stop-color="var(--stopColor)"
          />
        </linearGradient>
      </defs>
      <path d="" fill="url('#gradient')"></path>
    </svg>
    <section>
      <div class="hello-card">
        <p class="firstTxt"></p>
        <p class="secondTxt"></p>
      </div>
      <div class="btn-area">
        <button class="contact">
          <p>Contact me</p>
          <img src="@/assets/next-green.svg" alt="next icon" />
        </button>
        <button class="portfolio">
          <p>Portfolio</p>
          <img src="@/assets/next-white.svg" alt="next icon" />
        </button>
      </div>
    </section>
    <div class="screen">
      <ComputerSvg />
    </div>
  </main>
</template>

<script>
import { spline } from "@georgedoescode/spline";
import SimplexNoise from "simplex-noise";
import TypeIt from "typeit";
import gsap from "gsap";
import ComputerSvg from "../../components/ComputerSvg.vue";

export default {
  name: "Home",
  components: {
    ComputerSvg,
  },
  data() {
    return {
      path: null,
      root: null,
      points: null,
      simplex: null,
      noiseStep: 0.0005,
      hueNoiseOffset: 0,
      myReq: null,
    };
  },
  watch: {
    "$store.getters.getIsBlob"(value) {
      if (!value) {
        window.cancelAnimationFrame(this.myReq);
      } else {
        this.myReq = requestAnimationFrame(this.animate);
      }
    },
  },
  methods: {
    createPoints() {
      const points = [];
      // how many points do we need
      const numPoints = 6;
      // used to equally space each point around the circle
      const angleStep = (Math.PI * 2) / numPoints;
      // the radius of the circle
      const rad = 75;

      for (let i = 1; i <= numPoints; i++) {
        // x & y coordinates of the current point
        const theta = i * angleStep;

        const x = 100 + Math.cos(theta) * rad;
        const y = 100 + Math.sin(theta) * rad;

        // store the point
        points.push({
          x: x,
          y: y,
          /* we need to keep a reference to the point's original {x, y} coordinates 
      for when we modulate the values later */
          originX: x,
          originY: y,
          // more on this in a moment!
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
        });
      }

      return points;
    },
    map(n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    },
    noise(x, y) {
      // return a value at {x point in time} {y point in time}
      return this.simplex.noise2D(x, y);
    },
    animate() {
      // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
      this.path.setAttribute("d", spline(this.points, 1, true));
      this.myReq = requestAnimationFrame(this.animate);
      // for every point...
      for (let i = 0; i < this.points.length; i++) {
        const point = this.points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = this.noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = this.noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = this.map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = this.map(nY, -1, 1, point.originY - 20, point.originY + 20);

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += this.noiseStep;
        point.noiseOffsetY += this.noiseStep;
      }
      this.hueNoiseOffset += this.noiseStep / 6;
      const hueNoise = this.noise(this.hueNoiseOffset, this.hueNoiseOffset);
      const hue = this.map(hueNoise, -1, 1, 0, 360);

      this.root.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
      this.root.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);
      document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`;
    },
  },
  mounted() {
    // DELETE ON PRODUCTION
    let tl = gsap.timeline();
    tl.to(".blob", {
      width: "120vmin",
      opacity: 1,
      duration: 0,
      ease: "out",
    })
      .to(".sidebar", {
        left: "2em",
        opacity: 1,
        duration: 0,
        ease: "out",
      })
      .to(".btn-area", {
        opacity: 1,
        duration: 0,
        stagger: 0.2,
        ease: "back",
      });
    // END DELETE ON PRODUCTION

    new TypeIt(".firstTxt", {
      speed: 90,
      waitUntilVisible: false,
      afterComplete: function (instance) {
        instance.destroy();
        new TypeIt(".secondTxt", {
          speed: 100,
          waitUntilVisible: false,
          afterComplete: function () {
            // FOR PRODUCTION //
            // let tl = gsap.timeline();
            // tl.to(".blob", {
            //   width: "120vmin",
            //   opacity: 1,
            //   duration: 2,
            //   ease: "out",
            // })
            //   .to(".sidebar", {
            //     left: "2em",
            //     opacity: 1,
            //     duration: 0.5,
            //     ease: "out",
            //   })
            //   .to(".btn-area", {
            //     opacity: 1,
            //     duration: 1,
            //     stagger: 0.2,
            //     ease: "back",
            //   });
          },
        })
          .type(
            'I’m a passionate web developer and I think I enjoy <span style="color:#1fba73">animations</span> a little too much.'
          )
          .pause(1000)
          .go();
      },
    })
      .type('Hi, I’m <span style="color:#34a9fe">Miguel')
      .pause(1000)
      .go();

    // our <path> element
    this.path = document.querySelector("path");
    // used to set our custom property values
    this.root = document.documentElement;
    this.points = this.createPoints();

    this.simplex = new SimplexNoise();

    this.myReq = requestAnimationFrame(this.animate);
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: 2.3fr minmax(0, 2fr);
  justify-items: center;
  align-items: center;
  scroll-snap-align: start;
  flex: 0 0 100%;

  .blob {
    position: absolute;
    /* a perfectly square <svg> element that will never overflow the viewport */
    width: 0;
    height: 100vmin;
    z-index: 0;
    right: 5%;
    opacity: 0;
  }

  section {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    z-index: 1;
  }

  .hello-card {
    width: 85%;
    height: 23.5rem;
    padding: 4rem 3rem;
    background: rgba(61, 64, 91, 0.53);
    border: 5px solid rgba(255, 255, 255, 0.27);
    border-radius: 2rem;
    color: white;
    text-align: left;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    backdrop-filter: blur(4px);

    .firstTxt {
      font-size: 3rem;
    }

    .secondTxt {
      margin-top: 2rem;
      font-size: 2.5rem;
    }
  }

  .btn-area {
    opacity: 0;
    width: 85%;
    display: flex;
    gap: 4rem;
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
      &:hover img {
        transform: translateX(4px);
      }

      img {
        margin-top: 4px;
        width: 0.7em;
        transition: all 0.2s ease-out;
      }
    }
    .contact {
      background: transparent;
      border: 3px solid #1fba73;
      color: #1fba73;
    }

    .portfolio {
      color: white;
    }
  }

  .screen {
    opacity: 1;
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
