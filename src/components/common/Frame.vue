<template>
  <div class='all'>
    <vheader></vheader>
    <div class="container">
      <router-view></router-view>
    </div>
    <vfooter></vfooter>
    <BackTop :height="120"
             :bottom="120"
             :right="50">
      <div class="top">返回顶端</div>
    </BackTop>
  </div>
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  name: 'Frame',
  created () {
  },
  data () {
    return {

    }
  },
  components: {
    vheader: Header,
    vfooter: Footer
  }
}
</script>
<style type="text/css" lang="scss" scoped>
.all {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 1100px;
  .container {
    flex: 1;
    min-height: 500px;
    margin: 2px 15%;
    background: #eaeaea;
    border-radius: 10px;
    padding: 10px;
  }
  .top {
    padding: 10px;
    background: #888;
    color: #fff;
    text-align: center;
    border-radius: 2px;
  }
}
</style>
