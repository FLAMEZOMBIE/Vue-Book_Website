<template>
<div class="nav">
<!-- <img src="../assets/user.png" alt=""> -->
<div class="navbar">
  <div class="dropdown">
    <img src="../assets/user.png" alt="">
    <button class="dropbtn">Account
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <a @click="logout">Logout</a>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
body{
    margin: 0;
}


img {
    width: 30px;
    padding: 7px;
}
 
/* Navbar container */
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;

}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: right;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
  text-align: right;
  float: right;
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: rgb(0, 150, 250);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>