<template>
    <div >
      <!--class="white elevation-2"-->
        <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>{{title}}</v-toolbar-title>
            <slot name="action" />
        </v-toolbar>
        <v-parallax
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-layout
            align-center
            column
            justify-center
          >
            <h1 class="display-2 font-weight-thin mb-3">WebAcademy</h1>
            <h4 class="subheading">An Online Educational Platform</h4>
          </v-layout>
        </v-parallax>
        <div >
          <!--class="pl-4 pr-4 pt-2 pb-2"-->
            <slot>
                wait for processing shops by distance
            </slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'title'
    ]
  }
</script>

<style scoped>
</style>
