<template>
  <div>
    <Header 
      @navigate="changePage" 
      @logout="handleLogout" 
      :isLoggedIn="isLoggedIn"  />
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
          <Post v-for="post in posts" :key="post.postId" :post="post" />
        </div>
        <div class="flex-side right"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
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
      posts: [], // Posts data
      users: [], // Stores all registered users
      currentUser: null,
    };
  },
  created() {
    this.fetchPosts(); // Fetch posts
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("/res/data/data.json");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    handleSignUp(newUser) {
      // Add the new user to the list of users
      this.users.push(newUser);
      alert("Sign-Up successful! Please log in.");
      this.currentPage = "login"; // Redirect to Login page
    },
    handleLogin(credentials) {
      // Check if the user exists
      const user = this.users.find(
        (u) =>
          (u.username === credentials.usernameOrEmail ||
            u.email === credentials.usernameOrEmail) &&
          u.password === credentials.password
      );

      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user; // Save logged-in user details
        this.currentPage = "home"; // Redirect to Home page
        alert(`Welcome, ${user.username}!`);
      } else {
        alert("Incorrect username/email or password!");
      }
    },
    handleLogout() {
      this.isLoggedIn = false;
      this.currentUser = null;
      this.currentPage = "login"; // Redirect to Login page
    },
    changePage(page) {
      this.currentPage = page; // Handle page navigation
    },
  },
};
</script>
