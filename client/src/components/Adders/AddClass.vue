<template>
  <v-layout row wrap align-center>
    <v-flex >
      <v-container>
        <v-card>
          <v-card-title>
            <span class="headline">Create Class</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Class Title*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-select
                  :items="['Math', 'Computer Science', 'Physics']"
                  label="Subject*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Class Description" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-btn @click="showUnit=true; countUnits+=1">Add Unit</v-btn>

            </v-container>
            {{countUnits}}
            <v-container fluid v-for="countUnit in countUnits" :key="countUnit">
              <add-unit v-show="showUnit" id="unit">

              </add-unit>
            </v-container>
          </v-card-text>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
  import AddUnit from '@/components/Adders/AddUnit'


  export default {
    data () {
      return {
          showUnit: false,
        countUnits:0,
      }
    },
    components : {
      AddUnit
    }
}
</script>

<style lang="scss">

  #unit{
    width: 100%;
    size: 100px;
  }

</style>
