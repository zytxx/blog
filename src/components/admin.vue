<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1"
             hide-trigger
             collapsible
             :collapsed-width="78"
             v-model="isCollapsed">
        <i-menu theme="dark"
                width="auto"
                ref="menu"
                :class="MenuItemClasses">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              文章管理
            </template>
            <Menu-item name="1-1"
                       to='/admin/write'>添加文章</Menu-item>
            <Menu-item name="1-2">Option 2</Menu-item>
            <Menu-item name="1-3">Option 3</Menu-item>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </template>
            <Menu-item name="2-1">Option 1</Menu-item>
            <Menu-item name="2-2">Option 2</Menu-item>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </template>
            <Menu-item name="3-1">Option 1</Menu-item>
            <Menu-item name="3-2">Option 2</Menu-item>
          </Submenu>
        </i-menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}"
                class="layout-header-bar">
          <Icon :class="rotateIcon"
                :style="{margin: '0 20px'}"
                type="md-menu"
                size="24">
          </Icon>
          <!-- <span >ADMIN</span> -->
          <span class='title'
                @click="toAdmin">ADMIN</span>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight:'500px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100vh;
  /deep/ .ivu-layout {
    height: 100%;
  }
  /deep/ .ivu-layout-sider-collapsed {
    .ivu-menu-item {
      padding: 20px 20px 20px 22px;
    }
  }
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    .title {
      font-size: 16px;
      color: #2b85e4;
      position: relative;
      top: 2px;
      cursor: pointer;
    }
  }
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<script>
export default {
  name: 'admin',
  data () {
    return {
      isCollapsed: false,
      breakpoint: {
        xs: '480px',
        sm: '768px',
        md: '992px',
        lg: '1200px',
        xl: '1600px'
      }
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    MenuItemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    toAdmin () {
      this.$refs.menu.currentActiveName = ''
      this.$router.push('/admin')
    }
  }
}
</script>
