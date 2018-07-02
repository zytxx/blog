<template>
    <div class='main'>
      <div class="left">
        <div>{{aa}}</div>
      </div>
      <div class="right">
        <div class="time">
          <Calendar></Calendar>
        </div>
      </div>
    </div>
</template>

<style lang="scss"  scoped>
  .main{
    display: flex;
    .left{
      background: #aaa;
      flex:7;
    }
    .right{
      background: #ccc;
      flex:3;
      .time{
        padding:10px;
      }
    }
  }
</style>

<script>
import Calendar from 'vue-calendar-component'
export default {
  name: 'Index',
  data () {
    return {
      aa: '我是主页'
    }
  },
  components: {
    Calendar
  }
}
</script>
