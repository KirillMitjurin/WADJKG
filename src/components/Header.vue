<template>
  <header class="header">
    <ul class="nav">
      <li><a href="#" @click.prevent="navigate('home')">Home</a></li>
      <li v-if="!isLoggedIn"><a href="#" @click.prevent="navigate('login')">Login</a></li>
      <li v-if="!isLoggedIn"><a href="#" @click.prevent="navigate('signup')">Sign Up</a></li>
      <li id="divider" v-if="isLoggedIn"><a href="addPost.html">Add Post</a></li>
    </ul>
    <div class="profile-menu" v-if="isLoggedIn">
      <a class="logo">
        <img
          src="res/images/user.png"
          width="50"
          height="50"
          alt="User picture"
          class="user-photo"
        />
      </a>
      <div class="dropdown">
        <div class="dropdown-content">
          <p>John Doe</p>
          <p>john.doe@ut.ee</p>
          <a href="#" @click.prevent="logout">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    navigate(page) {
      this.$emit("navigate", page); // Emit navigation events
    },
    logout() {
      this.$emit("logout"); // Emit logout event
    },
  },
};
</script>

<style scoped>
/* Add header styles here if necessary */
</style>
