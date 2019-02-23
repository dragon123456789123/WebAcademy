<template>
    <div>
        <panel>
            <template>
                <v-container fluid grid-list-sm>
                    <v-btn @click="navigateTo({name:'test'})">Back to Math</v-btn>
                    <v-layout>

                        <v-flex xs6 sm4>
                            <v-img
                                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                            ></v-img>
                            <router-link to="test3"><h2>matrix multiplication</h2></router-link>
                        </v-flex>

                        <v-flex xs6 sm4>
                            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                                <div class="fill-height bottom-gradient"></div>
                            </v-img>
                            <h2>matrix addition</h2>
                        </v-flex>

                        <v-flex xs6 sm4>
                            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                                <div class="fill-height repeating-gradient"></div>
                            </v-img>
                            <h2>matrix subtraction</h2>
                        </v-flex>
                    </v-layout>
                </v-container>
            </template>
        </panel>
    </div>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    data: () => ({
      //     rowsPerPageItems: [4, 8, 12],
      //     pagination: {
      //       rowsPerPage: 4
      //     },
      //     items: [
      //       {
      //         name: 'Math',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //           ],
      //
      //       },
      //       {
      //         name: 'Science',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       },
      //       {
      //         name: 'Physics',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       },
      //       {
      //         name: 'Computer Science',
      //         classes: [
      //           {name: 'linear algebra'},
      //           {name: 'calculus'},
      //           {name: 'trigonometry'},
      //           {name: 'geometry 5'},
      //           {name: 'linear'},
      //           {name: 'calculus 3'},
      //           {name: 'trigonometry 2'},
      //         ],
      //       }
      //     ]
    }),

    methods : {
      navigateTo(route) {
        this.$router.push(route)
      },
    },

    components: {
      Panel,
      'foo': {
        template: '<h1>Foo component</h1>'
      },
    },

  }
</script>

<style scoped>
    .bottom-gradient {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
    }

    .repeating-gradient {
        background-image: repeating-linear-gradient(-45deg,
        rgba(255,0,0,.25),
        rgba(255,0,0,.25) 5px,
        rgba(0,0,255,.25) 5px,
        rgba(0,0,255,.25) 10px
        );
    }
    router-link {
        text-decoration: none;
        color: black;
    }
</style>
