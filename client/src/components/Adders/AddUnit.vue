<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              <span class="headline">Create Unit</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Unit Title*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Unit Description" hint="example of helper text only on focus"></v-text-field>
                </v-flex>
                <v-btn @click="showLesson=true; countLessons+=1">Add Lesson</v-btn>
              </v-container>
              {{countLessons}}
              <v-container fluid v-for="countLesson in countLessons" :key="countLesson">
                <add-lesson v-show="showLesson" id="unit">

                </add-lesson>
              </v-container>

            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import AddLesson from '@/components/Adders/AddLesson'


  export default {
    data () {
      return {
        showLesson: false,
        countLessons:0,
      }
    },
    components : {
      AddLesson
    }
  }
</script>

<style lang="scss">

</style>
