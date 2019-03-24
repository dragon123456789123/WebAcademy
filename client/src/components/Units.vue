<template>
    <div>
        <panel>
            <template>
                <v-container fluid grid-list-sm>
                    <v-btn @click="navigateTo({name:'landing'})">Back to Math</v-btn>
                    <v-layout >

                        <v-flex v-for="unit in units" :key="unit._id" xs6 sm4>
                            <v-img
                                    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                                    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                            ></v-img>
                            <a @click="navigateTo({name:'lessons'}, unit)"><h2>{{unit.title}}</h2></a>
                        </v-flex>


                    </v-layout>
                </v-container>
            </template>
        </panel>
    </div>
</template>

<script>
  import Panel from '@/components/Panel'
  import UnitsService from '@/services/UnitsService'

  export default {
    data: () => ({
      units: null,

    }),

    async mounted (){
      await console.log(this.$store.state.class._id)
      this.units = (await UnitsService.index({classId: this.$store.state.class._id})).data
      await console.log(this.$store.state.class._id)
    },

    methods : {
      navigateTo(route, unit) {
        this.$router.push(route)
        this.$store.dispatch('setUnit', unit)
        console.log(this.$store.state.unit)
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
