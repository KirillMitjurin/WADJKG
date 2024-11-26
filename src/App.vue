<template>
  <div>
    <Header 
      @navigate="changePage" 
      @logout="handleLogout" 
      :isLoggedIn="isLoggedIn" 
    />
    <div v-if="currentPage === 'login'">
      <Login @login="handleLogin" @navigateToSignUp="goToSignUp" />
    </div>
    <div v-else-if="currentPage === 'signup'">
      <SignUp @signUp="handleSignUp" @navigateToLogin="goToLogin" />
    </div>
    <div v-else-if="currentPage === 'home'">
      <div class="flex-container">
        <div class="flex-side left"></div>
        <div class="flex-middle">
          <Post v-for="post in posts" :key="post.Id" :post="post" />
          <button v-on:click="resetAllLikes">Reset All Likes</button>
        </div>
        <div class="flex-side right"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import SignUp from "./components/SignUp.vue";
import Post from "./components/Post.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Login, SignUp, Post, Footer },
  data() {
    return {
      isLoggedIn: false,
      currentPage: "login", // Tracks current page: 'login', 'signup', or 'home'
      users: [], // Stores all registered users
      currentUser: null,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.postslist, // Maps postslist from Vuex store
    }),
  },
  methods: {
    handleSignUp(newUser) {
      this.users.push(newUser);
      alert("Sign-Up successful! Please log in.");
      this.currentPage = "login";
    },
    handleLogin(credentials) {
      const user = this.users.find(
        (u) =>
          (u.username === credentials.usernameOrEmail ||
            u.email === credentials.usernameOrEmail) &&
          u.password === credentials.password
      );

      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user;
        this.currentPage = "home";
        alert(`Welcome, ${user.username}!`);
      } else {
        alert("Incorrect username/email or password!");
      }
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.currentUser = null;
      this.currentPage = "login";
    },
    changePage(page) {
      this.currentPage = page;
    },
    resetAllLikes() {
      this.$store.dispatch("resetAllLikes");
    },
  },
};
</script>
