<script setup lang="ts">
import { ref } from 'vue';
import { MoodRange } from '..';
import { DAY_DESCRIPTORS, type dayDescriptor } from '../mocks/day-descriptors';
import { AddNewActivity, MoodPopup, Input } from '@/shared/ui';
import { switchItemInList, checkIfEmpty } from '@/shared/utils';

const moodlets = ref<string[]>([])
const dayDescriptors = ref<dayDescriptor[]>([])
const dayDescriptorInput = ref<dayDescriptor>("")

const changeDayDescriptorsList = (descriptor?: string) => {
  if (!checkIfEmpty(descriptor)) {
    dayDescriptors.value = switchItemInList<dayDescriptor>(dayDescriptors.value, descriptor!)
  } else if (!checkIfEmpty(dayDescriptorInput.value)) {
    dayDescriptors.value = switchItemInList<dayDescriptor>(dayDescriptors.value, dayDescriptorInput.value)
  }
  console.log('dayDescriptors.value: ', dayDescriptors.value)
}
</script>

<template>
  <div class="container">
    <form class="form" v-on:submit="e => e.preventDefault()">

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

        <ul class="mood-container">
          <li v-for="descriptor in DAY_DESCRIPTORS" :key="descriptor" @click="changeDayDescriptorsList(descriptor)">
            <MoodPopup :mood="descriptor" :isChosen="moodlets.includes(descriptor)" />
          </li>
        </ul>

        <p>Write down your own mood</p>
        <Input v-model="dayDescriptorInput" @enter="changeDayDescriptorsList"/>

        <label for="" class="label">
          <h2 class="heading">What did you do for this day?</h2>
          <!-- list of the дел (?) user wrote -->
          <p>Did something new? Write it down!</p>
          <AddNewActivity />
        </label>
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