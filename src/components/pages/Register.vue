<template>
  <div>
    <van-nav-bar title="用户注册" left-text="返回" left-arrow @click-left="goBack"/>
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        :error-message="usernameErrorMsg"
        @click-icon="username=''"
      />

      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        :error-message="passwordErrorMsg"
        @click-icon="password=''"
      />

      <div class="register-button">
        <van-button
          type="primary"
          @click="registerAction"
          text="注册"
          :loading="openLoading"
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/serviceAPIconfig.js";
import { Toast } from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      openLoading: false, //是否开启用户的Loading
      usernameErrorMsg: "", //当用户名出现错误的时候
      passwordErrorMsg: "" //当密码出现错误的时候
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    registerAction() {
      this.checkForm() && this.axiosRegisterUser();
    },
    axiosRegisterUser() {
      this.openLoading = true;
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.username,
          password: this.password
        }
      })
        .then(Response => {
          if (Response.data.code == 200) {
            Toast.success(Response.data.message);
            this.$router.push("/");
          } else {
            this.openLoading = false;
            Toast.fail("注册失败！");
          }
        })
        .catch(error => {
          Toast.fail("注册失败！");
          this.openLoading = false;
        });
    },
    checkForm() {
      let isOk = true;

      if (this.username.length < 5) {
        this.usernameErrorMsg = "用户名不能小于5位";
        isOk = false;
      } else {
        this.usernameErrorMsg = "";
      }
      if (this.password.length < 6) {
        this.passwordErrorMsg = "密码不能少于6位";
        isOk = false;
      } else {
        this.passwordErrorMsg = "";
      }
      return isOk;
    }
  }
};
</script>

<style>
.van-field__label {
  max-width: 60px;
}

.register-panel {
  width: 90%;
  border-radius: 5px;
  margin: 20px auto;
  padding-bottom: 100px;
}
.register-button {
  padding-top: 20px;
}
</style>