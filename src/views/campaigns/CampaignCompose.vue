<template>
  <b-modal
    id="compose-mail"
    :visible="shallShowEmailComposeModal"
    title="Compose Email"
    modal-class="modal-sticky"
     ok-disabled
    body-class="p-0"
    size="lg"
    no-fade
    ok-only
    ok-variant="default"
    ok-title=""
    hide-backdrop
    header-bg-variant="warning"
    header-border-variant="warning"
    header-text-variant="secondary"
    @change="(val) => $emit('update:shall-show-email-compose-modal', val)"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title text-white">
        Compose Message
      </h5>
      <div class="modal-actions">
        <feather-icon
          icon="MinusIcon"
          class="cursor-pointer"
          @click="$emit('update:shall-show-email-compose-modal', false)"
        />
        <feather-icon
          icon="Maximize2Icon"
          class="ml-1 cursor-pointer"
        />
        <feather-icon
          icon="XIcon"
          class="ml-1 cursor-pointer"
          @click="discardMessage"
        />
      </div>
    </template>
    <!-- Modal: Body -->
    <commpose-wizard  :to="composeTo" @close-compose-modal="closeModal"/>
  </b-modal>
</template>

<script>
import Ripple from 'vue-ripple-directive'
import { ref, watch } from '@vue/composition-api'
import axios from '@axios'
import router from '@/router'
import CommposeWizard from './compose-wizard/ComposeWizard.vue'

export default {
  directives: {
    Ripple,
  },
  components: {

    CommposeWizard,
  },
  model: {
    prop: 'shallShowEmailComposeModal',
    event: 'update:shall-show-email-compose-modal',
  },
  props: {
    shallShowEmailComposeModal: {
      type: Boolean,
      required: true,
    },
    to: {
      type: Number,
      required: false,
      default: null,
    },
  },
  setup(props, { emit }) {
    const composeData = ref({})
    const composeTo = ref({})
    const showFooter = ref(false)
    /* eslint-enable global-require */
    const sendMessage = () => {
      // composeData.value = {}
      emit('update:shall-show-email-compose-modal', false)
      const groups = JSON.parse(JSON.stringify(composeData.value.to))
      const groupIds = []
      groups.forEach(group => {
        groupIds.push(group.id)
      })
      const postData = {
        message: composeData.value.message,
        subject: composeData.value.subject,
        groups: groupIds,
      }
      axios.post('/campaigns/create', postData).then(res => {
        console.log('SENT', res.data)
        composeData.value = {}
      })
        .catch(res => {
          console.log('ERROR OCCURED', res.data)
        })
    }

    const discardMessage = () => {
      composeData.value = {}
      emit('update:shall-show-email-compose-modal', false)
    }
    const closeModal = () => {
      emit('update:shall-show-email-compose-modal', false)
      router.push({ name: 'bulk-campaigns-state', params: { state: 0 } })
    }
    const pushToGroups = () => {
      axios.get(`address-books/group/${props.to}`).then(res => {
        composeTo.value = res.data
        emit('update:shall-show-email-compose-modal', true)
      })
        .catch(res => {
          console.log('ERROR OCCURED', res.data)
        })
    }
    watch(() => props.to, () => {
      if (props.to !== null) {
        pushToGroups()
      }
    })
    return {
      composeData,
      // Campaign actions
      sendMessage,
      discardMessage,
      showFooter,
      closeModal,
      composeTo,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/quill.scss';
</style>

<style lang="scss" scoped>
form ::v-deep {

  // Mail To vue-select style
  .v-select {
    .vs__dropdown-toggle {
      border: 0;
      box-shadow: none;
    }
    .vs__open-indicator {
      display: none;
    }
  }
}
</style>
