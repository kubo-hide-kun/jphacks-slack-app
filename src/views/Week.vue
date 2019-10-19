<template>
  <v-card>
      <v-card-title>
        <div class="flex-grow-1"></div>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
        ></v-text-field>
      </v-card-title>
    <div class="table">
      <v-data-table
        :headers="headers"
        :items="results"
        :search="search"
      >
      </v-data-table>
    </div>
  </v-card>
</template>

<script>
  const moment = require('moment')
  export default {
    name: 'lanking',
    data() {
      const BASEDATA = moment();
      const TODAY= BASEDATA.format('MM月DD日');
      const DAY1 = BASEDATA.add(1, 'days').format('MM月DD日')
      const DAY2 = BASEDATA.add(2, 'days').format('MM月DD日')
      const DAY3 = BASEDATA.add(3, 'days').format('MM月DD日')
      const DAY4 = BASEDATA.add(4, 'days').format('MM月DD日')
      return {
        search: '',
        headers: [
          { text: 'ID', align: 'center', value: 'id' },
          { text: '名前', align: 'center', value: 'name' },
          { text: '部署', align: 'center', value: 'group' },
          { text: '所在', align: 'center', value: 'city' },
          { text: TODAY, align: 'center', value: 'today' },
          { text: DAY1, align: 'center', value: 'Day1' },
          { text: DAY2, align: 'center', value: 'Day2' },
          { text: DAY3, align: 'center', value: 'Day3' },
          { text: DAY4, align: 'center', value: 'Day4' },
        ],
        results: [
            {
                id:"hundoshi",name:"ふんどし太郎",group:"新規事業部",city:"-",
                today:"-",Day1:"-",Day2:"-",Day3:"-",Day4:"-"
            }
        ],
      }
    },
    mounted() {
        console.log(moment().format('MM月DD日'));// eslint-disable-line
    }
  }
</script>
<style>
</style>