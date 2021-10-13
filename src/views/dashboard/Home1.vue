<template>
  <div>
    <!-- Stats Payments -->
    <b-row>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="BriefcaseIcon"
          :statistic="1000"
          statistic-title="SMS Sent"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="BriefcaseIcon"
          color="success"
          :statistic="30000"
          statistic-title="Delivered"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="ExternalLinkIcon"
          color="info"
          :statistic="500"
          statistic-title="Failed"
        />
      </b-col>
      <b-col
        lg="3"
        sm="6"
      >
        <statistic-card-horizontal
          icon="ExternalLinkIcon"
          color="warning"

          :statistic="56"
          statistic-title="Total Cost"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
} from 'bootstrap-vue'
// import flatPickr from 'vue-flatpickr-component'
// import moment from 'moment'
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'

export default {
  components: {
    BRow,
    BCol,
    // flatPickr,
    StatisticCardHorizontal,
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
