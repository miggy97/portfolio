<template>
  <button @click="goTo">
    <img class="npm" src="@/assets/logos/npm-letters.svg" alt="" />
    <p>{{ text }}</p>
    <img class="link" src="@/assets/link.svg" alt="link icon" />
  </button>
</template>

<script>
export default {
  name: "NpmLinkButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    goTo() {
      window.open(this.link, "_blank").focus();
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  position: relative;
  font-family: "Inter", sans-serif;
  background: transparent;
  border: 3px solid #b33638;
  color: white;
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  &:hover {
    background: #b33638;
    .link {
      transform: translateX(4px);
    }
  }

  .npm {
    background: #b33638;
    position: absolute;
    width: 2.2em;
    border-radius: 3px;
    padding: 0.2em;
    top: -20px;
    left: 10px;
    transition: none;
  }

  .link {
    margin-top: 4px;
    width: 1.5em;
    transition: all 0.2s ease-out;
  }
}
</style>
