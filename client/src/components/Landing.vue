<template>
    <div>
        <panel>
            <!--<table class="table">-->
          <v-container fluid>
            <!--<v-btn v-show="$store.state.user.type == 'Instructor'" @click="navigateTo({name: 'create'})" fab dark color="indigo">-->
              <!--<v-icon dark>add</v-icon>-->
            <!--</v-btn>-->
            <v-container fluid class="white" >
              <!--grid-list-md text-xs-center-->
              <v-layout>
                <v-flex  v-for="subject in subjects" :key="subject._id">
                  <v-btn fab dark color="teal">
                    <v-icon dark>list</v-icon>
                  </v-btn>
                  <v-flex>
                    <h1>{{subject.title}}</h1>

                  </v-flex>
                  <v-flex>
                    <ul>
                      <li v-for=" classe in subject.classes" :key="classe._id">
                        <a @click="navigateTo({name: 'units'}, classe)">{{classe.title}}</a>
                      </li>
                    </ul>
                  </v-flex>
                </v-flex>

              </v-layout>
            </v-container>
          </v-container>
        </panel>
    </div>
</template>

<script>
  import Panel from '@/components/Panel'
  import SubjectsService from '@/services/SubjectsService'

  export default {
    data: () => ({
      currentComponent: null,
      componentsArray: ['foo', 'bar'],
      subjects: null,
      

    }),

    async mounted () {
        this.subjects = (await SubjectsService.index()).data
      console.log(this.subjects)
      console.log(this.$store.state.user)
    },

    components: {
      Panel,
    },
    methods: {
      navigateTo(route, classe) {
        this.$router.push(route)
        this.$store.dispatch('setClass', classe)
      },
      swapComponent: function (component) {
        this.currentComponent = component;
      }
    }
  }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    router-link {
        text-decoration: none;
        color: black;
    }

    .types{
      display:inline-block;
      float:left;
      margin: 10px;
    }
    .white{
        margin: 10px;
    }

    ul {
      list-style-type: none;
    }
     li {
       margin: 10px;

  }
</style>
