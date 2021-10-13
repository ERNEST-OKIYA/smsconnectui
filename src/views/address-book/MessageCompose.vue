<template>
  <b-modal
    id="compose-mail"
    :visible="shallShowEmailComposeModal"
    title="Compose Message"
    modal-class="modal-sticky"
    footer-class="d-flex justify-content-between"
    body-class="p-2"
    size="lg"
    no-fade
    hide-backdrop
    static
    @change="(val) => $emit('update:shall-show-email-compose-modal', val)"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
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
          @click="discardEmail"
        />
      </div>
    </template>

    <!-- Modal Footer -->
    <template #modal-footer>
      <!-- Footer: Left Content -->
      <div>
        <b-dropdown
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          split
          text="Send"
          variant="primary"
          right
          @click="sendEmail"
        >
          <b-dropdown-item>
            Schedule Send
          </b-dropdown-item>
        </b-dropdown>
        <feather-icon
          icon="PaperclipIcon"
          size="17"
          class="ml-2 cursor-pointer"
        />
      </div>

      <!-- Footer: Right Content -->
      <div>

        <!-- Dropdown: More Actions -->
        <b-dropdown
          variant="link"
          no-caret
          toggle-class="p-0"
          right
        >
          <template #button-content>
            <feather-icon
              icon="MoreVerticalIcon"
              size="17"
              class="text-body"
            />
          </template>

          <b-dropdown-item>
            Add Label
          </b-dropdown-item>

          <b-dropdown-item>
            Plain Text Mode
          </b-dropdown-item>

          <b-dropdown-divider />

          <b-dropdown-item>
            Print
          </b-dropdown-item>
          <b-dropdown-item>
            Check Spelling
          </b-dropdown-item>
        </b-dropdown>

        <!-- Discard Compose -->
        <feather-icon
          icon="TrashIcon"
          size="17"
          class="ml-75 cursor-pointer"
          @click="discardEmail"
        />
      </div>
    </template>

    <!-- Modal: Body -->
    <b-form>
      <!-- Field: To -->
      <div class="compose-mail-form-field">
        <label
          for="message-to"
          class="form-label"
        >Address Book: </label>
        <b-badge
          variant="dark"
          class="badge-glow ml-1 mb-1"
          style="text-transform: capitalize;"
          >
          {{messageToGroup.name}}
        </b-badge>
      </div>
      <!-- Field: From -->
      <div class="compose-mail-form-field">
        <label
          for="message-from"
          class="form-label"
        >From: </label>
        <v-select
          v-model="composeData.from"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="name"
          placeholder="Select Sender ID"
          class="flex-grow-1 email-to-selector"
          :options="messageFromOptions"
          input-id="message-from"
        />
      </div>
      <div class="message-editor">
        <b-form-textarea
          v-model="composeData.message"
           id="compose-textarea"
          class="mt-2"
          placeholder="Message Opt Out option '*456*95#' Included."
          rows="10"
          no-resize
        />
      </div>
      <div>
      <b-form-checkbox
        checked="false"
        class="custom-control-success mt-2"
        name="check-button"
        switch
      >
      <span class="switch-icon-left">
          <feather-icon icon="WatchIcon" />
      </span>
      <span>Schedule Message</span>
      </b-form-checkbox>

    </div>
    </b-form>

  </b-modal>
</template>

<script>
import {
  BDropdown,
  BDropdownItem,
  BForm,
  // BFormInput,
  BDropdownDivider,
  BFormTextarea,
  BBadge,
  BFormCheckbox,
  // BInputGroupPrepend,
  // BInputGroup,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'

export default {
  directives: {
    Ripple,
  },
  components: {

    // BSV
    BDropdown,
    BDropdownItem,
    BForm,
    // BFormInput,
    BDropdownDivider,
    BFormTextarea,
    BBadge,
    BFormCheckbox,
    // BInputGroupPrepend,
    // BInputGroup,

    // 3rd Party
    vSelect,
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
    messageToGroup: {
      type: Object,
      required: true,
    },
  },
  setup(_, { emit }) {
    const composeData = ref({})
    const showCcField = ref(false)
    const showBccField = ref(false)
    const sendEmail = () => {
      composeData.value = {}
      emit('update:shall-show-email-compose-modal', false)

      // ? Send your Email
    }

    const discardEmail = () => {
      composeData.value = {}
      emit('update:shall-show-email-compose-modal', false)
    }

    const messageFromOptions = [
      { name: 'Wevas', id: 1 },
      { name: 'SDPTest', id: 2 },
    ]

    return {
      composeData,
      showCcField,
      showBccField,

      // Email actions
      sendEmail,
      discardEmail,
      messageFromOptions,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<style lang="scss" scoped>
// form ::v-deep {

//   // Mail To vue-select style
//   .v-select {
//     .vs__dropdown-toggle {
//       border: 0;
//     }
//     .vs__open-indicator {
//       display: none;
//     }
//   }
// }
</style>
