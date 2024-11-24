<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.profilePicture" class="user-pic" :alt="post.author" />
      <div class="post-date">{{ formattedDate }}</div>
    </div>
    <img v-if="post.imageUrl" :src="post.imageUrl" class="post-image" alt="Post Image" />
    <div class="post-text">{{ post.text }}</div>
    <div class="post-footer">
      <img src="res/images/thumbsUp.png" class="thumbs-up" alt="Thumbs Up" />
      <span class="like-count">{{ post.likeCount }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const postDateObj = new Date(this.post.createTime);
      const postDate = postDateObj.toLocaleDateString("en-UK", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      const postTime = postDateObj.toLocaleTimeString("en-UK", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${postDate} at ${postTime}`;
    },
  },
};
</script>

