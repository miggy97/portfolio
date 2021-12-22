<template>
  <div :class="colorObject" class="button">
    <p>{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
      validator: function (value) {
        return ["green", "blue", "purple"].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      required: true,
    },
    invert: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  name: "Tag",
  computed: {
    colorObject: function () {
      return {
        green: this.color === "green" && this.invert === false,
        "green-invert": this.color === "green" && this.invert === true,
        blue: this.color === "blue" && this.invert === false,
        "blue-invert": this.color === "blue" && this.invert === true,
        purple: this.color === "purple" && this.invert === false,
        "purple-invert": this.color === "purple" && this.invert === true,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
//color varibles
$green: #1fba73;
$blue: #34a9fe;
$purple: #a29bfe;

.button {
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1em 0.7em;
}

.green {
  background: $green;

  p {
    color: white;
    font-size: 1.1em;
  }
}

.green-invert {
  background: transparent;
  border: 2px solid $green;

  p {
    color: $green;
  }
}

.blue {
  background: $blue;

  p {
    color: white;
    font-size: 1.1em;
  }
}

.blue-invert {
  background: transparent;
  border: 2px solid $blue;

  p {
    color: $blue;
  }
}

.purple {
  background: $purple;

  p {
    color: white;
    font-size: 1.1em;
  }
}

.purple-invert {
  background: transparent;
  border: 2px solid $purple;

  p {
    color: $purple;
  }
}
</style>
