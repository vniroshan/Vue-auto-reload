<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="reloadApp"
        text
      >
       Reload
      </v-btn>
    </v-app-bar>

    <v-main>
    <router-view v-if="isRouterAlive"/>
    </v-main>
  </v-app>
</template>

<script>
import { refreshPageMixin } from "@/components/mixins/refresh-page.mixin";
export default {
  name: 'App',

  data: () => ({
    //
  }),
   mixins: [refreshPageMixin],
   mounted() {
    this.initVersionCheck("/version.json");
  },
};
</script>
