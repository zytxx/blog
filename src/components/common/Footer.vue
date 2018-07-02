<template>
    <div class='footer'>
        <div class='item'>{{poem}}</div>
        <div class='brief'>
          <span>{{'联系方式：' + qq}}</span>
          <span style='cursor:pointer;'>{{tip}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .footer{
    height:80px;
    padding:0 12%;
    box-shadow: 0 -1px 1px rgba(0,0,0,.08);
    font-size: 16px;
    .item{
      margin-top: 20px;
      line-height: 1.2;
    }
    .brief{
      margin-top: 5px;
    }
  }
</style>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      qq: '854148939@qq.com',
      tip: '(点我就可以喽)',
      poem: '问世间，情为何物，直教生死相许？'
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
