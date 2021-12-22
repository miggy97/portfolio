<template>
  <div class="group-time">
    <!-- TIMESTAMP 1 -->
    <section>
      <div
        :class="{ selected: isOne }"
        class="timestamp"
        @click="select('one')"
      >
        <div :class="{ 'selected-circle': isOne }" class="circle"></div>
        <div class="time">
          <p>2002</p>
          <div class="short-line"></div>
          <p>2013</p>
        </div>
        <p>Colegio Nuestra Señora del Recuerdo</p>
      </div>
      <div class="line"></div>
    </section>
    <!-- TIMESTAMP 2 -->
    <section>
      <div
        :class="{ selected: isTwo }"
        class="timestamp"
        @click="select('two')"
      >
        <div :class="{ 'selected-circle': isTwo }" class="circle"></div>
        <div class="time">
          <p>2014</p>
          <div class="short-line"></div>
          <p>2015</p>
        </div>
        <p>Lower Dauphin School District Pennsylvania</p>
      </div>
      <div class="line"></div>
    </section>
    <!-- TIMESTAMP 3 -->
    <section>
      <div
        :class="{ selected: isThree }"
        class="timestamp"
        @click="select('three')"
      >
        <div :class="{ 'selected-circle': isThree }" class="circle"></div>
        <div class="time">
          <p>2015</p>
          <div class="short-line"></div>
          <p>2020</p>
        </div>
        <p>Software Engineer Degree at U-tad</p>
      </div>
      <div class="line"></div>
    </section>
    <!-- TIMESTAMP 4 -->
    <section>
      <div
        :class="{ selected: isFour }"
        class="timestamp"
        @click="select('four')"
      >
        <div :class="{ 'selected-circle': isFour }" class="circle"></div>
        <div class="time">
          <p>2021</p>
          <div class="short-line"></div>
          <p>now</p>
        </div>
        <p>Working at Fundación ONCE</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "TimeStamp",
  props: {
    isOne: {
      type: Boolean,
      required: true,
    },
    isTwo: {
      type: Boolean,
      required: true,
    },
    isThree: {
      type: Boolean,
      required: true,
    },
    isFour: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    select(value) {
      this.$emit("selected", value);
    },
  },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.2em;

  section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.2em;

    .timestamp {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5em;
      cursor: pointer;
      position: relative;
      padding-right: 1em;
      border-top-right-radius: 0.5em;
      // background: linear-gradient(to left, transparent 50%, #1fba73 50%) right;
      // background-size: 200%;
      // transition: 0.5s ease-out;

      .circle {
        width: 1.5em;
        height: 1.5em;
        border-radius: 50%;
        background: #27293d;
        // border: 2px solid #1fba73;
        box-shadow: 0px 0px 0px 7px #27293d, 0px 0px 0px 9px #1fba73;
      }

      p {
        font-size: 1.1em;
        color: white;
        font-weight: 300;
      }

      .time {
        position: absolute;
        top: -2.3em;
        left: 3em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.3em;

        .short-line {
          width: 1.5em;
          height: 1px;
          background: #1fba73;
        }

        p {
          font-weight: 300;
          border: 1px solid #1fba73;
          border-radius: 3px;
          padding: 0.2em 0.3em;
        }
      }
    }

    .line {
      height: 6em;
      width: 2px;
      background: #1fba73;
      margin-left: calc(0.75em - 1px);
    }
  }
}

.selected {
  // background: #1fba73 !important;
  animation: grow 0.5s ease-out forwards;
}

.selected-circle {
  background: #1fba73 !important;
}

.group-time {
  margin-top: -5em;
}

@keyframes grow {
  0% {
    background: linear-gradient(to left, transparent 50%, #1fba73 50%) right;
    background-size: 200%;
  }
  100% {
    background: linear-gradient(to left, transparent 50%, #1fba73 50%) left;
    background-size: 200%;
  }
}
</style>
