<template>
    <div><span>{{aa}}</span></div>
</template>

<style lang="scss"  scoped>
  div{
    background: lightblue;
    width: 100px;
    height: 100px;
    span{
      // font-size: 12px;
      color:red;
    }
  }
</style>

<script>
export default {
  name: 'Index',
  data () {
    return {
      aa: '我是主页'
    }
  }
}
</script>
