<template>
  <div class="sidebar-left">
    <div class="sidebar">
      <div class="sidebar-content todo-sidebar">
        <div class="todo-app-menu">
          <div class="add-task"
          >
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              block
              @click="$emit('update:is-task-handler-sidebar-active', true); $emit('close-left-sidebar')"
            >
              New Address Book
            </b-button>
          </div>
          <!-- Search -->
            <b-input-group class="input-group-merge w-100 pl-2 pr-2 round">
              <b-input-group-prepend is-text>
                <feather-icon
                  icon="SearchIcon"
                  class="text-muted"
                />
              </b-input-group-prepend>
              <b-form-input
                placeholder="Search groups..."
              />
            </b-input-group>
          <vue-perfect-scrollbar
            :settings="perfectScrollbarSettings"
            class="sidebar-menu-list scroll-area"
          >
            <!-- Groups -->
            <div class="mt-3 px-2 d-flex justify-content-between">
              <h6 class="section-label mb-1">
                <feather-icon
                  icon="BookIcon"
                  size="18"
                  class="mr-75 ml-0"
                />
                All Available
                <span
                class="ml-2"
                >
                  <b-badge
                  variant="secondary"
                  class="badge-glow"
                >
                  {{groups.count}}
                </b-badge>
                </span>
              </h6>
            </div>
            <b-list-group class="list-group-labels"
            >
              <b-list-group-item
                v-for="group in groups.results"
                :key="group.id"
                @click="$emit('update-group', group)"
                style="text-transform: capitalize;"
                 >
              <statistic-card-horizontal
                icon="FolderIcon"
                color="text-body"
                statistic="10"
                :statistic-title="group.name"
                class="mb-auto"
        />
              </b-list-group-item>
            </b-list-group>

          </vue-perfect-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {
  BButton,
  BListGroup,
  BListGroupItem,
  BInputGroupPrepend,
  BFormInput,
  BInputGroup,
  BBadge,
} from 'bootstrap-vue'
import { isDynamicRouteActive } from '@core/utils/utils'
import Ripple from 'vue-ripple-directive'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'

export default {
  directives: {
    Ripple,
  },
  components: {
    BButton,
    BListGroup,
    BListGroupItem,
    VuePerfectScrollbar,
    BInputGroupPrepend,
    BFormInput,
    BInputGroup,
    BBadge,
    StatisticCardHorizontal,
  },
  props: {
    groups: {
      type: Object,
      default: () => {},
    },
    group: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    const perfectScrollbarSettings = {
      maxScrollbarLength: 50,
    }
    return {
      perfectScrollbarSettings,
      isDynamicRouteActive,
    }
  },
}
</script>

<style>

</style>
