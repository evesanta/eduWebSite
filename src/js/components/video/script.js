import axios from "axios"

import hljs from "highlight.js"

import marked from "marked"

marked.setOptions({
  highlight: function(code, lang) {
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
      source: "",
      githubLink: "",
      videoData: ["/video/", "/video/", "", ""],
      chapOk: true
    }
  },
  mounted() {
    const video = document.getElementById("video");
    video.addEventListener('timeupdate', () => {
      this.nowTime = video.currentTime
    }, false);
  },
  methods: {
    say: function(index) {
      this.chapOk = true;
      this.moveScroll(this.nowTime);
      const video = document.getElementById("video");
      video.currentTime = this.tableData[index].time;
      video.play();
    },
    saisei: function() {
      this.chapOk = true;
      this.moveScroll(this.nowTime);
      video.paused ? video.play() : video.pause();
    },
    update: async function() {
      var getData = await getJson(this.$route.params.id.toString())

      this.title = getData.title
      this.subCate = getData.subCategory
      this.videoUrl = getData.url
      this.githubLink = getData.github;
      this.videoData[0] = "/video/" + getData.preVideo
      this.videoData[1] = "/video/" + getData.nextVideo
      this.videoData[2] = getData.preName
      this.videoData[3] = getData.nextName

      this.tableData = getTable(getData.chapter)
      this.source = marked(getData.source);

    },
    moveScroll: function(nowt) {
      this.tableData.forEach((data, index, array) => {
        if (this.chapOk && data.time <= nowt && nowt < data.endTime) {
          document.getElementById("tableBody").scrollTop = index * 42;
        }
      })
    }
  },

  created: async function() {
    this.loaded = "loaded"
    this.update()
  },
  filters: {
    toTime: function(value) {
      if (!value) return ''
      return Math.floor(value / 60) + ":" + ('00' + (value % 60)).slice(-2);
    },
    marked: marked
  },
  watch: {
    nowTime: function(nowt) {
      if (document.getElementById("tableBody").scrollTop % 42 != 0) this.chapOk = false
      this.moveScroll(nowt);
    },
    '$route' (to, from) {
      this.update()
    }
  }
}
var getTable = function(data) {

  var table = []

  for (var index in data) {
    if (index != 0) table[table.length - 1].endTime = data[index].time;
    const shortName = (data[index].name.length > 20) ?
      data[index].name.slice(0, 17) + "..." : data[index].name;
    table.push({
      time: data[index].time,
      endTime: Infinity,
      name: shortName,
      nowPlay: false
    })
  }

  return table
}

var getJson = async function(name) {
  var getData = null
  await axios.get("json/" + name + ".json").then(x => {
    getData = x.data
  });
  return getData
}
// this.app.$options.methods.update(this.app.$options.data)