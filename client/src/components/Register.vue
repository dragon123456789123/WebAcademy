<template>
  <v-layout row wrap align-center>
    <v-flex xs6 offset-xs3>
      <v-container>
      <v-card>
        <v-card-title>
          <span class="headline">Register</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-select
              :items="['Student', 'Instructor']"
              label="Account Type*"
              required
            ></v-select>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-autocomplete
                  :items="['Primary', 'Secondary', 'High School', 'College']"
                  label="Level of Education"
                  multiple
                ></v-autocomplete>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
        <v-spacer></v-spacer>

        <p>Already have an account? </p>

        <v-spacer></v-spacer>
        <v-btn dark @click="navigateTo({name:'login'})">Log in instead!</v-btn>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  // import AuthenticationService from '@/services/AuthenticationService'
  import Panel from '@/components/Panel'

  export default {

    $_veeValidate: {
      validator: 'new'
    },

    data () {
      return {
        email: '',
        password: '',
        error: null,
        items: [
          'Primary School',
          'Secondary School',
          'High School',
          'College'
        ],
        items1: [
          'Instructor',
          'Student',
        ],
        checkbox: null,
        dictionary: {
          attributes: {
            email: 'E-mail Address'
            // custom attributes
          },
          custom: {
            name: {
              required: () => 'Name can not be empty',
              max: 'The name field may not be greater than 10 characters'
              // custom messages
            },
            select: {
              required: 'Select field is required'
            }
          }
        }
      }
    },

    mounted ()
      {
      this.$validator.localize('en', this.dictionary)
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
      },

      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
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
