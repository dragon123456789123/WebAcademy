<template>
    <v-layout row wrap align-center>
        <v-flex xs6 offset-xs3>
          <v-container>
                <form
                        name="tab-tracker-form"
                        autocomplete="off">
                    <v-text-field
                            label="Email"
                            v-model="email"
                    ></v-text-field>
                    <br>
                    <v-text-field
                            label="Password"
                            type="password"
                            v-model="password"
                            autocomplete="new-password"
                    ></v-text-field>
                </form>
                <br>
                <div class="danger-alert" v-html="error" />
                <br>
                <v-btn
                        dark
                        class="cyan"
                        @click="login">
                    Login
                </v-btn>
                <br>
                <div></div>
                <br>
            <p>Don't have an account?</p> <v-btn dark @click="navigateTo({name:'register'})">Sign up instead!</v-btn>
          </v-container>
        </v-flex>
    </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import AuthenticationService from '@/Services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      //navigate method
      navigateTo(route) {
          this.$router.push(route)
        },

      //login methods
      async login () {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          });
          //set user data after login
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          //redirect to main page
          this.$router.push({
            name: 'landing'
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    components:{
      Panel
    }
  }
</script>

<style scoped>
</style>
