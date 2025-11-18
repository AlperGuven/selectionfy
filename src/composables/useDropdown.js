import { ref } from 'vue'

export function useDropdown() {
  const isOpen = ref(false)

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  const closeDropdown = () => {
    isOpen.value = false
  }
  return { isOpen, toggleDropdown, closeDropdown }
}
