import $ from 'jQuery';

import axios from "axios"

export default {
  data() {
    return {
      nowTime: 0,
      tableData2: [],
      title: '',
      videoUrl: '',
      loaded: "",
      ref: "",
      source: "",
      message: 'hello!',
      jsonData: "読み込み中"
    }
  },
  mounted() {
    const video = document.getElementById("video");
    video.addEventListener('timeupdate', () => {
      app.nowTime = video.currentTime
    }, false);
  },
  methods: {
    say: function (index) {
      const video = document.getElementById("video");
      video.currentTime = this.tableData2[index].time;
      video.play();
      //      document.getElementById("tableBody").scrollTop = 41;
    },
    saisei: function () {
      video.paused ? video.play() : video.pause();
    }
  },

  created: async function () {
    this.loaded = "loaded"
    //this.videoUrl = "asd"

    var getData = await getJson()

    this.title = getData.title

    this.videoUrl = getData.url

    var table = []
    var val = getData.chapter
    for (var index in val) {
      if (index != 0) table[table.length - 1].endTime = index;
      const shortName = (val[index].length > 20) ?
        val[index].slice(0, 17) + "..." : val[index];
      table.push({
        time: index,
        endTime: Infinity,
        name: shortName,
        nowPlay: false
      })
    }
    this.tableData2 = table

    var temp = getData.ref["1"]

    this.ref = temp.replace('nn', '\<br/\>');

    this.source = getData.source["1"].replace(/\'/g, '\"');
  },

  filters: {
    toTime: function (value) {
      if (!value) return ''
      return Math.floor(value / 60) + ":" + ('00' + (value % 60)).slice(-2);
    }
  },
  watch: {
    nowTime: function (nowTime) {
      this.tableData2.forEach((data, index, array) => {
        if (data.time <= nowTime && nowTime < data.endTime) {
          document.getElementById("tableBody").scrollTop = index * 42;
        }
      })
    },
    news: function (news) {
      console.log(news)
    }
  }
}

var getJson = async function (name) {
  var getData = null
  await axios.get("/js/json/111.json").then(x => {
    getData = x.data
  });
  return getData
}
// this.app.$options.methods.update(this.app.$options.data)
