<template>
  <div class="item" @click="toStore">
    <img :src="itemContent.pic" alt="" />
    <div class="item-right">
      <div class="title">{{ itemContent.title }}</div>
      <div class="sales">{{ itemContent.sales }}</div>
      <div class="price">{{ itemContent.price }}</div>
      <div class="label">
        <div v-for="(item, index) in itemContent.label" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["itemContent"],
  setup() {
    const router = useRouter();
    const toStore = () => {
      router.push({path:"/store"});
    };
    return {
      toStore,
    };
  },
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    margin-right: 20px;
  }
  .item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 18px;
    }
    .label {
      display: flex;
      div {
        background-color: #ffc400;
        padding: 2px 5px;
        border-radius: 5px;
      }
      div:not(:first-child) {
        margin-left: 5px;
      }
    }
  }
}
.item:not(:first-child) {
  margin-top: 10px;
}
</style>
