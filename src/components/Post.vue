<template>
    <div class="post">
      <div class="post-header">
        <img :src="post.image" class="user-pic" alt="User" />
        <div class="post-date">{{ post.date }}</div>
      </div>
      <img v-if="post.image" :src="post.image" class="post-image" alt="Post image" />
      <div class="post-text">{{ post.text }}</div>
      <div class="post-footer">
        <img src="res/images/thumbsUp.png" class="thumbs-up" alt="Thumbs Up" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['post'],
  };
  </script>

<style scoped>
.footer {
  padding: 1em 0;
  border-top: 2px solid #444;
}

.footer-content {
  font-weight: bold;
  font-size: 1rem;
}
</style>
  