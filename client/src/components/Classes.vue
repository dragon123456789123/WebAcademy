<template>
    <v-layout>
        <v-flex>
            <panel title="MyShops">
                <div v-if="classes==null">
                    <v-flex>
                        <div>No Shops Liked</div>
                    </v-flex>
                </div>
                <div v-else>
                    <div v-for="classe in classes" :key="classe.name">
                        <v-flex xs4 id="shop">
                            <div class="row" id="shops">
                                <div class="col-md-4 col-centered">
                                    <div class="thumbnail">
                                        <img :src="classe.name" alt="..." class="img-responsive">
                                        <div class="caption">
                                            <h3>{{ classe.name }}</h3>
                                            <div class="clearfix">
                                                <!--<div class="price pull-left">City: {{ shop.city }}</div>-->
                                                <!--<div class="price pull-left">Distance: {{ shop.distance }} Km</div>-->
                                                <v-btn class="btn btn-danger pull-right" >Remove</v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-flex>
                    </div>
                </div>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
  import Panel from '@/components/Panel'

  export default {
    components: {
      Panel
    },
    data() {
      return {
        classes: [
          {
            name: 'Calculus',
            description: 'Introduction to calculus with exercises and lessons'
          },
          {
            name: 'Computer Science',
            description: 'Introduction to calculus with exercises and lessons'
          },
          {
            name: 'Physics',
            description: 'Introduction to calculus with exercises and lessons'
          },
          {
            name: 'Chemistry',
            description: 'Introduction to calculus with exercises and lessons'
          }
        ],
        key: null
      }
    }
  }
</script>

<style scoped>
    #shop{
        float: left;
        margin: 10px;
    }
</style>
