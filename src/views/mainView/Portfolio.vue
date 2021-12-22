<template>
  <main>
    <h1>Portfolio</h1>
    <div>
      <SolarSystem />
      <Poesimetrica />
      <JoannaLetter />
    </div>
  </main>
</template>
<script>
import SolarSystem from "./portfolio/SolarSystem.vue";
import Poesimetrica from "./portfolio/Poesimetrica.vue";
import JoannaLetter from "./portfolio/JoannaLetter.vue";

export default {
  name: "Portfolio",
  components: {
    SolarSystem,
    Poesimetrica,
    JoannaLetter,
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  width: 100%;
  text-align: left;
  height: 100%;
  padding: 3em 3em 3em 2em;
  scroll-snap-align: start;
  flex: 0 0 max-content;

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

  div {
    display: flex;
    flex-direction: column;
    gap: 5em;
  }
}
</style>
