<template>
  <!-- Need to add height inherit because Vue 2 don't support multiple root ele -->
  <div style="height: inherit">
    <div
      class="body-content-overlay"
      :class="{'show': mqShallShowLeftSidebar}"
      @click="mqShallShowLeftSidebar = false"
    />
    <div class="todo-app-list">

      <!-- App Searchbar Header -->
      <div class="app-fixed-search d-flex align-items-center">

        <!-- Toggler -->
        <div class="sidebar-toggle d-block d-lg-none ml-1">
          <feather-icon
            icon="MenuIcon"
            size="21"
            class="cursor-pointer"
            @click="mqShallShowLeftSidebar = true"
          />
        </div>

        <!-- Searchbar -->
        <div class="d-flex align-content-center justify-content-between w-100">
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon
                icon="SearchIcon"
                class="text-muted"
              />
            </b-input-group-prepend>
            <b-form-input
              value=""
              placeholder="Search contacts"
            />
          </b-input-group>
        </div>
        <!-- Dropdown -->
        <div class="dropdown">
          <b-dropdown
            variant="link"
            no-caret
            toggle-class="p-0 mr-1"
            right
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item>
              Reset Sort
            </b-dropdown-item>
            <b-dropdown-item>
              Sort A-Z
            </b-dropdown-item>
            <b-dropdown-item>
              Sort Z-A
            </b-dropdown-item>
            <b-dropdown-item>
              Sort Assignee
            </b-dropdown-item>
            <b-dropdown-item>
              Sort Due Date
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

      <!-- Todo List -->
      <vue-perfect-scrollbar
        :settings="perfectScrollbarSettings"
        class="todo-task-list-wrapper list-group scroll-area"
      >
        <address-book-group-contacts
        v-show="group"
        :group="group"
        :key="group.id"
         :shall-show-email-compose-modal.sync="shallShowEmailComposeModal"
        />
      </vue-perfect-scrollbar>
    </div>
    <!-- Task Handler -->
    <address-book-handler-sidebar
      v-model="isTaskHandlerSidebarActive"
    />
    <!-- Sidebar -->
    <portal to="content-renderer-sidebar-left">
      <address-book-left-sidebar
        :groups="groups"
        :class="{'show': mqShallShowLeftSidebar}"
        :is-task-handler-sidebar-active.sync="isTaskHandlerSidebarActive"
        @close-left-sidebar="mqShallShowLeftSidebar = false"
        @update-group="ChangeGroup"
      />
    </portal>
    <!-- <message-compose  v-model="shallShowEmailComposeModal" /> -->
  </div>
</template>

<script>
import {
  BFormInput, BInputGroup, BInputGroupPrepend, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import { ref, watch } from '@vue/composition-api'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { useResponsiveAppLeftSidebarVisibility } from '@core/comp-functions/ui/app'
// import MessageCompose from '@/views/campaigns/MessageCompose.vue'
import AddressBookHandlerSidebar from './AddressBookHandlerSidebar.vue'
import AddressBookLeftSidebar from './AddressBookLeftSidebar.vue'
import AddressBookGroupContacts from './AddressBookGroupContacts.vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BDropdown,
    BDropdownItem,
    VuePerfectScrollbar,

    // App SFC
    AddressBookLeftSidebar,
    AddressBookHandlerSidebar,
    AddressBookGroupContacts,
    // MessageCompose,
  },
  setup() {
    const perfectScrollbarSettings = {
      maxScrollbarLength: 150,
    }
    const blankGroup = {
      name: '',
      description: '',
      is_temp: null,
      custom_fields: [
        '',
        '',
      ],
      type: null,
      level: null,
      lft: null,
      rght: null,
      tree_id: null,
      parent_id: null,
      id: null,
    }
    const { mqShallShowLeftSidebar } = useResponsiveAppLeftSidebarVisibility()
    const isTaskHandlerSidebarActive = ref(false)
    const group = ref(JSON.parse(JSON.stringify(blankGroup)))
    const shallShowEmailComposeModal = ref(true)
    const ChangeGroup = groupObj => {
      group.value = groupObj
    }
    watch(group, val => {
      group.value = val
    })
    return {
      perfectScrollbarSettings,
      // Left Sidebar Responsive
      mqShallShowLeftSidebar,
      isTaskHandlerSidebarActive,
      blankGroup,
      ChangeGroup,
      group,
      shallShowEmailComposeModal,
    }
  },
  data() {
    return {
      groups: {},
      // group: {},
    }
  },
  methods: {
    changeGroup(groupObj) {
      this.$nextTick()
      this.group = groupObj
    },
  },
  created() {
    this.$http.get('/address-books/groups').then(res => { this.groups = res.data })
  },
}
</script>
<style lang="scss">
@import "~@core/scss/base/pages/app-email.scss";
@import "~@core/scss/base/pages/app-todo.scss";
</style>
