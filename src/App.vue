<template>
  <Header />
  <div class="flex-container">
    <div class="flex-side left"></div>
    <div class="flex-middle">
      <Post v-for="post in posts" :key="post.postId" :post="post" />
    </div>
    <div class="flex-side right"></div>
  </div>
<Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Post from "./components/Post.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {Header, Post, Footer},
  data() {
    return {
      posts: [], // Start with an empty array to hold fetched posts
    };
  },
  created() {
    this.fetchPosts(); // Call fetchPosts when the component is created
  },
  methods: {
    async fetchPosts() {
      try { 
        const response = await fetch("/res/data/data.json"); // Fetch the JSON file
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json(); // Convert the response to JSON
        this.posts = data; // Assign the fetched data to the posts array
      } catch (error) {
        console.error("Error fetching posts:", error); // Log any errors
      }
    },
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
