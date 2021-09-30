<template>
  <!-- <router-link to="/about">About</router-link> -->
  <main>
    <!-- <img class="blob" src="@/assets/blob.svg" alt="blob" /> -->
    <svg viewBox="0 0 200 200">
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
        <!-- <p>Hi, I’m <span style="color:#34a9fe">Miguel.</span></p> -->
        <!-- <p>
          I’m a passionate web developer and I think I enjoy
          <span style="color:#1fba73">micro-interactions</span> a little too much.
        </p> -->
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
      <div class="line">
        <div class="chunk1"></div>
      </div>
      <div class="line">
        <div class="chunk2"></div>
        <div class="chunk3"></div>
      </div>
      <div class="line">
        <div class="chunk4"></div>
        <div class="chunk5"></div>
      </div>
      <div class="line">
        <div class="chunk6"></div>
        <div class="chunk7"></div>
        <div class="chunk8"></div>
      </div>
    </div>
  </main>
</template>

<script>
import { spline } from "@georgedoescode/spline";
import SimplexNoise from "simplex-noise";
import TypeIt from "typeit";
import gsap from "gsap";

export default {
  name: "Home",
  data() {
    return {};
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
  },
  mounted() {
    new TypeIt(".firstTxt", {
      speed: 90,
      waitUntilVisible: true,
      afterComplete: function (instance) {
        instance.destroy();
        new TypeIt(".secondTxt", {
          speed: 100,
          waitUntilVisible: true,
          afterComplete: function () {
            let tl = gsap.timeline();
            tl.to(".screen", {
              y:-40,
              opacity: 1,
              stagger: 0.2,
              duration: 0.5,
              ease: "in",
            }).from(".line", {
              width: 0,
              opacity: 0,
              stagger: 0.2,
              duration: 1,
              ease: "in",
            }).to("svg", {
              width: "120vmin",
              opacity: 1,
              duration: 2,
              ease: "out",
            }).to(".btn-area", {
              opacity: 1,
              duration: 1,
              stagger: 0.2,
              ease: "back",
            });
          },
        })
          .type(
            'I’m a passionate web developer and I think I enjoy <span style="color:#1fba73">micro-interactions</span> a little too much.'
          )
          .pause(1000)
          .go();
      },
    })
      .type('Hi, I’m <span style="color:#34a9fe">Miguel')
      .pause(1000)
      .go();

    // our <path> element
    const path = document.querySelector("path");
    // used to set our custom property values
    const root = document.documentElement;
    const points = this.createPoints();

    const simplex = new SimplexNoise();
    // how fast we progress through "time"
    let noiseStep = 0.0005;
    let hueNoiseOffset = 0;

    function map(n, start1, end1, start2, end2) {
      return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }
    function noise(x, y) {
      // return a value at {x point in time} {y point in time}
      return simplex.noise2D(x, y);
    }

    (function animate() {
      // generate a smooth continuous curve based on points, using Bezier curves. spline() will return an SVG path-data string. The arguments are (points, tension, close). Play with tension and check out the effect!
      path.setAttribute("d", spline(points, 1, true));
      requestAnimationFrame(animate);
      // for every point...
      for (let i = 0; i < points.length; i++) {
        const point = points[i];

        // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
        const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
        const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
        // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
        const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
        const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

        // update the point's current coordinates
        point.x = x;
        point.y = y;

        // progress the point's x, y values through "time"
        point.noiseOffsetX += noiseStep;
        point.noiseOffsetY += noiseStep;
      }
      hueNoiseOffset += noiseStep / 6;
      const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
      const hue = map(hueNoise, -1, 1, 0, 360);

      root.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
      root.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);
      document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`;
    }.bind(this)());
  },
};
</script>

<style lang="scss" scoped>
main {
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 3fr 2fr;
  justify-items: center;
  align-items: center;

  svg {
    position: absolute;
    /* a perfectly square <svg> element that will never overflow the viewport */
    width: 0;
    height: 100vmin;
    z-index: 0;
    right: 5%;
    opacity: 0;
  }

  .blob {
    position: absolute;
    z-index: 0;
    right: 10%;
    max-height: 90%;
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
    width: 75%;
    height: 23.5rem;
    padding: 4rem 3rem;
    background: rgba(61, 64, 91, 0.53);
    border: 5px solid rgba(255, 255, 255, 0.27);
    border-radius: 2rem;
    color: white;
    text-align: left;
    font-family: "Inter", sans-serif;
    font-weight: 300;

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
    width: 75%;
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
      img {
        margin-top: 4px;
        width: 0.7em;
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
    opacity: 0;
    position: relative;
    z-index: 1;
    width: 75%;
    background: blue;
    border-radius: 1rem;
    background: linear-gradient(135deg, #27293d 0%, #3d405b 100%);
    box-shadow: -3px 3px 6px rgba(45, 48, 68, 0.2),
      3px -3px 6px rgba(45, 48, 68, 0.2), -3px -3px 6px rgba(55, 58, 84, 0.9),
      3px 3px 8px rgba(45, 48, 68, 0.9), inset 1px 1px 2px rgba(55, 58, 84, 0.3),
      inset -1px -1px 2px rgba(45, 48, 68, 0.5);
    padding: 3.5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .line {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 1rem;

      div {
        height: 2rem;
        border-radius: 2rem;
      }

      .chunk1 {
        background: #34a9fe;
        width: 60%;
      }
      .chunk2 {
        background: #f3af2e;
        width: 60%;
      }
      .chunk3 {
        background: #1fba73;
        width: 30%;
      }
      .chunk4 {
        background: #a29bfe;
        width: 30%;
      }
      .chunk5 {
        background: #1fba73;
        width: 40%;
      }
      .chunk6 {
        background: #34a9fe;
        width: 40%;
      }
      .chunk7 {
        background: #f3af2e;
        width: 30%;
      }
      .chunk8 {
        background: #a29bfe;
        width: 30%;
      }
    }
  }
}
</style>
