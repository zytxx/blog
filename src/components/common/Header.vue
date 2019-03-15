<template>
  <div class='header'>
    <div class='title'>
      <span :title="title">{{title}}</span>
    </div>
    <div class="login"
         @click="login">登陆</div>
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
}
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '山外小楼夜听雨的小站'
    }
  },
  computed: {
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
