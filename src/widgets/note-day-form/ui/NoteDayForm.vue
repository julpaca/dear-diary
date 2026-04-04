<script setup lang="ts">
  import { ref } from 'vue';
  import { MoodRange } from '..';
</script>

<template>
  <div class="container">
    <form class="form">
      <label for="day-rate">
        <h3 class="heading">Rate this day from 1 to 10
          <div class="heading_bottom-decoration"></div>
          <div class="heading_side-decoration"></div>
        </h3>
        <MoodRange />
      </label>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../shared/styles/variables' as v;

.form {
  width: 80%;
}

.heading {
  position: relative;
  font-size: 3.2rem;
  font-weight: 400;
  width: fit-content;
}

.heading_bottom-decoration {
  position: absolute;
  bottom: 0px;
  right: -80px;
  width: 96px;
  height: 1px;
  background-color: v.$color-text;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 24px;
    height: 1px;
    background-color: v.$color-text;
  }
}

.heading_side-decoration {
  position: absolute;
  width: 2px;
  background-color: v.$color-text;
  height: 100%;
  left: -6px;
  top: 0;
}
</style>