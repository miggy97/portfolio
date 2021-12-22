<template>
  <button @click="goTo" :class="colorObject">
    <p>Visit website</p>
    <img src="@/assets/link.svg" alt="link icon" />
  </button>
</template>

<script>
export default {
  name: "WebLinkButton",
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
  color: white;
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
    width: 1.5em;
    transition: all 0.2s ease-out;
  }
}

.green {
  background: $green;
}
.blue {
  background: $blue;
}
.purple {
  background: $purple;
}
</style>
