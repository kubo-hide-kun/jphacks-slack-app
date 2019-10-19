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
      <template v-slot:item.today="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.today) }}</v-icon>
        </v-list-item-icon>
      </template>
      <template v-slot:item.dayOne="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.dayOne) }}</v-icon>
        </v-list-item-icon>
      </template>
      <template v-slot:item.dayTwo="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.dayTwo) }}</v-icon>
        </v-list-item-icon>
      </template>
      <template v-slot:item.dayThree="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.dayThree) }}</v-icon>
        </v-list-item-icon>
      </template>
      <template v-slot:item.dayFour="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.dayFour) }}</v-icon>
        </v-list-item-icon>
      </template>
      <template v-slot:item.dayFive="{ item }">
        <v-list-item-icon>
          <v-icon>{{ getWeatherIcon(item.dayFive) }}</v-icon>
        </v-list-item-icon>
      </template>
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
      const DAY1 = BASEDATA.add(1, 'days').format('MM月DD日');
      const DAY2 = BASEDATA.add(2, 'days').format('MM月DD日');
      const DAY3 = BASEDATA.add(3, 'days').format('MM月DD日');
      const DAY4 = BASEDATA.add(4, 'days').format('MM月DD日');
      const DAY5 = BASEDATA.add(4, 'days').format('MM月DD日');
      return {
        search: '',
        headers: [
          { text: 'ID', align: 'center', value: 'id' },
          { text: '名前', align: 'center', value: 'name' },
          { text: '部署', align: 'center', value: 'group' },
          { text: '所在', align: 'center', value: 'city' },
          { text: TODAY, align: 'center', value: 'today' },
          { text: DAY1, align: 'center', value: 'dayOne' },
          { text: DAY2, align: 'center', value: 'dayTwo' },
          { text: DAY3, align: 'center', value: 'dayThree' },
          { text: DAY4, align: 'center', value: 'dayFour' },
          { text: DAY5, align: 'center', value: 'dayFive' },
        ],
        results: [
            {
                id:"hundoshi",name:"ふんどし太郎",group:"新規事業部",postal:"825-0005",
                city:"-",today:"Rain",dayOne:"Clouds",dayTwo:"Clear",dayThree:"Rain",dayFour:"Clouds",dayFive:"Rain"
            },
            {
                id:"honda",name:"本田圭佑",group:"筋肉開発部",postal:"606-0022",
                city:"-",today:"Rain",dayOne:"Clear",dayTwo:"Clear",dayThree:"Rain",dayFour:"Clouds",dayFive:"Clear"
            }
        ],
      }
    },
    mounted() {
      this.fetchWeather(0);
      this.fetchWeather(1);
    },
    methods: {
      getWeatherIcon(whether) {
        return (
            whether == "Clear"
            ? `mdi-white-balance-sunny`
            : whether == "Clouds"
            ? `mdi-cloud`
            : `mdi-weather-pouring`
        );
      },

      fetchWeather(index) {
        const sampledata = require('../../sampledata.json');
        this.results[index].city = sampledata.city.name;
        this.results[index].today = sampledata.list[0].weather[0].main;
        this.results[index].dayOne = sampledata.list[8].weather[0].main;
        this.results[index].dayTwo = sampledata.list[16].weather[0].main;
        this.results[index].dayThree = sampledata.list[24].weather[0].main;
        this.results[index].dayFour = sampledata.list[32].weather[0].main;
        this.results[index].dayFive = sampledata.list[39].weather[0].main;
      },
    }
  }
</script>
<style>
</style>