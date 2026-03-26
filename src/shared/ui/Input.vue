<script setup>
  import { ref } from 'vue'

  const input = ref()
  const emit = defineEmits(["emit-value"])

  const emitValue = () => {
    emit("get-input-value", input.value)
  }

</script>

<template>
  <input
    v-model="input"
    @keyup.enter="emitValue"
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