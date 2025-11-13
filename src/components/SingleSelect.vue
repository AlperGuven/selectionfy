<template>
  <div class="single-select">
    <select v-model="selected" @change="emitSelection">
      <option disabled value="">Select...</option>
      <option
        v-for="option in options"
        :key="getOptionValue(option)"
        :value="getOptionValue(option)"
      >
        {{ getLabel(option) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  options: { type: Array, default: () => [] },
  modelValue: { type: [String, Number, Object], default: "" },
  labelKey: { type: String, default: "label" },
  valueKey: { type: String, default: "value" }
});

const emit = defineEmits(["update:modelValue"]);

function getOptionValue(option) {
  return typeof option === "object" ? option[props.valueKey] : option;
}

function getLabel(option) {
  return typeof option === "object" ? option[props.labelKey] : option;
}

function getSelectedValue(val) {
  if (val && typeof val === "object") {
    return val[props.valueKey];
  }
  return val ?? "";
}

const selected = ref(getSelectedValue(props.modelValue));

watch(
  () => props.modelValue,
  value => {
    selected.value = getSelectedValue(value);
  }
);

function emitSelection() {
  const found = props.options.find(
    option => String(getOptionValue(option)) === String(selected.value)
  );
  const toEmit = found
    ? typeof found === "object"
      ? found
      : selected.value
    : selected.value;
  emit("update:modelValue", toEmit);
}
</script>

<style scoped>
.single-select select {
  padding: 0.5rem;
}
</style>
