<template>
  <div class="food-list" v-if="index === 0">
    <van-tree-select
      v-model:main-active-index="activeIndex"
      height="88vw"
      :items="items"
      @click-nav="navClick"
    >
      <template #content>
        <div v-for="(item, index) in subItem" class="item-bg">
          <FoodListItem
            :item="item"
            :handleAdd="handleAdd"
            :handleChange="handleChange"
          ></FoodListItem>
        </div>
      </template>
    </van-tree-select>
  </div>
  <div v-else>
    {{ foodData.content }}
  </div>
</template>

<script>
import FoodListItem from "./FoodListItem.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    FoodListItem,
  },
  props: ["index", "foodData"],
  setup(props) {
    let data = reactive({
      activeIndex: 0,
      items: [],
      subItem: [],
    });
    const handleAdd = (id) => {
      data.subItem.forEach((item, index) => {
        if (item.id === id) {
          item.add = false;
          item.num += 1;
        }
      });
    };
    const handleChange = (value, detail) => {
      data.subItem.forEach((item) => {
        if (itme.id === detail.num) {
          item.num = value;
        }
      });
    };
    const navClick = (i) => {
      data.activeIndex = i;
      initData();
    };
    const initData = () => {
      let newArray = [];
      props.foodData?.items?.forEach((item, index) => {
        newArray.push({
          text: item.text,
        });
        if (data.activeIndex === index) {
          data.subItem = item.children;
        }
      });
      data.items = newArray;
    };
    initData();
    return {
      ...toRefs(data),
      navClick,
      handleAdd,
      handleChange,
    };
  },
};
</script>

<style lang="less" scoped>
.food-list {
  margin-top: 20px;
  .item-bg {
    padding: 10px;
  }
}
/deep/ .van-tree-select_item--active {
  color: #ffc400;
}
/deep/ .van-sidebar-item--select::before {
  background-color: #ffc400;
}
</style>
