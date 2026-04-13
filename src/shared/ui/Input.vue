<script setup lang="ts">
  import { ref } from 'vue'
  import { checkIfEmpty } from '../utils';

  const model = defineModel<string>()
  const emit = defineEmits<{ (e: 'enter', value: string): void}>()
  const error = ref({ state: false, status: ''})

  const handleEmitValue = () => {
    const value = model.value

    if (checkIfEmpty(value)) {
      error.value = { state: true, status: 'The field is empty'}
    } else {
      error.value = { state: false, status: ''}      
      emit('enter', value!)
    }
  }
</script>

<template>
  <input
    v-model="model"
    @keyup.enter="handleEmitValue"
    placeholder=""
  />
</template>

<style lang="css" scoped>
  input {
    background-color: #F0E1E2;
    color: #0c0c0c;
    border: 1px solid rgba(148, 21, 23, 0.55);
    box-shadow: 10px 9px rgba(112, 112, 112, 0.25);
    border-radius: 27px;
  }
</style>