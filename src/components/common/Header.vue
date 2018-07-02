<template>
    <div class='header'>
        <div class='title'>
            <span :title="title">{{title}}</span>
        </div>
        <div class='motto'>
          <span v-for='(item,index) in splitMotto' :key='index' :style='handleStyle(splitMotto,index)'>{{item}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .header{
        width:100%;
        min-width:1000px;
        padding:0 12%;
        height: 120px;
        color:#3d3d3d;
        box-shadow: 0 0 5px #888;
        .title{
          height:60px;
          line-height: 60px;
          font-size: 20px;
          background: rgba(255,255,255,0.9);
        }
        .motto{
          float: right;
          height: 58px;
          border: 1px solid red;
          &::after{
            content: '';
            display:block;
            clear:both;
          }
          span{
            display: inline-block;
            transition: all .5s ease-in .5s;
          }
        }
    }
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '山外小楼夜听雨的小站',
      motto: '这不是一个 bug 这只是一个未列出来的特性'
    }
  },
  computed: {
    splitMotto () {
      return this.motto.split('')
    }
  },
  methods: {
    handleStyle (arr, index) {
      let len = arr.length
      let perHeight = parseInt(60 / len)
      return {
        'transform': `translate(0px,${perHeight * index}px)`
      }
    }
  }
}
</script>
