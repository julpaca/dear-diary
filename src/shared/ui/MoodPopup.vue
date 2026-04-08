<script setup lang="ts">
  const props = defineProps<{ mood: string, isChosen: boolean }>()  
</script>

<template>
  <div class="popup" :class="{'chosen': isChosen}">
    <span>{{ mood }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .popup {
    width: fit-content;
    height: fit-content;
    padding: 1.2rem 1.7rem 0.7rem 1.2rem;
    font-size: 1.5rem;

    border-radius: 21px 37px 14px 0px;
    color: #A43636;
    background-color: #C5E1E2;

    &:hover {
      filter: brightness(0.95);
      transition: filter 0.2s ease-in-out;
    }

  }

  .chosen {
    filter: brightness(1.1);
    transform: translate(2px, 2px);
    box-shadow: 4px 4px 0px rgba(109, 18, 18, 0.5);
  }
</style>