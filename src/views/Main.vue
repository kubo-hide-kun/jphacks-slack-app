<template>
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          <div class="flex-grow-1"></div>
          <v-text-field v-model="search" label="Search" single-line></v-text-field>
        </v-card-title>
        <div class="table">
          <v-data-table :headers="headers" :items="results" :search="search">
            <template v-slot:item.today="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.today)">{{ getWeatherIcon(item.today) }}</v-icon>
              </v-list-item-icon>
            </template>
            <template v-slot:item.dayOne="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.dayOne)">{{ getWeatherIcon(item.dayOne) }}</v-icon>
              </v-list-item-icon>
            </template>
            <template v-slot:item.dayTwo="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.dayTwo)">{{ getWeatherIcon(item.dayTwo) }}</v-icon>
              </v-list-item-icon>
            </template>
            <template v-slot:item.dayThree="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.dayThree)">{{ getWeatherIcon(item.dayThree) }}</v-icon>
              </v-list-item-icon>
            </template>
            <template v-slot:item.dayFour="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.dayFour)">{{ getWeatherIcon(item.dayFour) }}</v-icon>
              </v-list-item-icon>
            </template>
            <template v-slot:item.dayFive="{ item }">
              <v-list-item-icon>
                <v-icon :color="getWeatherColor(item.dayFive)">{{ getWeatherIcon(item.dayFive) }}</v-icon>
              </v-list-item-icon>
            </template>
          </v-data-table>
        </div>
      </v-card>
      <DatePicker v-if="isRestForm" />
      <div class="p">
        <v-card id="create">
          <v-speed-dial
            v-model="fab"
            :top="top"
            :bottom="bottom"
            :right="right"
            :left="left"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition"
          >
            <template v-slot:activator>
              <v-btn v-model="fab" color="blue darken-2" dark fab v-on:click="isRestForm = false">
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="indigo" v-on:click="isRestForm = true">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-card>
      </div>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import DatePicker from "../components/DatePicker";
const moment = require("moment");

export default {
  transition: "slide-y-reverse-transition",
  direction: "top",
  fab: false,

  data() {
    const BASEDATA = moment();
    const TODAY = BASEDATA.format("MM月DD日");
    const DAY1 = BASEDATA.add(1, "days").format("MM月DD日");
    const DAY2 = BASEDATA.add(2, "days").format("MM月DD日");
    const DAY3 = BASEDATA.add(3, "days").format("MM月DD日");
    const DAY4 = BASEDATA.add(4, "days").format("MM月DD日");
    const DAY5 = BASEDATA.add(4, "days").format("MM月DD日");
    return {
      search: "",
      headers: [
        { text: "ID", align: "center", value: "id" },
        { text: "名前", align: "center", value: "name" },
        { text: "部署", align: "center", value: "group" },
        { text: "所在", align: "center", value: "city" },
        { text: TODAY, align: "center", value: "today" },
        { text: DAY1, align: "center", value: "dayOne" },
        { text: DAY2, align: "center", value: "dayTwo" },
        { text: DAY3, align: "center", value: "dayThree" },
        { text: DAY4, align: "center", value: "dayFour" },
        { text: DAY5, align: "center", value: "dayFive" }
      ],
      results: [
        {
          id: "2019_ng",
          name: "名古屋 太郎",
          group: "新規事業部",
          postal: "466-0003",
          city: "-",
          today: "-",
          dayOne: "-",
          dayTwo: "-",
          dayThree: "-",
          dayFour: "-",
          dayFive: "-",
          datas: "-"
        },
        {
          id: "2019_kb",
          name: "兵庫 小次郎",
          group: "セキュリティ対策部",
          postal: "651-0082",
          city: "-",
          today: "-",
          dayOne: "-",
          dayTwo: "-",
          dayThree: "-",
          dayFour: "-",
          dayFive: "-",
          datas: "-"
        },
        {
          id: "2019_fk",
          name: "ケースケ ホンダ",
          group: "筋肉開発部",
          postal: "812-0013",
          city: "-",
          today: "-",
          dayOne: "-",
          dayTwo: "-",
          dayThree: "-",
          dayFour: "-",
          dayFive: "-",
          datas: "-"
        },
        {
          id: "2019_sd",
          name: "東北太郎",
          group: "サーバー保守/運用",
          postal: "980-0845",
          city: "-",
          today: "-",
          dayOne: "-",
          dayTwo: "-",
          dayThree: "-",
          dayFour: "-",
          dayFive: "-",
          datas: "-"
        },
        {
          id: "2019_ok",
          name: "シーサー",
          group: "人事部",
          postal: "903-0129",
          city: "-",
          today: "-",
          dayOne: "-",
          dayTwo: "-",
          dayThree: "-",
          dayFour: "-",
          dayFive: "-",
          datas: "-"
        }
      ],
      isRestForm: false
    };
  },
  mounted() {
    for(let i in this.results){
      // console.log("http://api.openweathermap.org/data/2.5/forecast?zip="+this.results[i].postal+",jp&APPID=b3ac674f751354ffd6fee57b96afe842")// eslint-disable-line
      fetch("http://api.openweathermap.org/data/2.5/forecast?zip="+this.results[i].postal+",jp&APPID=b3ac674f751354ffd6fee57b96afe842")
        .then(r => r.json()).then(j => {this.results[i].datas = j});// eslint-disable-line
    }
    setInterval(() => {
      for(let i in this.results){
        if(this.results[i].datas === "-")continue;
        this.fetchWeather(i,this.results[i].datas);
        }
      }, 500);
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },
  components: {
    DatePicker
  },
  methods: {
    getWeatherIcon(whether) {
      return whether == "Clear"
        ? `mdi-white-balance-sunny`
        : whether == "Clouds"
        ? `mdi-cloud`
        : `mdi-weather-pouring`;
    },

    getWeatherColor(whether) {
      return whether == "Clear"
        ? "#ED0254"
        : whether == "Clouds"
        ? ""
        : "#28C9F7";
    },

    fetchWeather(index, data) {
      // let data = require("../../sampledata.json");
      this.results[index].city = data.city.name;
      this.results[index].today = data.list[0].weather[0].main;
      this.results[index].dayOne = data.list[8].weather[0].main;
      this.results[index].dayTwo = data.list[16].weather[0].main;
      this.results[index].dayThree = data.list[24].weather[0].main;
      this.results[index].dayFour = data.list[32].weather[0].main;
      this.results[index].dayFive = data.list[39].weather[0].main;
    }
  }
};
</script>
<style scoped>
#create .v-speed-dial {
  position: fixed;
}

#create .v-btn--floating {
  position: relative;
}
.p {
  position: fixed;
  right: 100px;
  bottom: 100px;
}
</style>