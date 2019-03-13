<template>
    <v-layout>
        <v-flex>
          <v-card>
            <!--<v-card-title>-->
              <!--<span class="headline"> Linear Algebra </span>-->
              <!--<v-btn> add unit </v-btn>-->
            <!--</v-card-title>-->
            <div v-if="units===null">
              <v-flex>
                <div>No Content in this class</div>
                <v-btn @click="navigateTo({name: 'addunit'})"> add unit </v-btn>
              </v-flex>
            </div>
            <div v-else>
              <v-container v-for="unit in units" :key="unit._id">
                <v-card-title>
                  <span class="headline"> {{unit.title}} </span>
                  <v-btn @click="navigateTo({name: 'addlesson'}, unit)"> add lesson </v-btn>
                  <v-btn @click="navigateTo({name: 'addunit'})"> add unit </v-btn>
                </v-card-title>
                <div v-if="unit.lessons===null">
                  <v-flex>
                    <span>No lessons in this unit</span>
                    <v-btn @click="navigateTo({name: 'addlesson'}, unit)"> add lesson </v-btn>
                  </v-flex>
                </div>
                <div v-else>
                  <v-container v-for="lesson in unit.lessons" :key="lesson._id">
                    <v-card-title>
                      <span class="headline"> {{lesson.title}} </span>
                      <v-btn @click="navigateTo({name: 'addparts'})"> Edit lesson </v-btn>
                    </v-card-title>
                  </v-container>
                </div>
              </v-container>
            </div>
            <!--<v-container>-->
            <!--<v-flex></v-flex>-->
            <!--</v-container>-->
          </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'
  import UnitsService from '@/services/UnitsService'

  export default {
    components: {
      Panel
    },
    data() {
      return {
        units: null,
        lessons: null,
        key: null
      }
    },

    async mounted (){
      this.units = (await UnitsService.index({classId: this.$store.state.class._id})).data
      console.log(this.units[1].lessons)
      // this.lessons = (await LessonsService.index({units: this.units})).data
    },
    methods: {
      navigateTo(route, unit) {
        this.$router.push(route)
        this.$store.dispatch('setUnit', unit)
        console.log(this.$store.state.unit)
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
