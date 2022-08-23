<template>
  <layout-vertical>

    <router-view />
    <div slot="footer">
      <p class="clearfix mb-0">
        <span class="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT  © {{ new Date().getFullYear() }}
          <b-link
            class="ml-25"
            href="#"
            target="_blank"
<<<<<<< HEAD
          >SMS CONNECT</b-link>
=======
          >SmsConnect SMS</b-link>
>>>>>>> 5c31a54c25b442eb4349a060fa598e61256e3a13
          <span class="d-none d-sm-inline-block">, All rights Reserved</span>
        </span>

        <span class="float-md-right d-none d-md-block">Hand-crafted &amp; Made with
          <feather-icon
            icon="HeartIcon"
            size="21"
            class="text-danger stroke-current"
          />
        </span>
      </p>
    </div>

    <app-customizer
      v-if="showCustomizer"
      slot="customizer"
    />

  </layout-vertical>
</template>

<script>
import { BLink } from 'bootstrap-vue'
import LayoutVertical from '@core/layouts/layout-vertical/LayoutVertical.vue'
import AppCustomizer from '@core/layouts/components/app-customizer/AppCustomizer.vue'
import { $themeConfig } from '@themeConfig'

export default {
  components: {
    AppCustomizer,
    LayoutVertical,
    BLink,
  },
  data() {
    return {
      showCustomizer: $themeConfig.layout.customizer,
    }
  },
}
</script>
