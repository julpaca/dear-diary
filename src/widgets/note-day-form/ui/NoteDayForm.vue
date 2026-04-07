<script setup lang="ts">
  import { MoodRange } from '..';
  import MoodPopup from '../../../shared/ui/MoodPopup.vue'
  import Input from '../../../shared/ui/Input.vue';
</script>

<template>
  <div class="container">
    <form class="form">
      
      <label class="label" for="day-rate">
        <h2 class="heading">Rate this day from 1 to 10
          <div class="heading_bottom-decoration"></div>
          <div class="heading_side-decoration"></div>
        </h2>
        <MoodRange />
      </label>
      
      <label class="label" for="day-rate">
        <h2 class="heading">How would you describe this day?
          <div class="heading_bottom-decoration"></div>
          <div class="heading_side-decoration"></div>
        </h2>
        <p>Choose the appropriate words from the list below or write your own</p>

        <div class="mood-container">
          <MoodPopup mood="very Gud :))" />
          <MoodPopup mood="Gud :)" />
          <MoodPopup mood=" kinda Gud :)" />
          <MoodPopup mood="kinda Bed :(" />
          <MoodPopup mood="Bed :(" />
          <MoodPopup mood="very Bed :(" />
        </div>

        <h3>Write down your own mood</h3>
        <Input @get-input-value="" />
      </label>

    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '../../../shared/styles/variables' as v;

.form {
  width: 80%;
}

.mood-container {
  display: flex;
  flex-direction: column;
  max-height: 150px;
  flex-wrap: wrap;
  align-items: start;
  align-content: start;
  // display: grid;
  // grid-template-columns: repeat(auto-fill, 100px);
  // grid-template-rows: repeat(3, 1fr);
  // grid-auto-flow: column;
  column-gap: 3rem;
  row-gap: 1rem;
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