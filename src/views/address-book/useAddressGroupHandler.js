import { ref, watch } from '@vue/composition-api'
// import store from '@/store'

export default function useGroupHandler(props, emit) {
  // ------------------------------------------------
  // taskLocal
  // ------------------------------------------------
  const groupLocal = ref(JSON.parse(JSON.stringify(props.group.value)))
  const resetGroupLocal = () => {
    taskLocal.value = JSON.parse(JSON.stringify(props.group.value))
  }
  watch(props.group, () => {
    resetGroupkLocal()
  })

  const onGroupChange = () => {
    const groupData = JSON.parse(JSON.stringify(groupLocal))

    // * If event has id => Edit Event
    // Emit event for add/update event
    if (props.group.value.id) emit('update-group', groupData.value)
    
  }
    return {
    groupLocal,
    resetGroupLocal,

    // UI
    onGroupChange,
  }
}
