<template>
  <div class="index">
    <div>
      <div v-for="(n, i) in playlist" :key="i" class="playlist-item">
        <div class="img">
          <img :src="n.coverImgUrl">
        </div>
        <div class="name">
          <div>
            {{n.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../js/request'
export default {
  name: "index",
  data () {
    return {
      playlist: []
    }
  },
  mounted() {
    this.getPlayList()
  },
  methods: {
    getPlayList () {
      request({
        url: '/user/playlist?uid=568294023'
      }).then((res) => {
        console.log(res.data.playlist)
        this.playlist = res.data.playlist
      })
    }
  }
}
</script>

<style scoped>
.playlist-item{
  width: 200px;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  margin: 0 15px 20px;
  overflow: hidden;
}
.playlist-item .img{
  width: 180px;
  height: 180px;
  margin-bottom: 5px;
}
.playlist-item .img img{
  width: 100%;
  height: 100%;
}
.playlist-item .name{
  width: 180px;
  text-align: center;
  font-size: 11pt;
  font-weight: bold;
  color: #eee;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>