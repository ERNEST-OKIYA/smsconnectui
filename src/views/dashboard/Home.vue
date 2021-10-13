<template>
  <section id="dashboard-ecommerce">
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
    <h5>
    Delivery Report
  </h5>
    </b-col>
  </b-row>
   <b-row class="match-height">
    <b-col
        xl="4"
        md="6"
      >
    <b-card-text class="font-small-2 mb-2 mt-2">
      Select Date Range
    <flat-pickr
          v-model="dateRange"
          class="form-control mt-1"
          :config="{ mode: 'range'}"
    />
    </b-card-text>
    </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col
        xl="4"
        md="6"
      >
        <delivery-rate-chart />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <delivery-statistics />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="6">
        <delivery-by-operator-table />
      </b-col>
      <b-col lg="6">
        <delivery-by-operator-table />
      </b-col>
    </b-row>
    <h5 class="card-title">
    Usage Traffic
    </h5>
    <div class="mt-2">
      <traffic-per-month/>
    </div>
    <h5 class="card-title">
    Last 5 Messages Sent
    </h5>
    <b-row class="match-height">
      <!-- Company Table Card -->
      <b-col lg="12">
        <delivery-by-operator-table />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol, BCardText } from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import DeliveryStatistics from './DeliveryStatistics.vue'
import DeliveryRateChart from './DeliveryRateChart.vue'
import DeliveryByOperatorTable from './DeliveryByOperatorTable.vue'
import TrafficPerMonth from './charts/TrafficPerMonth.vue'

export default {
  components: {
    BRow,
    BCol,
    BCardText,
    DeliveryStatistics,
    DeliveryRateChart,
    DeliveryByOperatorTable,
    flatPickr,
    TrafficPerMonth,
  },
  data() {
    return {
      data: {},
      dateRange: null,
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-ecommerce.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
