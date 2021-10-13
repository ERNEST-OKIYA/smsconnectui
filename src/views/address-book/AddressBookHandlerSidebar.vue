<template>
  <div>
    <b-sidebar
      id="sidebar-task-handler"
      sidebar-class="sidebar-lg"
      :visible="isTaskHandlerSidebarActive"
      bg-variant="white"
      shadow
      backdrop
      no-header
      right
      @change="(val) => $emit('update:is-task-handler-sidebar-active', val)"
    >
      <template #default="{ hide }">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
          <h5
            class="mb-0"
          >
            Add Address Book
          </h5>
          <div>
            <feather-icon
              class="ml-1 cursor-pointer"
              icon="XIcon"
              size="16"
              @click="hide"
            />
          </div>
        </div>

        <!-- Body -->
        <!-- Form -->
        <b-form
          class="p-2"
        >
          <!-- Title -->
          <b-form-group
            label="Name"
            label-for="group-name"
          >
            <b-form-input
              id="group-name"
              v-model="GroupName"
              class="border border-primary"
              autofocus
              trim
              placeholder="Group Name"
              required
            />
          </b-form-group>
          <!-- Contact File -->
          <b-form-group
            label="Select File"
            label-for="select-file"
          >
          <b-form-file>
            <template
              slot="file-name"
              slot-scope="{ names }"
            >
              <b-badge variant="primary">
                {{ names[0] }}
              </b-badge>
              <b-badge
                v-if="names.length > 1"
                variant="dark"
                class="ml-1"
              >
                + {{ names.length - 1 }} More files
              </b-badge>
            </template>
          </b-form-file>
        </b-form-group>
          <!-- Description -->
          <b-form-group
            label="Description"
            label-for="task-description"
          >
            <div>
              <b-form-textarea
                id="textarea-default"
                placeholder="Description"
                rows="2"
                no-resize
              />
            </div>
          </b-form-group>

          <!-- Form Actions -->
          <div
          class="d-flex mt-2"
          >
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="reset"
              variant="outline-secondary"
            >
              Reset
            </b-button>
          </div>
        </b-form>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import {
  BSidebar,
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BFormFile,
  BBadge,
  BFormTextarea,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { required, email, url } from '@validations'
// import { toRefs } from '@vue/composition-api'
// import useAddressGroupHandler from './useAddressGroupHandler'

export default {
  components: {
    // BSV
    BButton,
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormFile,
    BBadge,
    BFormTextarea,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isTaskHandlerSidebarActive',
    event: 'update:is-task-handler-sidebar-active',
  },
  props: {
    isTaskHandlerSidebarActive: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      GroupName: '',
      nameState: true,
      required,
      email,
      url,
    }
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';

.assignee-selector {
  ::v-deep .vs__dropdown-toggle {
  padding-left: 0;
  }
}
</style>
