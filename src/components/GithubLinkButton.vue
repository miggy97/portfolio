<template>
  <button @click="goTo" :class="colorObject">
    <p>Github code</p>
    <img
      v-if="color === 'green'"
      src="@/assets/logos/github-green.svg"
      alt="link icon"
    />
    <img
      v-if="color === 'blue'"
      src="@/assets/logos/github-blue.svg"
      alt="link icon"
    />
    <img
      v-if="color === 'purple'"
      src="@/assets/logos/github-purple.svg"
      alt="link icon"
    />
  </button>
</template>

<script>
export default {
  name: "GithubLinkButton",
  props: {
    link: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
      validator: function (value) {
        return ["green", "blue", "purple"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    colorObject: function () {
      return {
        green: this.color === "green",
        blue: this.color === "blue",
        purple: this.color === "purple",
      };
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
//color varibles
$green: #1fba73;
$blue: #34a9fe;
$purple: #a29bfe;

button {
  font-family: "Inter", sans-serif;
  background: transparent;
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
  &:hover img {
    transform: translateX(4px);
  }

  img {
    margin-top: 4px;
    width: 1.5em;
    transition: all 0.2s ease-out;
  }
}

.green {
  border: 3px solid $green;
  color: $green;
}
.blue {
  border: 3px solid $blue;
  color: $blue;
}
.purple {
  border: 3px solid $purple;
  color: $purple;
}
</style>
