<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              <span class="headline">Add Lesson Part</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-flex>
                  <span class="headline">Learning Part</span>
                  <v-text-field label="Part Title" required v-model="lparttitle"></v-text-field>
                  <v-text-field label="Lesson Link" required v-model="lpartlink"></v-text-field>
                </v-flex>
                <v-flex>
                  <span class="headline">Practice Part</span>
                  <v-text-field label="Part Title" required v-model="exparttitle"></v-text-field>
                  <v-text-field label="Practice Link" hint="example of helper text only on focus" v-model="expartlink"></v-text-field>
                  <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                    <img :src="imageUrl" height="150" v-if="imageUrl"/>
                    <v-text-field label="Upload Answer" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                    <input
                      type="file"
                      style="display: none"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked"
                    >
                  </v-flex>
                </v-flex>
                <v-btn dark @click="create">Create Part</v-btn>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import PartsService from '@/Services/PartsService'

  export default {
    data () {
      return {
        imageName: '',
        imageUrl: '',
        imageFile: '',
        lparttitle:'',
        lpartlink:'',
        exparttitle:'',
        expartlink:'',
      }
    },


    methods : {
      async create() {
        try {
          // console.log('ggggggggggggggg' + this.$store.state.unittitle)
          //send user data to backend
          const response = await PartsService.create({
            lessonId: this.$store.state.lesson._id,
            l_title: this.lparttitle,
            l_link: this.lpartlink,
            p_title: this.exparttitle,
            p_link: this .expartlink,
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
      pickFile () {
        this.$refs.image.click ()
      },

      onFilePicked (e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      }
    },
  }


</script>

<style lang="scss">

</style>
