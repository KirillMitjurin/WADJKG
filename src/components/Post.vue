<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.profilePicture" class="user-pic" :alt="post.author" />
      <div class="post-info">
        <div class="post-author">{{ post.author }}</div>
        <div class="post-date">{{ formattedDate }}</div>
      </div>
    </div>
    <img v-if="post.imageUrl" :src="post.imageUrl" class="post-image" alt="Post Image" />
    <div class="post-text">{{ post.text }}</div>
    <div class="post-footer">
      <button class="like-button" @click="toggleLike">
        {{ liked ? "👎 Unlike" : "👍 Like" }}
      </button>
      <span class="like-count">{{ likeCount }} likes</span>
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
  data() {
    return {
      likeCount: this.post.likeCount, // Initialize with the post's like count
      liked: false, // Tracks whether the user has liked this post
    };
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
  methods: {
    toggleLike() {
      if (this.liked) {
        // Unlike the post
        this.likeCount--;
      } else {
        // Like the post
        this.likeCount++;
      }
      this.liked = !this.liked; // Toggle the liked state
    },
  },
};
</script>