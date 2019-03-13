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
                <v-flex>
                  <v-text-field label="Unit Title*" required v-model="unittitle"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field label="Unit Description" hint="example of helper text only on focus" v-model="unitdesc"></v-text-field>
                </v-flex>
                <v-btn @click="create" dark>Create Unit</v-btn>
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
  import UnitsService from '@/Services/UnitsService'


  export default {
    data () {
      return {
        showLesson: false,
        countLessons:0,
        unittitle:'',
        unitdesc:''
      }
    },
    watch: {

    },
    // props:[
    //   'unittile'
    // ],
    // methods:{
    //   function1 (){
    //     this.$emit('update', this.unittitle, this.unitdesc)
    //     }
    // },

    methods: {
      async create (){
        try {
          // console.log('ggggggggggggggg' + this.$store.state.unittitle)
          //send user data to backend
          const response = await UnitsService.create({
            classId: this.$store.state.class._id,
            title: this.unittitle,
            description: this.unitdesc,
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
