<template>
    <Header />
    <div class="flex-container">
      <div class="flex-side left"></div>
      <div class="flex-middle">
        <Post v-for="post in posts" :key="post.id" :post="post" />
      </div>
      <div class="flex-side right"></div>
    </div>
    <footer>
      <div>Kirill Mitjurin</div>
      <div>Georg-Oliver Loorand</div>
      <div>Jüri Tsõmbaljuk</div>
    </footer>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Post from './components/Post.vue';
  
  export default {
    components: { Header, Post },
    data() {
      return {
        posts: [
          { id: 1, date: 'Oct 3, 2024', image: 'res/images/tartu.jpeg', text: 'Tartu Town Hall Square' },
          { id: 2, date: 'Oct 2, 2024', text: 'This post does not have a picture but is still very important.' },
          { id: 3, date: 'Oct 1, 2024', image: 'res/images/delta.jpeg', text: 'Delta Centre - University of Tartu' },
          { id: 4, date: 'Sept 30, 2024', text: 'Another post with only text but still very important.' },
          { id: 5, date: 'Sept 29, 2024', image: 'res/images/alma.jpg', text: 'Golden retriever named Alma' },
        ],
      };
    },
  };
  </script>
  