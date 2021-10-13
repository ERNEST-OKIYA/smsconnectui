<template>
  <b-card
    no-body
    class="card-statistics"
  >
    <b-card-header>
      <b-card-sub-title>Delivery and Usage Count</b-card-sub-title>
      <b-card-text class="font-small-2 mr-25 mb-0">
        <feather-icon
        size="24"
        icon="circleIcon"
        />
      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col
          xl="3"
          sm="6"
          class="mb-2 mb-xl-0"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                variant="primary"
              >
                <feather-icon
                  size="24"
                  icon="TrendingUpIcon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ deliveryReport.total.toLocaleString() }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
               Sent
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col
          xl="3"
          sm="6"
          class="mb-2 mb-xl-0"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                variant="primary"
              >
                <feather-icon
                  size="24"
                  icon="TrendingUpIcon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ deliveryReport.delivered.toLocaleString() }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
               Delivered
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col
          xl="3"
          sm="6"
          class="mb-2 mb-xl-0"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                variant="primary"
              >
                <feather-icon
                  size="24"
                  icon="TrendingUpIcon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ deliveryReport.failed.toLocaleString() }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
               Failed
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col
          xl="3"
          sm="6"
          class="mb-2 mb-xl-0"
        >
          <b-media no-body>
            <b-media-aside

              class="mr-2"
            >
              <b-avatar
                size="48"
                variant="primary"
              >
                <feather-icon
                  size="24"
                  icon="TrendingUpIcon"
                />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">
                {{ deliveryReport.units_used.toLocaleString() }}
              </h4>
              <b-card-text class="font-small-3 mb-0">
               SMS Units Used
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardText, BCardBody, BRow, BCol, BMedia, BMediaAside, BAvatar, BMediaBody, BCardSubTitle,
} from 'bootstrap-vue'
import {
  ref, onUnmounted,
} from '@vue/composition-api'
import store from '@/store'
import statsStoreModule from './statsStoreModule'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardText,
    BCardBody,
    BMedia,
    BAvatar,
    BMediaAside,
    BMediaBody,
    BCardSubTitle,
  },
  setup() {
    const STATS_STORE_MODULE_NAME = 'stats'
    // Register module
    if (!store.hasModule(STATS_STORE_MODULE_NAME)) store.registerModule(STATS_STORE_MODULE_NAME, statsStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(STATS_STORE_MODULE_NAME)) store.unregisterModule(STATS_STORE_MODULE_NAME)
    })
    const blankDeliveryReport = {
      sent: 0,
      waiting: 0,
      queued: 0,
      delivered: 0,
      undelivered: 0,
      failed: 0,
      cancelled: 0,
      total: 0,
      units_used: 0,
    }
    const deliveryReport = ref(JSON.parse(JSON.stringify(blankDeliveryReport)))
    const fetchDeliveryReport = () => {
      store.dispatch('stats/fetchDeliveryReport', {
        start: '2021-07-01',
        end: '2021-10-06',
        // org_id: JSON.parse(localStorage.getItem('userData')).membership.organisation_id,
      })
        .then(response => {
          console.log('data', response)
          deliveryReport.value = response.data
        })
    }
    const refreshDeliveryReport = () => {
      fetchDeliveryReport()
    }
    fetchDeliveryReport()
    return {
      fetchDeliveryReport,
      deliveryReport,
      refreshDeliveryReport,
    }
  },
}
</script>
