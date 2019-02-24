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
                                        v-for="item in items"
                                        :key="item.title"
                                        avatar
                                        @click=""
                                >
                                    <!--<v-list-tile-action>-->
                                        <!--<v-icon v-if="item.icon" color="pink"></v-icon>-->
                                    <!--</v-list-tile-action>-->

                                    <v-list-tile-content>
                                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                                    </v-list-tile-content>

                                    <!--<v-list-tile-avatar>-->
                                        <!--<img :src="item.avatar">-->
                                    <!--</v-list-tile-avatar>-->
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-flex>
                <!--<v-flex >-->
                    <div>
                        <div class="table-responsive-lg">
                            <!--<table class="table">-->
                              <!--<thead class="thead-dark">-->
                              <!--<tr>-->
                                <!--<th scope="col">#</th>-->
                                <!--<th scope="col">First</th>-->
                                <!--<th scope="col">Last</th>-->
                                <!--<th scope="col">Handle</th>-->
                              <!--</tr>-->
                              <!--</thead>-->

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
                                        <template slot="header">linear Algebra</template>
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
                                             <!--v-model="form.bio"-->
                                             <div slot="label">
                                               Your Answer
                                             </div>
                                           </v-textarea>
                                         </v-flex>
                                        </v-container>
                                       </template>
                                        <template slot="submission">
                                        <v-content>
                                          <v-container fluid>
                                            <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                                              <img :src="imageUrl" height="150" v-if="imageUrl"/>
                                              <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                                              <input
                                                type="file"
                                                style="display: none"
                                                ref="image"
                                                accept="image/*"
                                                @change="onFilePicked"
                                              >
                                            </v-flex>
                                            <v-dialog v-model="dialog" max-width="290">
                                              <v-card>
                                                <v-card-title class="headline">Hello World!</v-card-title>
                                                <v-card-text>Image Upload Script in VUE JS
                                                  <hr>Yubaraj Shrestha
                                                  <br>http://yubarajshrestha.com.np/</v-card-text>
                                                <v-card-actions>
                                                  <v-spacer></v-spacer>
                                                  <v-btn color="green darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
                                                </v-card-actions>
                                              </v-card>
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
                            <!--</table>-->
                        </div>

                        <!--<div class="table-responsive-md">-->
                            <!--<table class="table">-->
                              <!--<tr>-->
                              <!--<th scope="row">Math</th>-->
                              <!--<td>-->
                                <!--<ul style="list-style: none;">-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                <!--</ul>-->
                              <!--</td>-->
                            <!--</tr>-->
                            <!--</table>-->
                        <!--</div>-->

                        <!--<div class="table-responsive-lg">-->
                            <!--<table class="table">-->
                              <!--<tr>-->
                                <!--<th scope="row">Math</th>-->
                                <!--<td>-->
                                  <!--<ul style="list-style: none;">-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--</ul>-->
                                <!--</td>-->
                              <!--</tr>-->
                            <!--</table>-->
                        <!--</div>-->

                        <!--<div class="table-responsive-xl">-->
                            <!--<table class="table">-->
                              <!--<tr>-->
                                <!--<th scope="row">Math</th>-->
                                <!--<td>-->
                                  <!--<ul style="list-style: none;">-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                    <!--<li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>-->
                                  <!--</ul>-->
                                <!--</td>-->
                              <!--</tr>-->
                            <!--</table>-->
                        <!--</div>-->
                    </div>
                <!--</v-flex>-->
            </v-layout>
    </div>
</template>


<script>
  import Panel from '@/components/Panel'
  import Modal from '@/components/Modal'
  import { getIdFromURL, getTimeFromURL } from 'vue-youtube-embed'


  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Linear Combinations and Spans',  },
          { title: 'Linear dependence and independence',  },
          { title: 'subspace and the basis for subspaces', },
          { title: 'vector dot and cross product', },
          { title: 'matrix inversion and rules1', },
          { title: 'matrix inversion and rules2', },
          { title: 'matrix inversion and rules3', },
          { title: 'matrix inversion and rules4', }
        ],
        url: null,
        videoId : null,
        startTime : null,
        dialog: false,
        imageName: '',
        imageUrl: '',
        imageFile: ''
      }
    },

    async mounted (){
         await this.method('https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab')
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
