import axios from "axios"

import hljs from "highlight.js"

import marked from "marked"


marked.setOptions({
  highlight: function (code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  }
});

export default {
  data() {
    return {
      nowTime: 0,
      tableData: [],
      title: '',
      subCate: '',
      videoUrl: '',
      loaded: "",
      ref: "",
      source: "",
      message: 'hello!',
      jsonData: "読み込み中",
      source2: "",
      nextVideo: "/video/",
      preVideo: "/video/"
    }
  },
  mounted() {
    const video = document.getElementById("video");
    video.addEventListener('timeupdate', () => {
      this.nowTime = video.currentTime
    }, false);
  },
  methods: {
    say: function (index) {
      const video = document.getElementById("video");
      video.currentTime = this.tableData[index].time;
      video.play();
    },
    saisei: function () {
      video.paused ? video.play() : video.pause();
    },
    update: async function () {
      var getData = await getJson(this.$route.params.id.toString())

      this.title = getData.title
      this.subCate = getData.subCategory
      this.videoUrl = getData.url
      this.preVideo = "/video/" + getData.preVideo
      this.nextVideo = "/video/" + getData.nextVideo


      this.tableData = getTable(getData.chapter)

      var temp = getData.ref["1"]

      this.ref = temp.replace('nn', '\<br/\>');

      this.source = marked(getData.source["1"].replace(/\'/g, '\"'));
      //      $(function () {　
      //        $('pre code').each(function (i, block) {
      //          console.log(12)
      //          hljs.highlightBlock(block);
      //        });
      //      });

    }
  },

  created: async function () {
    this.loaded = "loaded"

    this.update()



  },
  filters: {
    toTime: function (value) {
      if (!value) return ''
      return Math.floor(value / 60) + ":" + ('00' + (value % 60)).slice(-2);
    },
    marked: marked
  },
  watch: {
    nowTime: function (nowt) {
      this.tableData.forEach((data, index, array) => {
        if (data.time <= nowt && nowt < data.endTime) {
          document.getElementById("tableBody").scrollTop = index * 42;
        }
      })
    },
    '$route' (to, from) {
      this.update()
    }
  }
}
var getTable = function (data) {

  var table = []

  for (var index in data) {
    if (index != 0) table[table.length - 1].endTime = index;
    const shortName = (data[index].length > 20) ?
      data[index].slice(0, 17) + "..." : data[index];
    table.push({
      time: index,
      endTime: Infinity,
      name: shortName,
      nowPlay: false
    })
  }

  return table
}

var getJson = async function (name) {
  var getData = null
  await axios.get("/js/json/" + name + ".json").then(x => {
    getData = x.data
  });
  return getData
}
// this.app.$options.methods.update(this.app.$options.data)
