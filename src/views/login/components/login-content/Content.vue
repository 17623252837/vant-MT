<template>
  <div id="content">
    <van-row>
      <span class="font">
          欢迎登录
      </span>
    </van-row>

    <van-row>
      <div class="phone">
        <van-cell-group>
          <van-field v-model="user.phone" placeholder="请输入手机号码" maxlength="11"  clearable @input="sendCode"></van-field>
        </van-cell-group>

        <span class="loa" v-if="!isPasLogin">
          未注册的手机号会自动注册
        </span>

        <div v-if="isPasLogin" class="pwd">
          <van-cell-group>
            <van-field v-model="this.user.password" placeholder="请输入密码" maxlength="11"  clearable></van-field>
          </van-cell-group>
        </div>
      </div>

      <div class="btn">
        <van-button round type="info" size="large" @click="sub" :disabled="isDisabled">{{btn_text}}</van-button>
      </div>

      <div class="spn">
        <span class="pwd-s" @click="onLogin" >
          {{text}}
        </span>
        <span class="pwd-s pwd-w">
          {{w_pas}}
        </span>
      </div>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "Content",
    data() {
      return {
        user: {
          phone: '',
          password: ''
        },
        isPasLogin: false,
        isDisabled: true,
        text: '密码登录',
        btn_text: '获取短信验证码',
        w_pas: ''
      }
    },
    methods: {
      onLogin() {
        if (!this.isPasLogin) {
          this.isPasLogin = !this.isPasLogin;
          this.text = '验证码登录';
          this.btn_text = '登录';
          this.w_pas = '忘记密码'
        } else {
          this.isPasLogin = !this.isPasLogin;
          this.text = '验证码登录';
          this.btn_text = '获取验证码';
          this.w_pas = ''
        }
      },
      sendCode(val) {
        var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;

        this.user.phone = val;
        if(this.user.phone !== '' && reg.test(this.user.phone)){
            this.isDisabled = false
        }else {
          if(this.isDisabled !== true){
              this.isDisabled = true
          }
        }
      },
      sub(){
        //验证码行形式
        if(!this.isPasLogin){
          //向后端发送


          //成功
          this.$router.push({
            path:'/login/code',
            query:{
              phone:this.user.phone
            }
          })
        }
        //密码登录
        else {

        }
      }
    }
  }
</script>

<style scoped>
  #content{
    display: block;
    width: 95%;
    margin: 60px auto;
  }

  .font{
    font-size: 35px;
    float: left;
    margin-left: 20px;
  }

  .phone{
    margin: 40px auto;
    width: 95%;
  }

  .pwd{
    margin-top: 20px;
  }

  .loa{
    margin-top: 5px;
    font-size: 13px;
    float: left;
    color: #969696;
    margin-left: 15px;
  }
  .pwd-s{
    font-size: 15px;
    color: #1989fa;
    float: left;
    margin-left: 20px;
  }

  .btn{
    width: 90%;
    margin: 20px auto;
  }

  .pwd-w{
    float: right;
    margin-right: 20px;
  }
</style>
