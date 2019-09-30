<template>
  <div id="code">
    <!-- 导航 -->
    <NavBar></NavBar>

    <!-- -->
    <div class="f">
      <van-row>
      <span class="font">
          输入验证码
      </span>
      </van-row>
      <span class="font_">
        验证码已发送至  {{this.$route.query.phone}}
      </span>
    </div>

    <!-- -->
    <div class="code_">
      <van-password-input
              :value="value"
              :mask="false"
              :focused="showKeyboard"
              @focus="showKeyboard = true"
      />

      <!-- 数字键盘 -->
      <van-number-keyboard
              :show="showKeyboard"
              theme="custom"
              extra-key="."
              close-button-text="完成"
              @blur="showKeyboard = false"
              @input="onInput"
              @delete="onDelete"
      />

    </div>

  </div>
</template>

<script>
  import NavBar from "../login-navBar/NavBar";
    import {getCode, putCode} from '../../../../api/login/login'
  export default {
    name: "Code",
    components :{
      NavBar
    },
    data(){
      return{
        value: '',
        showKeyboard: false
      }
    },
    created(){
      this.getCode();
    },
    methods : {

      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        this.inputCode(this.value)
       },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
        this.inputCode(this.value)
      },
      inputCode(val){
        if(val.length === 6){
          //api
          this.putCode();
        }
      },
      //获取验证码
      getCode(){
       getCode(this.getPhone())
      },
      putCode(code){
        putCode(this.getPhone(),this.value).then(res => {
          console.log(res.status);
          if(res.status === 200){//成功
            //
            //登录成功
            this.$store.dispatch("updated",true);
            this.$router.push("/order")
          }
          else {//验证码错误处理
            this.$notify({ type: 'danger', message: '验证码错误或已经过期' });
          }
        }).catch(e =>{
          console.log(e);
        })
      },
      getPhone(){
        return this.$route.query.phone;
      },
     /* getBaseUrl(){
        return 'http://192.168.43.244:9090'
      }*/
    }
  }
</script>

<style scoped>
  #code{
    display: block;
    width: 95%;
  }

  .font{
    display: block;
    font-size: 30px;
    float: left;
    margin-left: 25px;
  }

  .f{
    margin-top: 60px;
  }
  .font_{
    margin-top: 13px;
    font-size: 18px;
    float: left;
    margin-left: 25px;
  }

  .code_{

  }
</style>
