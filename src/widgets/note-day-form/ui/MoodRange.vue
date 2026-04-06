<script setup lang="ts">
import { ref } from 'vue';
import CrimsomRose from '../../../shared/assets/crimson-rose.svg'

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const selectedValue = ref(5);    // значение по умолчанию
const hoverValue = ref<number | null>(null);     // значение под курсором (или null)

// Активна ли иконка (должна быть залита цветом)?
function isActive(step: number) {
  // Если есть наведение – подсвечиваем все шаги <= hoverValue
  if (hoverValue.value !== null) {
    return step <= hoverValue.value;
  }
  // Иначе – подсвечиваем только выбранное значение (опционально)
  // По вашему описанию подсветка только при наведении, но можно и выбранное подсветить всегда.
  // Я сделаю так: выбранное значение тоже имеет особый цвет (например, другой оттенок)
  return step <= selectedValue.value;
}

// Цвет заливки в зависимости от состояния
function getIconColor(step: number) {
  if (hoverValue.value !== null) {
    return step <= hoverValue.value ? '#FF6B6B' : '#CCCCCC';
  }
  return step <= selectedValue.value ? '#4CAF50' : '#CCCCCC';
}

function selectValue(step: number) {
  selectedValue.value = step;
}
</script>


<template>
  <div class="custom-range">
    <div class="steps">
      <div
        v-for="step in steps"
        :key="step"
        class="step"
        :class="{ 'is-active': isActive(step) }"
        @click="selectValue(step)" @mouseenter="hoverValue = step" @mouseleave="hoverValue = null"
      >
      <CrimsomRose fill="getIconColor(step)" />
      </div>
    </div>
    <p>Выбрано: {{ selectedValue }}</p>
  </div>
</template>

<style scoped>
.custom-range {
  font-family: sans-serif;
}

.steps {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.step {
  cursor: pointer;
  transition: transform 0.1s ease;
}

.step:hover {
  transform: scale(1.1);
}

/* Можно добавить любые дополнительные стили */
</style>