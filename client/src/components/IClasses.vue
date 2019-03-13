<template>
    <v-layout>
        <v-flex>
          <v-card v-for="classe in classes" :key="classe._id">
            <v-card-title>
              <span class="headline"> {{classe.title}} </span>
              <v-btn @click="navigateTo({name: 'classes'}, classe)"> view class </v-btn>
            </v-card-title>
            <!--<v-container>-->
              <!--<v-flex></v-flex>-->
            <!--</v-container>-->
          </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import InstructorService from '@/services/InstructorService'

  export default {
    components: {
      Panel
    },
    data() {
      return {
        classes: null,
        key: null,
      }
    },

     async mounted (){
      this.classes = (await InstructorService.index({userId: this.$store.state.token})).data
    },

    methods: {
      navigateTo(route, classe) {
        this.$router.push(route)
        this.$store.dispatch('setClass', classe)
      },
    }
  }
</script>

<style scoped>
    #shop{
        float: left;
        margin: 10px;
    }
</style>
