<template>
  <div>
    <van-panel title="标题" desc="描述信息" status="已完成">
      <div slot="header">
          <van-row>
            <van-cell-group>
              <van-cell>
                <van-col span="5">
                  <!-- img -->
                  <van-image
                          width="45"
                          height="37"
                          src="https://img.yzcdn.cn/vant/cat.jpeg">
                  </van-image>
                </van-col>
                <van-col span="19">
                  <!-- 店家名  带跳转-->
                    <van-row>
                      <span class="font">重庆特殊色麻辣烫 <span class="ico">></span>
                       <span class="stats">
                        已完成
                      </span>
                      </span>
                    </van-row>
                  <!-- 标签 -->
                    <van-row>
                      <span class="tag"> <van-tag type="danger" >100减1</van-tag></span>
                      <span class="tag"> <van-tag type="danger" >100减1</van-tag></span>
                      <span class="tag"> <van-tag type="danger" >100减1</van-tag></span>
                    </van-row>
                </van-col>
              </van-cell>
            </van-cell-group>
          </van-row>
      </div>
      <div>内容</div>
      <div slot="footer">

      </div>
    </van-panel>
  </div>
</template>

<script>
  export default {
    name: "OrderModel"
  }
</script>

<style scoped>
  .font{
    display: block;
    font-weight :bold
  }

  .ico{
    font-size: 16px;
    line-height: 16px;
  }

  .stats{
    display: block;
    float: right;
    color: #646464;
    font-weight: lighter;
  }

  .tag{
    display: block;
    height: 16px;
    line-height: 16px;
    margin-right: 2px;
    float: left;
  }

  .a{
    float: right;
  }
</style>
