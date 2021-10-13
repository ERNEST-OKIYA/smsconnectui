<template>
  <div>
      <b-row>
        <b-col cols="12">
            <b-card-actions
              ref="refreshCard"
              title="Delivery Report"
              action-refresh
              @refresh="refetchData('refreshCard')"
            >
            <div class="d-flex justify-content-between">
              <h5 class="mb-0">
                Sent-: <b-badge class="ml-1" variant="dark">{{ progressReport.processed }}</b-badge>
                <span class="ml-2">
                Delivered-: <b-badge class="ml-1" variant="primary">{{ progressReport.delivered }}</b-badge>
                </span>
                <span class="ml-2">
                Undelivered-: <b-badge class="ml-1" variant="warning">{{ progressReport.undelivered }}</b-badge>
                </span>
                <span  class="ml-2">
                Failed-: <b-badge class="ml-1" variant="danger">{{ progressReport.failed }}</b-badge>
                </span>
              </h5>
            </div>
            </b-card-actions>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import {
  BRow, BCol, BBadge,
} from 'bootstrap-vue'
import { ref, watch, onUnmounted } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import campaignStoreModule from './campaignStoreModule'

export default {
  components: {

    // BSV
    BRow,
    BCol,
    BBadge,
    // BCard,
    BCardActions,
  },
  props: {
    campaignId: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const toast = useToast()
    const blankprogressReport = {
      total: 0,
      processed: 0,
      failed: 0,
      undelivered: 0,
      delivered: 0,
      queued: 0,
      cancelled: 0,
      waiting: 0,
    }
    const progressReport = ref(JSON.parse(JSON.stringify(blankprogressReport)))
    const CAMPAIGN_STORE_MODULE_NAME = 'campaigns'
    // Register module
    if (!store.hasModule(CAMPAIGN_STORE_MODULE_NAME)) store.registerModule(CAMPAIGN_STORE_MODULE_NAME, campaignStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CAMPAIGN_STORE_MODULE_NAME)) store.unregisterModule(CAMPAIGN_STORE_MODULE_NAME)
    })
    const refreshCard = ref(null)

    const getCampaignProgress = () => {
      store
        .dispatch('campaigns/getCampaignProgress', { id: props.campaignId })
        .then(response => {
          progressReport.value = response.data
          refreshCard.value.showLoading = false
        })
        .catch(() => {
          toast({
            component: ToastificationContent,
            props: {
              title: 'Error fetching campaing progress report',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
          })
        })
    }
    watch(() => props.campaignId, () => {
      getCampaignProgress()
    })
    const refetchData = () => {
      getCampaignProgress()
    }
    return {
      getCampaignProgress,
      progressReport,
      refetchData,
      refreshCard,
    }
  },
}
</script>

<style>

</style>
