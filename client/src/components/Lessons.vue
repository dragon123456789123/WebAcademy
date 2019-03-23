<template>
    <div>
        <v-layout>
            <v-flex xs4>
                <v-card  id="fixed">
                    <v-toolbar color="indigo" dark>

                        <v-toolbar-title>Lessons</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon></v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon></v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-list>
                        <v-list-tile
                                v-for="lesson in lessons"
                                :key="lesson._id"
                                avatar
                                @click=""
                        >

                            <v-list-tile-content>
                                <v-list-tile-title v-text="lesson.title"></v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <div>
                <div class="table-responsive-lg">
                  <v-container v-for="lesson in lessons" :key="lesson._id">
                      <h1>{{lesson.title}}</h1>
                     <br>
                        <div class="per-lesson">
                          <h2>Learn</h2>
                          <ul style="list-style: none;">
                            <td>
                              <modal v-for="part in lesson.l_parts" :key="part._id">
                                <template slot="header">{{part.title}}</template><template slot="content"><youtube :video-id="part.link"></youtube></template>
                              </modal>
                              <!--<modal>-->
                                <!--<template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>-->
                              <!--</modal>-->
                              <!--<modal>-->
                                <!--<template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>-->
                              <!--</modal>-->
                              <!--<modal>-->
                                <!--<template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>-->
                              <!--</modal>-->
                              <!--<modal>-->
                                <!--<template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>-->
                              <!--</modal>-->
                            </td>
                          </ul>
                        </div>

                        <div class="per-lesson">
                          <h2>Practice</h2>
                          <ul>
                            <td >
                              <modal v-for="part in lesson.p_parts" :key="part._id">
                                <template slot="header">{{part.title}}</template>
                                <template slot="content">
                                  <v-container>
                                  <img
                                    src="@/assets/ex1.png"
                                  />
                                  </v-container>
                                </template>
                               <template slot="answer">
                                <v-container>
                                 <v-flex xs6>
                                   <v-textarea
                                     color="teal"
                                   >
                                     <div slot="label">
                                       Type Answer
                                     </div>
                                   </v-textarea>
                                 </v-flex>
                                </v-container>
                               </template>
                                <template slot="submission">
                                <v-content>
                                  <v-container>
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
                                    <v-dialog v-model="dialog" max-width="290">
                                    </v-dialog>
                                  </v-container>
                                </v-content>
                              </template>
                              </modal>
                              <modal>
                                <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                              </modal>
                              <modal>
                                <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                              </modal>
                              <modal>
                                <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                              </modal>
                              <modal>
                                <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                              </modal>
                            </td>
                          </ul>
                        </div>
                  </v-container>

                      <h1>Linear Combination of columns</h1>
                      <br>
                      <div class="per-lesson">
                        <h2>Learn</h2>
                        <ul style="list-style: none;">
                          <td>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                          </td>
                        </ul>
                      </div>

                      <div class="per-lesson">
                        <h2>Practice</h2>
                        <ul>
                          <td>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                            <modal>
                              <template slot="header">linear Algebra</template><template slot="content"><youtube :video-id="videoId"></youtube></template>
                            </modal>
                          </td>
                        </ul>
                      </div>
                </div>
            </div>
      </v-layout>
    </div>
</template>


<script>
  import Panel from '@/components/Panel'
  import Modal from '@/components/Modal'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'
  import LessonsService from '@/services/LessonsService'

  export default {
    data () {
      return {
        url: null,
        videoId : null,
        startTime : null,
        dialog: false,
        imageName: '',
        imageUrl: '',
        imageFile: '',
        lessons:'',
        parts:'',
      }
    },

    async mounted (){
      this.lessons = (await LessonsService.index({unitId: this.$store.state.unit._id})).data;
      for(let lesson of this.lessons) {
        for (let part of lesson.l_parts) {
          part.link = getIdFromURL(part.link)
        }
      }
      await console.log(this.$store.state.unit._id);
      await console.log(this.lessons);
         await this.method('https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab');
      console.log(this.startTime)
    },

    methods : {
      method (url) {
        this.videoId = getIdFromURL(url)
        this.startTime = getTimeFromURL(url)
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

    components : {
      Panel,
      Modal
    },

  }

</script>

<style scoped>
    /*.bottom-gradient {*/
        /*background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);*/
    /*}*/

    /*.repeating-gradient {*/
        /*background-image: repeating-linear-gradient(-45deg,*/
        /*rgba(255,0,0,.25),*/
        /*rgba(255,0,0,.25) 5px,*/
        /*rgba(0,0,255,.25) 5px,*/
        /*rgba(0,0,255,.25) 10px*/
        /*);*/
    /*}*/
    /*router-link {*/
        /*text-decoration: none;*/
        /*color: black;*/
    /*}*/

    #fixed {
      position:   fixed;

    }
    .per-lesson {
      display:inline-block;
      float:left;
      margin: 70px;
    }
</style>
