<template>
  <div class='header'>
    <div class='title'>
      <span :title="title">{{title}}</span>
    </div>
    <div class='motto'>
      <span v-for='(item,index) in splitMotto'
            :key='index'
            :class='handleClass(index)'>{{item}}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    min-width: 1000px;
    padding: 0 12%;
    height: 120px;
    color: #3d3d3d;
    box-shadow: 0 0 5px #888;
    .title {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        background: rgba(255, 255, 255, 0.9);
    }
    .motto {
        float: right;
        height: 58px;
        border: 1px solid red;
        span {
            display: inline-block;
            // transition: all .5s ease-in .5s;
            animation-direction: alternate;
        }
        .span0 {
            animation: dropdown0 5s linear infinite;
            @keyframes dropdown0 {
                0% {
                    transform: translate(0px, 0px);
                }
                20% {
                    transform: translate(0px, 8px);
                }
                40% {
                    transform: translate(0px, 16px);
                }
                60% {
                    transform: translate(0px, 24px);
                }
                80% {
                    transform: translate(0px, 32px);
                }
                100% {
                    transform: translate(0px, 40px);
                }
            }
        }
        .span1 {
            animation: dropdown1 5s linear infinite;
            @keyframes dropdown1 {
                0% {
                    transform: translate(0px, 8px);
                }
                20% {
                    transform: translate(0px, 16px);
                }
                40% {
                    transform: translate(0px, 24px);
                }
                60% {
                    transform: translate(0px, 32px);
                }
                80% {
                    transform: translate(0px, 40px);
                }
                100% {
                    transform: translate(0px, 0px);
                }
            }
        }
        .span2 {
            animation: dropdown2 5s linear infinite;
            @keyframes dropdown2 {
                0% {
                    transform: translate(0px, 16px);
                }
                20% {
                    transform: translate(0px, 24px);
                }
                40% {
                    transform: translate(0px, 32px);
                }
                60% {
                    transform: translate(0px, 40px);
                }
                80% {
                    transform: translate(0px, 0px);
                }
                100% {
                    transform: translate(0px, 8px);
                }
            }
        }
    }
    &::after {
        content: '';
        display: block;
        clear: both;
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
    handleClass (index) {
      let num = index % 3
      return 'span' + num
    }
  }
}
</script>
