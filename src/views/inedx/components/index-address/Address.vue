<template>
  <div>
    <mapDrag @drag="dragMap" class="mapbox"></mapDrag>
    <van-nav-bar
            title="收费地址"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            fixed
    />

    <div class="content">
      <van-address-list
              v-model="chosenAddressId"
              :list="list"
              :disabled-list="disabledList"
              disabled-text="以下地址超出配送范围"
              @add="onAdd"
              @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
  import mapDrag from "../../../../components/map/mapDrag";
  export default {
    name: "Address",
    data(){
      return {
        dragData: {
          lng: null,
          lat: null,
          address: null,
          nearestJunction: null,
          nearestRoad: null,
          nearestPOI: null
        },
        chosenAddressId: '1',
        list: [
          {
            id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          },
          {
            id: '2',
            name: '李四',
            tel: '1310000000',
            address: '浙江省杭州市拱墅区莫干山路 50 号'
          }
        ],
        disabledList: [
          {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
          }
        ]
      }
    },
    methods : {
      onClickLeft() {
        this.$router.push("/")
      },
      onClickRight() {
      },
      onAdd() {
        //


        this.$router.push("/index/address/add");
        console.log(('新增地址'));
      },
      dragMap (data) {
        this.dragData = {
          lng: data.position.lng,
          lat: data.position.lat,
          address: data.address,
          nearestJunction: data.nearestJunction,
          nearestRoad: data.nearestRoad,
          nearestPOI: data.nearestPOI
        }
      },
      onEdit(item, index) {
        console.log(item);
        console.log(('编辑地址:' + index));
      }
    },
    components: {
      mapDrag
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 50px;
  }

  .mapbox{ width: 300px; height: 150px; margin-bottom: 20px; float: left; }
</style>
