<template>
  <v-layout row wrap align-center>
    <v-flex xs6 offset-xs3>
        <panel title="Register">
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
                    @click="register">
              Register
            </v-btn>
            <br>
            <div></div>
            <br>
            <p>Already have an account? </p><v-btn dark @click="navigateTo({name:'login'})">Log in instead!</v-btn>
        </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'

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
      //register method
      async register () {
        try {
          //send user data to backend
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
          //set user state
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          //redirect to main component
          this.$router.push({
            name: 'shops'
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    },
    //including panel component
    components:{
      Panel
    }
  }
</script>

<style scoped>
    .danger-alert{
        color: red;
    }
</style>
