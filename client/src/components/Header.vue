<template>
  <!--<div class="hero-head">-->
    <!--<nav class="navbar">-->
      <!--<div class="container">-->
        <!--<div class="navbar-brand">-->
          <!--<router-link to="" class="navbar-item">-->
            <!--&lt;!&ndash;<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">&ndash;&gt;-->
            <!--WebAcademy-->
          <!--</router-link>-->
          <!--<span class="navbar-burger burger" data-target="navbarMenuHeroB">-->
            <!--<span></span>-->
            <!--<span></span>-->
            <!--<span></span>-->
          <!--</span>-->
        <!--</div>-->
        <!--<div id="navbarMenuHeroB" class="navbar-menu">-->
          <!--<div class="navbar-end">-->
            <!--<router-link to="" class="navbar-item is-active">-->
              <!--Home-->
            <!--</router-link>-->
            <!--<router-link to="" class="navbar-item">-->
              <!--si-->
            <!--</router-link>-->
            <!--<router-link to="" class="navbar-item">-->
              <!--Documentation-->
            <!--</router-link>-->
            <!--<span class="navbar-item">-->
              <!--<router-link to="" class="button is-info is-inverted">-->
                <!--<span class="icon">-->
                  <!--<i class="fab fa-github"></i>-->
                <!--</span>-->
                <!--<span>Download</span>-->
              <!--</router-link>-->
            <!--</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</nav>-->
  <!--</div>-->

















  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn @click="navigateTo({name: 'landing'})" flat dark>
        WebAcademy
      </v-btn>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'landing'})"
             flat
             dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn"
             @click="navigateTo({name: 'login'})"
             flat
             dark>
        Log In
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn"
             @click="navigateTo({name: 'register'})"
             flat
             dark>
         Sign Up
      </v-btn>

      <!--v-show="isStudent"-->
      <v-btn v-if="$store.state.isUserLoggedIn"  v-model="isStudent"
             @click="goTo()"
             flat
             dark>
        MyClasses
      </v-btn>

      <v-btn v-if="$store.state.isUserLoggedIn"
             @click="logout()"
             flat
             dark>
        Log Out
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        type:'',
        isStudent:false,
        isTeacher:false,
      }
    },
    mounted(){
      {
        if (this.$store.state.isUserLoggedIn) {
          if (this.$store.state.user.type == 'Student') {
            this.isStudent = true
          }
          if (this.$store.state.user.type == 'Instructor') {
            this.isTeacher = true
          }
        } else {
          this.isStudent = false
          this.isTeacher = false
        }
      }
      console.log(this.isStudent)
    },

    methods: {
      navigateTo(route) {
        this.$router.push(route)
      },
      async logout() {
        //set user data to null
        this.store = await this.$store.dispatch('setUser', null)
        this.store = await this.$store.dispatch('setToken', null)
        //redirect to main page
        this.isStudent = false
        this.isTeacher = false
        await this.$router.push({
          name: 'landing'
        })
      },
      async goTo() {
        if (this.$store.state.user.type == 'Student') {
          await this.$router.push({
            name: 'sclasses'
          })
        }
        if (this.$store.state.user.type == 'Instructor') {
          await this.$router.push({
            name: 'iclasses'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: #E9E;
  }
</style>
