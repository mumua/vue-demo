<template>
  <div>
    <div class="layout">
        <Layout>
            <Header>
                 <Menu mode="horizontal" theme="dark" active-name="1" @on-select="signout">
                    <div class="layout-logo">
                      <img src="../assets/image/logo-mediu.png" alt="logo">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>

                            <router-link to="/" tag="span">首页</router-link>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            <router-link to="Statistics" tag="span">市力统计</router-link>
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            基本情况
                        </MenuItem>
                        <MenuItem name="4" v-if="isLogin=== true">
                            <Icon type="ios-paper"></Icon>
                            <router-link to="getlist1" tag="span">用户管理</router-link>
                        </MenuItem>
                        <MenuItem name="nologin" v-if="isLogin === false">
                            <Icon type="ios-paper"></Icon>
                            <router-link to="/login" tag="span">登陆</router-link>
                            <router-link to="/register" tag="span">注册</router-link>
                        </MenuItem>
                        <Submenu name="5" v-if="isLogin=== true">
                          <template slot="title">
                              <Icon type="ios-stats" />
                              {{user.name}}
                          </template>
                          <MenuGroup title="个人信息操作">
                              <MenuItem name="5-1" >退出</MenuItem>
                          </MenuGroup>
                          <!-- <MenuGroup title="个人信息操作">
                              <MenuItem name="5-4">个人信息</MenuItem>
                              <MenuItem name="5-5">修改密码</MenuItem>
                          </MenuGroup> -->
                        </Submenu>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
    <router-view class="content-hig"></router-view>
    </div>
</template>
<style lang="less" scoped>
.layout {
  background: #f5f7f9;
  position: relative;
}
.layout-logo {
  width: 100px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 2px;
}
.layout-nav {
  width: 580px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-nav::after {
  clear: both;
  content: '.';
  //overflow: hidden;
}
.claerboth {
  clear: both;
}
.layout-footer-center {
  text-align: center;
}
.content-hig {
  min-height: 500px;
}
</style>

<script>
export default {
  name: 'HeaderTop',
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.state.user;
    },
    isLogin () {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    signout (name) {
      switch (name) {
        case '5-1':
          this.$store.state.isLogin = false;
          localStorage.removeItem('user');
          this.$router.push('/');
          break;
        case '5-2':
          break;
        case '4':
          this.$router.push('/getlist');
          break;
        default:
      }
    },
    sing () {
      alert('ok');
    }
  },
  created () {
    // localStorage.getItem('user') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('user'))));
  }
}
</script>
