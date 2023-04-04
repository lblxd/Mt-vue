<template>
  <div class="storeDetails">
    <Header title="店铺"></Header>
    <div class="content">
      <div class="img"></div>
      <div class="foodSort">
        <div class="name">
          {{ title }}
          <img :src="img" alt="" class="store-img" />
        </div>
        <!-- 
        <van-tabs colors="#ffc400">
          <van-tab v-for="(item, index) in storeData" :title="item.name">
            <FoodList :index="index" :foodData="item.data"></FoodList>
          </van-tab>
        </van-tabs> -->
      </div>
    </div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        icon="cart-o"
        text="购物车"
        :badge="store.state.cartList.length"
        @click="goCart"
      />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        @click="hadndleAddCart"
      />
      <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
    </van-action-bar>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FoodList from "../components/FoodList.vue";
import { reactive, toRefs, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
  components: {
    Header,
    FoodList,
  },
  setup() {
    let store = useStore();
    let router = useRouter();
    let data = reactive({
      active: 0,
      title: "鱼拿酸菜鱼",
      img: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
      storeData: [],
    });
    const goCart = () => {
      router.push({ path: "/cart" });
    };
    const goBuy = () => {
      hadndleAddCart("buy");
    };
    const hadndleAddCart = (type) => {
      const newList = [];
      data.storeData.forEach((item) => {
        item.data.items?.forEach((item) => {
          item.children.forEach((item) => {
            if (item.num > 0) {
              newList.push(item);
            }
          });
        });
      });
      if (newList.length === 0) {
        Toast("请选择商品");
        return;
      }
      store.commit("addcart", newList);
      type === "buy" ? goCart() : "";
    };
    return {
      ...toRefs(data),
      hadndleAddCart,
      store,
      goCart,
      goBuy,
    };
  },
};
</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;
  .content {
    flex: 1;
    overflow-y: auto;
    .img {
      background: url("../components/SuanCaiYu.jpg") no-repeat center/cover;
      width: 100%;
      height: 150px;
    }
    .foodSort {
      height: 500px;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      .sort {
        margin-top: 10px;
      }
      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;
        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
