<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/toplogo.png" alt />
        </div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <!-- <el-menu-item index="/product">产品中心</el-menu-item> -->
          <el-submenu index="/product">
            <template slot="title">产品中心</template>
            <el-menu-item index="/product1">桥梁模板</el-menu-item>
            <el-menu-item index="/product2">房建模板</el-menu-item>
            <el-menu-item index="/product3">全铝模板</el-menu-item>
            <el-menu-item index="/product4">建筑机械</el-menu-item>
            <el-menu-item index="/product5">模板配件</el-menu-item>
            <el-menu-item index="/product6">钢结构</el-menu-item>
          </el-submenu>
          <el-menu-item index="/case">经典案例</el-menu-item>
          <el-menu-item index="/news">新闻资讯</el-menu-item>
          <el-menu-item index="/goin">走进富钢柏益</el-menu-item>
          <!-- <el-menu-item index="/download">其他</el-menu-item> -->
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer" v-show="isShow">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>走进富钢柏益</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>资质荣誉</span>
              <!-- <span>合作伙伴</span> -->
              <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2023039758号-2</a>
            </li>
            <li>
              <p>新闻资讯</p>
              <span>公司新闻</span>
              <span>行业动态</span>
            </li>
            <li>
              <p>产品中心</p>
              <span>介绍视频</span>
              <span>管理模式</span>
              <span>平台目标</span>
              <span>功能模块</span>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱：fgby1688@126.com</span>
              <span>电话：0534-4561688</span>
              <span>手机：15611177999</span>
              <span>地址：山东省德州市平原县王杲铺镇王杲铺工业园</span>
            </li>
          </ul>
          <img src="./assets/img/ercode.png" alt />
        </div>
        <div class="copyright">
          <span>富钢柏益版权所有</span>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: "/",
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 280px;
    padding: 10px;
    img {
      width: 100%;
      line-height: 60px;
    }
  }
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  // width: 1240px;
  height: 216px;
  overflow: hidden;
  background-color: #14679f;
  &-content {
    // width: 100%;
    width: 1240px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    .content-nav {
      display: flex;
      justify-content: space-around;
      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        // justify-content: center;
        align-items: flex-start;
        p {
          font-size: 20px;
          color: #d4edff;
          padding: 10px 0;
        }
        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
        }
      }
    }
    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }
  .copyright {
    height: 30px;
    background: #125688;
    span {
      color: #fff;
      line-height: 30px;
    }
  }
}

@media screen and (max-width: 1240px) {
    .el-main {
      width: 1240px !important;
    }
}

</style>
