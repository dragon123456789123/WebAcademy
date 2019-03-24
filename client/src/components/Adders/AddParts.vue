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
                    <div class="container">
                      <div class="large-12 medium-12 small-12 cell">
                        <label>Files
                          <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
                        </label>
                      </div>
                      <div class="large-12 medium-12 small-12 cell">
                        <div v-for="(file, key) in files" class="file-listing">{{ file.name }} <span class="remove-file" v-on:click="removeFile( key )">Remove</span></div>
                      </div>
                      <br>
                      <div class="large-12 medium-12 small-12 cell">
                        <button v-on:click="addFiles()">Add Files</button>
                        <input type="text">
                      </div>
                      <br>
                      <div class="large-12 medium-12 small-12 cell">
                        <button v-on:click="submitFiles()">Submit</button>
                      </div>
                    </div>
                    <!--<img :src="imageUrl" height="150" v-if="imageUrl"/>-->
                    <!--<v-text-field label="Upload Exercise" @click.stop="pickFile" v-model='imageName' prepend-icon='attach_file'>-->
                    <!--<input-->
                      <!--type="file"-->
                      <!--style="display: none"-->
                      <!--ref="image"-->
                      <!--accept="image/*"-->
                      <!--@change="onFilePicked"-->
                    <!--&gt;-->
                    <!--</v-text-field>-->
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
  import PPartsService from '@/Services/PPartsService'
  import LPartsService from '@/Services/LPartsService'
  import Api from '@/services/Api'
  import axios from 'axios'


  export default {
    data () {
      return {
        files: [],
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
          const response = await LPartsService.create({
            lessonId: this.$store.state.lesson._id,
            title: this.lparttitle,
            link: this.lpartlink,

            // units: this.unittitle1,
            // desc: this.unitdesc1,
            // lessons: this.lessontitle,
            // parts_learn: this.lparttitle,
            // parts_practice: this.exparttitle,
            // last_name: this.lname,
            // type: this.atype,
            // education: this.education
          });
          const response1 = await PPartsService.create({
            lessonId: this.$store.state.lesson._id,
            title: this.exparttitle,
            link: this.expartlink,
          });
          /*
          Initialize the form data
        */
          let formData = new FormData();

          /*
            Iterate over any file sent over appending the files
            to the form data.
          */
          for( var i = 0; i < this.files.length; i++ ){
            let file = this.files[i];

            formData.append('files[' + i + ']', file);
          }

          formData.append('lessonId', this.$store.state.lesson._id);
          formData.append('title', this.exparttitle);
          formData.append('link', this.expartlink);





          /*
            Make the request to the POST /select-files URL
          */
          axios.post( '/select-files',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          ).then(function(){
            console.log('SUCCESS!!');
          })
            .catch(function(){
              console.log('FAILURE!!');
            });

            console.log(response);
            console.log(response1);
        } catch (error) {
          console.log(error)
        }
      },
      handleFilesUpload(){
        let uploadedFiles = this.$refs.files.files;

        /*
          Adds the uploaded file to the files array
        */
        for( var i = 0; i < uploadedFiles.length; i++ ){
          this.files.push( uploadedFiles[i] );
        }
      },
      addFiles(){
        this.$refs.files.click();
      },
      removeFile( key ){
        this.files.splice( key, 1 );
      },
      // pickFile () {
      //   this.$refs.image.click();
      // },
      //
      // onFilePicked (e) {
      //   const files = e.target.files
      //   if(files[0] !== undefined) {
      //     this.imageName = files[0].name
      //     if(this.imageName.lastIndexOf('.') <= 0) {
      //       return
      //     }
      //     const fr = new FileReader ()
      //     fr.readAsDataURL(files[0])
      //     fr.addEventListener('load', () => {
      //       this.imageUrl = fr.result
      //       this.imageFile = files[0] // this is an image file that can be sent to server...
      //     })
      //   } else {
      //     this.imageName = ''
      //     this.imageFile = ''
      //     this.imageUrl = ''
      //   }
      // }
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }

        /*
          Make the request to the POST /select-files URL
        */
        axios.post( 'http://localhost:8081/select-files ',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
          .catch(function(){
            console.log('FAILURE!!');
          });
      },
    },
  }


</script>

<style lang="scss">
  input[type="file"]{
    position: absolute;
    top: -500px;
  }

  div.file-listing{
    width: 200px;
  }

  span.remove-file{
    color: red;
    cursor: pointer;
    float: right;
  }
</style>
