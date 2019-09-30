<template>
  <div id="discounts">

    <van-cell-group>
      <van-cell>
        <van-row>
          <h2>优惠专区</h2>
        </van-row>
        <van-row>
          <van-col span="7" @click="click(1)">
            <van-cell-group>
              <van-cell title="必吃"  label="权威榜单" />
              <div class="img">

              </div>
            </van-cell-group>
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="7"  @click="click(2)">
            <van-cell-group>
              <van-cell title="配送"  label="0元起" />
              <div class="img">

              </div>
            </van-cell-group>
          </van-col>
          <van-col span="1"></van-col>
          <van-col span="7" @click="click(3)">
            <van-cell-group>
              <van-cell title="限时折扣"  label="鲜花低至99" />
              <div class="img">

              </div>
            </van-cell-group>
          </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>

  </div>
</template>

<script>
  export default {
    name: "Discounts",
    methods : {
      click(val){
        console.log(val);
      }
    }
  }
</script>

<style scoped>
  #discounts{
    margin-top: 20px;
  }
  .img{
    height: 70px;
    display: block;
    background-color: aqua;
  }
</style>
