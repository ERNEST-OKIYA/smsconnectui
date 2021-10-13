<template>
  <div>
    <b-card no-body>
    <b-card-header class="align-items-right">
      <!-- datepicker -->
      <div class="d-flex align-items-center"
      style="margin-right:0px;"
      >
        <feather-icon
          icon="CalendarIcon"
          size="16"
        />
        <flat-pickr
          v-model="rangePicker"
          @on-close="refetchData"
          :config="config"
          class="form-control flat-picker bg-transparent border-0 shadow-none"
          placeholder="Select Date Range"
        />
      </div>
      <!-- datepicker -->
    </b-card-header>

    <!-- charts -->
    <b-card-body>
      <chartjs-bar-chart
        v-if="loaded"
        :traffic-bar-chart="trafficBarChart" />
    </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
// import moment from 'moment'
import { $themeColors } from '@themeConfig'
import ChartjsBarChart from './ChartjsBarChart.vue'

const chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#8bc310',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  latestBarChartPrimary: '#666ee8',
  latestBarChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)',
}

export default {
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    flatPickr,
    ChartjsBarChart,
  },
  data() {
    return {
      rangePicker: null,
      config: {
        mode: 'range',
      },
      userData: JSON.parse(localStorage.getItem('userData')),
      loaded: true,
      trafficBarChart: {
        data: {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: chartColors.successColorShade,
              borderColor: 'transparent',
            },
          ],
        },
        options: {
          elements: {
            rectangle: {
              borderWidth: 2,
              borderSkipped: 'bottom',
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          responsiveAnimationDuration: 500,
          legend: {
            display: false,
          },
          tooltips: {
            // Updated default tooltip UI
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowBlur: 8,
            shadowColor: chartColors.tooltipShadow,
            backgroundColor: $themeColors.light,
            titleFontColor: $themeColors.dark,
            bodyFontColor: $themeColors.dark,
          },
          scales: {
            xAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  color: chartColors.grid_line_color,
                  zeroLineColor: chartColors.grid_line_color,
                },
                scaleLabel: {
                  display: false,
                },
                ticks: {
                  fontColor: chartColors.labelColor,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                gridLines: {
                  color: chartColors.grid_line_color,
                  zeroLineColor: chartColors.grid_line_color,
                },
                ticks: {
                  stepSize: 10000,
                  min: 0,
                  max: 100000,
                  fontColor: chartColors.labelColor,
                },
              },
            ],
          },
        },
      },
    }
  },
  methods: {
    refetchData(dateStr) {
      this.loaded = false
      const start = String(dateStr[0]).format('YYYY-MM-DD')
      const end = String(dateStr[1]).format('YYYY-MM-DD')
      this.$http.get(`/stats/totals/payins-per-month/?created_at_before=${end}&created_at_after=${start}`).then(response => {
        this.trafficBarChart.data.labels = JSON.parse(JSON.stringify(response.data.graph_data.payin_labels))
        this.trafficBarChart.data.datasets[0].data = JSON.parse(JSON.stringify(response.data.graph_data.payins_graph_data))
        this.loaded = true
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
