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
                <v-flex>
                  <v-text-field label="Lesson Title*" required v-model="lessontitle"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Lesson Description" hint="example of helper text only on focus" v-model="lessondesc"></v-text-field>
                </v-flex>
                <v-btn @click="create" dark>Create Lesson</v-btn>
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
  import LessonsService from '@/Services/LessonsService'

  export default {
    data () {
      return {
        showPart: false,
        countParts:0,
        lessontitle:'',
        lessondesc:'',
      }
    },

    methods: {
      async create() {
        try {
          // console.log('ggggggggggggggg' + this.$store.state.unittitle)
          //send user data to backend
          const response = await LessonsService.create({
            unitId: this.$store.state.unit._id,
            title: this.lessontitle,
            description: this.lessondesc,
            // units: this.unittitle1,
            // desc: this.unitdesc1,
            // lessons: this.lessontitle,
            // parts_learn: this.lparttitle,
            // parts_practice: this.exparttitle,
            // last_name: this.lname,
            // type: this.atype,
            // education: this.education
          });
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
    }

  }
</script>

<style lang="scss">

</style>
