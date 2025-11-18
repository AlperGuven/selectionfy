<script setup>
import { ref, computed, watch } from "vue";
import { useDropdown } from "../composables/useDropdown.js";

const props = defineProps({
  options: { type: Array, default: () => [] },
  modelValue: { type: [String, Number, Object, Array, Boolean, null], default: null },
  placeholder: { type: String, default: "Select..." }
});

const emit = defineEmits(["update:modelValue", "search"]);

const { isOpen, toggleDropdown, closeDropdown } = useDropdown();

const searchTerm = ref("");

const filteredOptions = computed(() => {
  const term = String(searchTerm.value).toLowerCase();
  return props.options.filter(option => {
    const text = typeof option === "object"
      ? Object.values(option).join(" ").toLowerCase()
      : String(option).toLowerCase();
    return text.includes(term);
  });
});

watch(() => props.modelValue, () => { closeDropdown(); });
</script>

<template>
  <div class="base-multiselect-container" v-click-outside="closeDropdown">
    <div class="selected-display" @click="toggleDropdown">
      <slot name="selected-items" :modelValue="modelValue">
        <span v-if="!modelValue || (Array.isArray(modelValue) && modelValue.length === 0)" class="placeholder">{{ placeholder }}</span>
      </slot>
      <input
        type="text"
        v-model="searchTerm"
        @input="emit('search', searchTerm)"
        :placeholder="placeholder"
        class="search-input"
      />
    </div>

    <div v-if="isOpen" class="options-dropdown">
      <slot name="options" :filteredOptions="filteredOptions" :modelValue="modelValue"></slot>
    </div>
  </div>
  
</template>

<style scoped>
.base-multiselect-container {
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.selected-display {
  padding: 8px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.selected-display .placeholder {
  color: #888;
}

.search-input {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 0;
  margin-left: 8px;
}

.options-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
}
</style>
