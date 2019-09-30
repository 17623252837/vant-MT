<template>
  <div id="shop">
    <!-- bar-->
    <van-sticky :offset-top="50">
      <van-cell-group>
        <van-cell>
          <van-row>
            <h2>附近商家</h2>
          </van-row>
        </van-cell>
      </van-cell-group>
    </van-sticky>

    <van-cell-group>
      <van-cell>
        <!-- 分类-->
        <van-row>
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item v-model="value1" :options="option1"></van-dropdown-item>
            <van-dropdown-item v-model="value2" :options="option2"></van-dropdown-item>
          </van-dropdown-menu>
        </van-row>
      </van-cell>
    </van-cell-group>


<!--    <van-cell-group>
      <van-cell>
        <van-sticky :offset-top="100">
          <div class="bag">
            <div class="classify">
              <van-grid :gutter="4" :clickable="true">
                <van-grid-item
                        text="减配送费">
                </van-grid-item>
                <van-grid-item
                        text="津贴联盟">
                </van-grid-item>
                <van-grid-item
                        text="红包会员">
                </van-grid-item>
                <van-grid-item
                        text="满减优惠">
                </van-grid-item>
              </van-grid>
            </div>
          </div>

        </van-sticky>
      </van-cell>
    </van-cell-group>-->

    <div class="list">
      <List></List>
    </div>

  </div>
</template>

<script>
  import List from "../index-list/List";

  export default {
    name: "Shopping",
    data() {
      return {
        isTop :false,
        container: null,
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 }
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ]
      }
    },
    methods: {
      onConfirm() {
        this.$refs.item.toggle();
      }
    },
    mounted() {
      this.container = this.$refs.container;
    },
    components : {
      List
    }
  }
</script>

<style scoped>
  .classify{
    margin-top: 10px;
    display: block;
    height: 40px;
  }

  .bag{
    background-color: white;
  }

  .list{
    display: block;
    margin: 0;
  }
</style>
