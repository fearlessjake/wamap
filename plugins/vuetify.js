import Vue from 'vue'
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VTooltip,
  VSnackbar
} from 'vuetify/lib'
import {
  Ripple
} from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VTooltip,
    VSnackbar
  },
  directives: {
    Ripple
  },
  theme: {
    primary: "#E0AF84",
    secondary: "#FFD180",
    accent: "#FFC107",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})
