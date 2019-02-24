<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-btn slot="activator" color="primary" dark>
          <slot name="header">
            Open Dialog
          </slot>
        </v-btn>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>Settings</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn dark flat @click="dialog = false">Save</v-btn>
            </v-toolbar-items>
          </v-toolbar>
            <slot name="content"></slot>

          <slot name="answer"></slot>

            <slot name="submission"></slot>
                <v-btn>Submit</v-btn>
          <!--<v-list three-line subheader>-->
            <!--<v-subheader>User Controls</v-subheader>-->
            <!--<v-list-tile avatar>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>Content filtering</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
            <!--<v-list-tile avatar>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>Password</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
          <!--</v-list>-->
          <!--<v-divider></v-divider>-->
          <!--<v-list three-line subheader>-->
            <!--<v-subheader>General</v-subheader>-->
            <!--<v-list-tile avatar>-->
              <!--<v-list-tile-action>-->
                <!--<v-checkbox v-model="notifications"></v-checkbox>-->
              <!--</v-list-tile-action>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>Notifications</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
            <!--<v-list-tile avatar>-->
              <!--<v-list-tile-action>-->
                <!--<v-checkbox v-model="sound"></v-checkbox>-->
              <!--</v-list-tile-action>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>Sound</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
            <!--<v-list-tile avatar>-->
              <!--<v-list-tile-action>-->
                <!--<v-checkbox v-model="widgets"></v-checkbox>-->
              <!--</v-list-tile-action>-->
              <!--<v-list-tile-content>-->
                <!--<v-list-tile-title>Auto-add widgets</v-list-tile-title>-->
                <!--<v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>-->
              <!--</v-list-tile-content>-->
            <!--</v-list-tile>-->
          <!--</v-list>-->
        </v-card>
      </v-dialog>
    </v-layout>



  <!--<div class="modal is-active">-->
    <!--<div class="modal-background"></div>-->
    <!--<div class="modal-content ">-->

      <!--<div class="box">-->
        <!--<p class="image is-4by4">-->

        <!--<slot>-->

        <!--</slot>-->
        <!--</p>-->
      <!--&lt;!&ndash; Any other Bulma elements you want &ndash;&gt;-->
      <!--</div>-->
    <!--</div>-->
    <!--<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>-->
  <!--</div>-->
</template>



<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    props: [
      'title'
    ]
  }
</script>

<style scoped>
</style>
