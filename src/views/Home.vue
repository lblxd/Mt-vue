<template>
  <div class="home">
    <div class="content">
      <div class="header">
        <div class="text">外卖</div>
        <div class="location">
          <van-icon name="location-o" />
          <span>地址</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="main">
        <div class="main-bg">
          <div class="search">
            <input type="text" />
            <div class="search-text">搜索</div>
          </div>
          <div class="sort">
            <div class="big-sort">
              <div v-for="(item, index) in big_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
            <div class="small-sort">
              <div v-for="(item, index) in small_sort" :key="index">
                <svg class="icon" aria-hidden="true">
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <van-tabs v-model:active="active" class="van-tabs">
          <van-tab
            v-for="(item, index) in centent_nav_list"
            :title="item.tab"
            :key="index"
          >
            <NavList :navList="item.data"></NavList>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavList from "../components/NavList.vue";
import { reactive, toRefs, ref } from "vue";
export default {
  components: {
    Footer,
    NavList,
  },
  setup() {
    let data = reactive({
      big_sort: [
        {
          name: "美食",
          icon: "icon-meishi",
        },
        {
          name: "甜点饮品",
          icon: "icon-tianpin",
        },
        {
          name: "超市便利",
          icon: "icon-chaoshigouwu",
        },
        {
          name: "生鲜果蔬",
          icon: "icon-pingguo",
        },
        {
          name: "买药",
          icon: "icon-maiyao",
        },
      ],
      small_sort: [
        {
          name: "午餐",
          icon: "icon-wucan",
        },
        {
          name: "买酒",
          icon: "icon-jiu",
        },
        {
          name: "新鲜水果",
          icon: "icon-shengxian-ganju",
        },
        {
          name: "汉堡披萨",
          icon: "icon-hanbaopisa",
        },
        {
          name: "休闲饮品",
          icon: "icon-xiuxianyinpin",
        },
        {
          name: "夜宵",
          icon: "icon-yexiao",
        },
        {
          name: "吐司",
          icon: "icon-tusi",
        },
        {
          name: "跑腿",
          icon: "icon-paotuiAPP",
        },
        {
          name: "美丽佳人",
          icon: "icon-kouhong",
        },
        {
          name: "其他",
          icon: "icon-fenlei",
        },
      ],
      centent_nav_list: [
        {
          tab: "天天神券",
          data: [
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "酸菜鱼",
              sales: "2888",
              price: "28",
              label: ["门店上新", "很下饭"],
            },
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "猪脚饭",
              sales: "2888",
              price: "45",
              label: ["酱香浓郁", "口齿回香"],
            },
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "螺蛳粉",
              sales: "2888",
              price: "17",
              label: ["臭的心情舒爽"],
            },
          ],
        },
        {
          tab: "减配送费",
          data: [
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "猪脚饭",
              sales: "2888",
              price: "45",
              label: ["酱香浓郁，口齿回香"],
            },
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "螺蛳粉",
              sales: "2888",
              price: "17",
              label: ["臭的心情舒爽"],
            },
          ],
        },
        {
          tab: "点评高分",
          data: [
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "螺蛳粉",
              sales: "2888",
              price: "17",
              label: ["臭的心情舒爽"],
            },
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "酸菜鱼",
              sales: "2888",
              price: "28",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
        {
          tab: "会员满减",
          data: [
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "猪脚饭",
              sales: "2888",
              price: "45",
              label: ["酱香浓郁，口齿回香"],
            },
            {
              pic: "https://img.zcool.cn/community/011aa16076f07011013fb1171c6343.jpg@1280w_1l_2o_100sh.jpg",
              title: "酸菜鱼",
              sales: "2888",
              price: "28",
              label: ["门店上新", "很下饭"],
            },
          ],
        },
      ],
    });
    const active = ref(0);
    return {
      ...toRefs(data),
      active,
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;
  .content {
    flex: 1;
    overflow-y: auto;
    .header {
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 40px 20px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        span {
          margin: 0 0.5px;
        }
        font-size: 14px;
      }
    }
    .main {
      margin-top: -30px;
      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;
        .search {
          position: relative;
          input {
            width: 100%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }
          .search-text {
            position: absolute;
            right: -6px;
            top: 1px;
            background-color: #ffc400;
            border-radius: 16px;
            width: 50px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            text-align: center;
          }
        }
        .sort {
          padding: 20px 0;
          .big-sort {
            display: flex;
            div {
              flex: 1;
              display: flex;
              justify-content: center;
              flex-flow: column;
              align-items: center;
              .icon {
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
              }
            }
          }
          .small-sort {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
            div {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column;
              width: 20%;
            }
            .icon {
              width: 30px;
              height: 30px;
              margin: 10px;
            }
          }
        }
      }
    }
  }
}

/deep/ .van-tabs__wrap {
  border-radius: 50px;
}
</style>
