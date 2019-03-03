<template>
    <div>
        <panel>
            <!--<table class="table">-->
          <v-container fluid>
            <v-btn fab dark color="indigo">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-container fluid class="white" >
              <!--grid-list-md text-xs-center-->
              <v-layout>
                <v-btn fab dark color="teal">
                  <v-icon dark>list</v-icon>
                </v-btn>
                <v-flex>
                  <h1>Math</h1>

                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>
            <v-container fluid class="white">
              <v-layout>
                <v-btn fab dark color="teal">
                  <v-icon dark>list</v-icon>
                </v-btn>
                <v-flex>
                  <h1>Math</h1>

                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex>
                  <ul>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                    <li>
                      <router-link to="units">Linear Algebra</router-link>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>
          </v-container>
        </panel>
    </div>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    data: () => ({
      currentComponent: null,
      componentsArray: ['foo', 'bar']


    }),

    components: {
      Panel,
      'foo': {
        template: '<h1>Foo component</h1>'
      },
    },
    methods: {
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
