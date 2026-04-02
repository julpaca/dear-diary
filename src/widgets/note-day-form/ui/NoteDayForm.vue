<script setup lang="ts">
import Input from '../../../shared/ui/Input.vue'
</script>

<template>
  <div class="container form">
    <form>
      <label for="day-rate">
        <h3 class="heading">Rate this day from 1 to 10
          <div class="heading_bottom-decoration"></div>
          <div class="heading_side-decoration"></div>
          
        </h3>
        <Input
          
        />
      </label>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../../shared/styles/variables' as v;

  .form {
    max-width: 80%;
  }

  .heading {
    position: relative;
  }

  .heading_bottom-decoration {
    position: absolute;
    width: 50px;
    background-color: v.$color-text;
    height: 1px;
    right: -10px;
    bottom: -2px;

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