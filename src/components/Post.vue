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
  