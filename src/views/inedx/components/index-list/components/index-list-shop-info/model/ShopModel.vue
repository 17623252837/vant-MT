<template>
  <div>
    <van-row>
      <!-- top -->
      <van-row>
        <van-col span="7">
          <div class="img">
            <van-image
                    width="90"
                    height="75"
                    src="https://img.yzcdn.cn/vant/cat.jpeg">
            </van-image>
          </div>
        </van-col>

        <div class="title">
          <van-col span="17">
            <van-row>
              <van-col span="20">
                <h3 class="title_">重庆特色麻辣烫</h3>
              </van-col>
              <van-col span="4">
                <div class="title_ico">
                  <van-icon name="ellipsis" color="#C0C0C0"  @click="showPopup()"></van-icon>
                </div>
              </van-col>
            </van-row>
            <!-- -->
            <van-row>
              <div class="star">
                <van-icon name="star" color="#FFCC00">
                  4.2
                </van-icon>

                <span class="font">月售<span>666</span></span>
              </div>
            </van-row>
            <!-- -->
            <van-row>

              <span class="font two">起送￥<span>666</span></span>
              <span class="font tree">配送￥<span>2</span></span>
            </van-row>
          </van-col>
        </div>
      </van-row>

      <!-- center -->
      <van-row>
        <van-col span="7">
        </van-col>

        <van-col span="17">
          <div class="center">
            <van-icon name="shop-o" color="#969696">
                  <span class="ico-font">
                    特色小吃
                  </span>
            </van-icon>
          </div>

          <div class="bottom">
            <div>
              <div class="tag">
                <van-tag plain type="danger"><span>100减1</span></van-tag>
              </div>
              <div class="tag">
                <van-tag plain type="danger"><span>100减1</span></van-tag>
              </div>
              <div class="tag">
                <van-tag plain type="danger"><span>100减1</span></van-tag>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
    </van-row>


    <van-popup
            v-model="show"
            round
            position="bottom"
            :style="{ height: '20%' }">
    </van-popup>
  </div>
</template>

<script>


  export default {
    name: "ShopModel",
    methods : {
      showPopup() {
        this.show = true;
      }
    },
    data(){
      return{
        show: false
      }
    },
    components : {
    }
  }
</script>

<style scoped>
  .img{
    display: block;
    height: 75px;
  }

  .title{
    height: 75px;
    margin-left: 15px;
    padding-left: 15px;
  }

  .title_{
    margin: 0;
    display: block;
  }

  .title_ico{
    display:block;
    float: right;
  }

  .font{
    font-size: 14px;
    color: #969696;
    margin-left: 5px;
  }
  .two{
    margin: 0;
  }
  .center{
    display: block;
  }
  .star{
    margin-top: 10px;

  }
  .ico-font{
    margin: 0;
    font-size: 14px;
  }

  .tag{
    display: block;
    margin-right: 4px;
    float: left;
  }
</style>
