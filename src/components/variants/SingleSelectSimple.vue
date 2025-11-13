<template>
  <div class="single-select-variant">
    <SingleSelect v-model="primitive" :options="primitiveOptions" />
    <SingleSelect v-model="selectedObject" :options="objectOptions" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SingleSelect from "../SingleSelect.vue";

const primitiveOptions = ["Apple", "Banana", "Cherry"];
const objectOptions = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 }
];

const primitive = ref("Apple");
const selectedObject = ref(objectOptions[0]);
</script>

<style scoped>
.single-select-variant {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
