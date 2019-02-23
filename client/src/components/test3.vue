<template>
    <div>
          <modal v-if="showModal" @close="showModal=false">

            <youtube :video-id="videoId"></youtube>

          </modal>
                <v-layout row xs3>
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
                <v-flex xs9>
                    <div>
                        <div class="table-responsive-sm">
                            <table class="table">
                              <thead class="thead-dark">
                              <!--<tr>-->
                                <!--<th scope="col">#</th>-->
                                <!--<th scope="col">First</th>-->
                                <!--<th scope="col">Last</th>-->
                                <!--<th scope="col">Handle</th>-->
                              <!--</tr>-->
                              </thead>

                              <tbody>
                                  <ul style="list-style: none;">
                                    <th>Linear Combination of columns</th>
                                    <td>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    </td>
                                    <td>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                      <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    </td>
                                  </ul>
                                  <ul style="list-style: none;">
                                    <th scope="row">Linear Combination of columns</th>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                  </ul>
                                  <ul style="list-style: none;">
                                    <th scope="row">Linear Combination of columns</th>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                  </ul>
                                  <ul style="list-style: none;">
                                    <th scope="row">Linear Combination of columns</th>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                    <li><v-btn @click="showModal = true"><router-link to=""><a href="">linear Algebra</a></router-link></v-btn></li>
                                  </ul>
                              </tbody>
                            </table>
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
                </v-flex>
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
        showModal : false,
        url: null,
        videoId : null,
        startTime : null,
      }
    },

    async mounted (){
         await this.method('https://www.youtube.com/watch?v=pZ4hseG4d4s&t=2091s'),
      console.log(this.showModal)
    },

    methods : {
      method (url) {
        this.videoId = getIdFromURL(url)
        this.startTime = getTimeFromURL(url)
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
    .heights {
      max-height: 200px;
      overflow: auto;
    }
    .scroll {
      overflow-y: auto;
    }
    #fixed {
      position:   fixed;

    }
</style>
