<template>
  <div class="form-container">
    <h4 class="text-white">Login</h4>
    <form @submit.prevent class="login-form">
      <div class="username-container center-inputs">
        <label>Username : </label>
        <input
          placeholder="your email"
          type="text"
          v-model="login.email"
          required
        />
        <!-- Email error- msg -->
        <p class="error-login-msg-container" v-if="login.email == ''">
          <span class="error-login-msg"> ! required </span>
        </p>
      </div>
      <div class="password-container center-inputs">
        <label>password : </label>
        <input
          placeholder="password"
          name="password"
          type="password"
          v-model="login.password"
          required
          autocomplete=""
        />
        <!-- password error- msg -->
        <p class="error-login-msg-container" v-if="errorMsgs != null">
          <span class="error-login-msg d-block">{{ errorMsgs.detail }}</span>
        </p>

        <p class="error-login-msg d-block" v-if="login.password == ''">
          !required
        </p>
      </div>

      <div class="btn-container">
        <button @click="getSuperAdminToken()" class="btn btn-primary">
          Login
        </button>
      </div>
    </form>
    <p>admin@example.com</p>
    <div
      v-if="otherErrors != undefined || null"
      class="error-login-msg-container"
    >
      <span
        v-for="(err, index) in otherErrors"
        :key="index"
        class="error-login-msg"
      >
        * {{ err }}</span
      >
    </div>
    <LoadingAnimation v-show="showAnimation" />
  </div>
</template>
<script>
import LoadingAnimation from "@/components/animations/LoadingAnimations.vue";
import { BASE_URL, LOGIN_API } from "@/constants/api-url";
import axios from "axios";
import store from "@/store";
export default {
  name: "LoginComponent",
  components: {
    LoadingAnimation,
  },
  data() {
    return {
      login: {
        email: "admin@example.com",
        password: "testpass123",
      },
      errorMsgs: null,
      otherErrors: null,

      showAnimation: store.state.showAnimation,
    };
  },
  methods: {
    AnimationNow() {
      this.showAnimation = true;
    },
    // {email: "admin@example.com",password: "testpass123",}  <== this is the Super Admin
    async getSuperAdminToken() {
      this.AnimationNow();
      try {
        const response = await axios.post(
          `${BASE_URL}${LOGIN_API}`,
          this.login
        );

        console.log(response);
        const token = response.data.access_token;
        localStorage.setItem("bearer", token);
        JSON.stringify(localStorage.setItem("isLogged", true));
        this.$store.state.isLogged = true;
        this.$router.push({ name: "InvestigationsComponent" });
        if (response.status == 200) {
          this.showAnimation = false;
        }
      } catch (error) {
        if (error.message) {
          this.showAnimation = false;
        }
        // console.log(error);
        console.log(error.response.data);
        this.errorMsgs = error.response.data;
        this.otherErrors = error.response.data.non_field_errors;
        if (this.otherErrors) console.log(this.otherErrors);
      }
    },
  },
};
</script>
<style lang="scss">
.form-container {
  animation: sliding 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
}
.login-form {
  max-width: 400px;
  width: 70%;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  // background: darkslategray;
  // background-color: rgb(50 33 33 / 82%);
  background: rgb(70, 11, 11);
  background: linear-gradient(
    90deg,
    rgba(70, 11, 11, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  color: white;

  & input {
    border-radius: 5px;
    margin: 0px 10px;
  }
}
// ==============
.error-login-msg {
  background-color: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 10pt;
}
.error-login-msg-container {
  margin: 10px;
  margin: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.center-inputs {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
