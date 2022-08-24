<template>
  <div class="login">
    <div>
      <form @submit.prevent="submit">
        <div class="container">
          <h1>Login</h1>
            <form @submit.prevent="submit">
                <label for="username">Username</label><br>
                <input type="text" name="username" v-model="form.username" ><br>
                <label for="password">Password</label><br>
                <input type="password" name="password" v-model="form.password"><br>
                <div>
                    <a href="#">forget password?</a>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>     
        
      </form>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import { mapActions } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      const User = new FormData();
      User.append("username", this.form.username);
      User.append("password", this.form.password);
      try {
          await this.LogIn(User);
          this.$router.push("/posts");
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: white;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: white;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}

*{
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Open Sans', sans-serif;
}

body{
    height: 100vh;
    background-image: url(https://bit.ly/2FPT1J9);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.container{
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%,-50%);
    padding: 20px 25px;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 10px rgba(148, 148, 148, 0.3);
}

.container h1{
    text-align: left;
    color:white;
    margin-bottom: 30px;
    text-transform: uppercase;
    border-bottom: 4px solid white;
}
.container label{
    text-align: left;
    color: white;
}
.container form input{
    width: calc(100% - 20px);
    padding: 8px 10px;
    margin-bottom: 15px;
    border: none;
    background-color: white;
    color: black;
    font-size: 20px;
}
.container form button{
    width: 100%;
    padding: 5px 0;
    border: none;
    background-color:#0084ff;
    font-size: 18px;
    color: #c2c2c2;
}

a{
    color: white;
}
</style>