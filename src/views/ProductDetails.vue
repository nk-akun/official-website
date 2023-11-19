<template>
  <div class="case">
    <banner img="../assets/img/bgtop.jpg" />
    <div class="case-product">
      <div class="case-product-content">
        <div class="image-list">
        <div v-for="(imgName, index) in caseIdList.imgs" :key="index">
          <img style="width:100%" v-if="imgName" :src="imgserver + imgName" alt />
          </div>
        </div>
        <!-- <img v-lazy="imgserver+caseIdList.imgs[0]" alt /> -->
        <p class="product-title">{{caseIdList.title}}</p>
        <p class="product-time">{{caseIdList.createTime}}</p>
        <p class="product-content">{{caseIdList.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
export default {
  components: {
    Banner
  },
  data() {
    return {
      pid: 0,
      caseIdList: {}
    };
  },
  created() {
    this.pid = this.$route.params.id;
    window.console.log(this.pid);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http
        .get(`Products/GetProductById/${this.pid}`)
        .then(response => {
          //console.log(response);
          this.caseIdList = response.data.result;
          window.console.log(this.caseIdList);
        })
        .catch(function(error) {
          window.console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>

.image-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-list img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 1px; /* 设置图片顶部的外边距 */
  margin-bottom: 1px; /* 设置图片底部的外边距 */
}

// .image-container {
//     width: 200px; /* 设置容器宽度 */
//     height: 200px; /* 设置容器高度 */
//     overflow: hidden; /* 隐藏超出容器的部分 */
//   }

//   .image-container img {
//     width: 100%; /* 图片宽度填充容器 */
//     height: 100%; /* 图片高度填充容器 */
//     object-fit: cover; /* 等比例缩放并裁剪图片以填充容器 */
//   }

.case {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #14679f;
  &-product {
    width: 1240px;
    margin: 0 auto;
    background-color: #fff;
    //border: 1px solid red;
    &-content {
      width: 760px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 50px 0;
      img {
        width: 100%;
        height: 430px;
      }
      .product-title {
        font-size: 25px;
        color: #e13834;
        padding: 20px 0;
      }
      .product-content {
        font-size: 17px;
        font-weight: bolder;
        padding: 20px 0;
      }
    }
  }
}
</style>