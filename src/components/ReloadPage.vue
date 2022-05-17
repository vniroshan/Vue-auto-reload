<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
         New Updates
        </v-card-title>

        <v-card-text>
         An update is available. Please save all current work and click update below. You can also accept these updates by refreshing your browswer.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="reloadPage"
          >
            Reload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
    methods:{
      reloadPage(){
         this.$emit("reload");
      }
    }
  }
</script>