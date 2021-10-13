<template>
<div>
  <b-card>
    <div>
      <address-book-group-header
      :group="group"
      @shall-show-email-compose-modal="ToggleShowCompose"

      />
    </div>
    <b-card-body>
      <b-table
        responsive="sm"
        striped
        :items="items"
      />
    </b-card-body>
  </b-card>
  <message-compose
    v-model="shallShowEmailComposeModal"
    :messageToGroup="group"
     />
  </div>
</template>

<script>
import {
  BCard,
  BCardBody,
  BTable,
} from 'bootstrap-vue'
import MessageCompose from './MessageCompose.vue'
import AddressBookGroupHeader from './AddressBookGroupHeader.vue'

export default {
  components: {
    BCard,
    BTable,
    BCardBody,
    AddressBookGroupHeader,
    MessageCompose,
  },
  props: {
    group: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      items: [],
      shallShowEmailComposeModal: false,
      messageToGroup: [],
    }
  },
  watch: {
    group() {
      this.$nextTick(() => {
        this.fetchContacts()
      })
    },
  },
  beforeMount() {
    if (this.group != null) {
      this.fetchContacts()
      this.groupToArray()
    }
  },
  methods: {
    async fetchContacts() {
      await this.$http.get(`/address-books/${this.group.id}/contacts`)
        .then(res => {
          this.items = JSON.parse(JSON.stringify(res.data.results))
        })
    },
    ToggleShowCompose() {
      this.shallShowEmailComposeModal = true
    },
    groupToArray() {
      this.messageToGroup.push(this.group)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@core/scss/base/pages/app-email.scss";
</style>
