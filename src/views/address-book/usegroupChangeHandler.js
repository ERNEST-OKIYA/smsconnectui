import store from '@/store'
import { ref, watch, computed } from '@vue/composition-api'

export const useGroupChange = () => {
  const useGroupChange = ref(null)
  
  watch(currentBreakPoint, (val, oldVal) => {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false
  })

  return {
    mqShallShowLeftSidebar,
  }
}

export const _ = {}
