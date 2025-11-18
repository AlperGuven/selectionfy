<template>
  <base-multiselect
    :options="options"
    :modelValue="modelValue"
    :placeholder="placeholder"
    @update:modelValue="emit('update:modelValue', $event)"
  >
    <template #selected-items="{ modelValue: currentModelValue }">
      <span v-if="selectedLabel">{{ selectedLabel }}</span>
      <span v-else class="placeholder">{{ placeholder }}</span>
    </template>

    <template #options="{ filteredOptions, modelValue: currentModelValue }">
      <ul class="single-select-options">
        <li
          v-for="option in filteredOptions"
          :key="getOptionValue(option)"
          @click="selectOption(getOptionValue(option))"
          :class="{ 'is-selected': getOptionValue(option) === getSelectedValue(currentModelValue) }"
        >
          {{ getLabel(option) }}
        </li>
      </ul>
    </template>
  </base-multiselect>
</template>

<script setup>
import { computed } from 'vue'
import BaseMultiselect from './BaseMultiselect.vue'

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: [String, Number, Object],
    default: ''
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  placeholder: {
    type: String,
    default: 'Select...'
  }
})

const emit = defineEmits(['update:modelValue'])

function getOptionValue(option) {
  return typeof option === 'object' ? option[props.valueKey] : option
}

function getLabel(option) {
  return typeof option === 'object' ? option[props.labelKey] : option
}

function getSelectedValue(val) {
  if (val && typeof val === 'object') {
    return val[props.valueKey]
  }
  return val ?? ''
}

const selectedLabel = computed(() => {
  const selectedValue = getSelectedValue(props.modelValue)
  const found = props.options.find(option => String(getOptionValue(option)) === String(selectedValue))
  return found ? getLabel(found) : ''
})

function selectOption(optionValue) {
  const found = props.options.find(option => String(getOptionValue(option)) === String(optionValue))
  const toEmit = found ? (typeof found === 'object' ? found : optionValue) : optionValue
  emit('update:modelValue', toEmit)
}
</script>

<style scoped>
.single-select-options {
  list-style: none;
  margin: 0;
  padding: 0;
}
.single-select-options li {
  padding: 8px 12px;
  cursor: pointer;
}
.single-select-options li.is-selected {
  background-color: #f0f0f0;
}
</style>
