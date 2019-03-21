<template>
  <v-layout row wrap align-center>
    <v-flex >
      <v-container>
        <v-card>
          <v-card-title>
            <span class="headline">Create Class</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-flex>
                <v-text-field label="Class Title*" required v-model="title"></v-text-field>
              </v-flex>
              <v-flex>
                <v-select
                  :items="['Math', 'Computer Science', 'Physics']"
                  label="Subject*"
                  required
                  v-model="subject"
                ></v-select>
              </v-flex>
              <v-flex>
                <v-text-field label="Class Subject*" required v-model="subject"></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field label="Class Description" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
            </v-container>
            <v-btn @click="create" dark>Create Class</v-btn>

          </v-card-text>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import AddUnit from '@/components/Adders/AddUnit'
  import ClassesService from '@/Services/ClassesService'


  export default {
    data() {
      return {
        showUnit: false,
        countUnits: 0,
        title: '',
        subject: '',
        subject1: '',
        unittitle1:'',
        unitdesc1: '',
        lessontitle:'',
        lparttitle:'',
        lpartlink:'',
        exparttitle:'',
        expartlink:'',
      }
    },

    mounted() {

    },
    methods: {
      async create() {
        try {
          // console.log('ggggggggggggggg' + this.$store.state.unittitle)
          //send user data to backend
          const response = await ClassesService.create({
            userId: this.$store.state.token,
            instructor: this.$store.state.user.first_name,
            title: this.title,
            Subject: this.subject,
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
      },
      handlu (unittile, unitdesc){
        this.unittitle1 = unittile;
        this.unitdesc1 = unitdesc;
      },
      // handle (){
      //   this.handlu();
      //   this.create();
      // }
    }
  }
</script>

<style lang="scss">

  #unit{
    width: 100%;
    size: 100px;
  }

</style>
