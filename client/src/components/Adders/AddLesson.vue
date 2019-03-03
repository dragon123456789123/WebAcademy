<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              <span class="headline">Add Lesson</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Lesson Title*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Lesson Description" hint="example of helper text only on focus"></v-text-field>
                </v-flex>
                <v-btn @click="showPart=true; countParts+=1">Add Part</v-btn>
              </v-container>
              {{countParts}}
              <v-container fluid v-for="countPart in countParts" :key="countPart">
                <add-parts v-show="showPart" id="unit">

                </add-parts>
              </v-container>

            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AddParts from '@/components/Adders/AddParts'


  export default {
    data () {
      return {
        showPart: false,
        countParts:0,
      }
    },
    components : {
      AddParts
    }
  }
</script>

<style lang="scss">

</style>
