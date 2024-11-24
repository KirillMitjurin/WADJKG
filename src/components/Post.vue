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
    <button
      class="like-button"
      :class="{ liked: liked }"
      @click="toggleLike"
    >
      {{ liked ? "👍" : "👍" }}
    </button>
    <span
      class="like-count"
      :class="{ liked: liked }"
    >
      {{ likeCount }} likes
    </span>
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
      liked: false,
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
        this.likeCount--;
      } else {
        this.likeCount++;
      }
      this.liked = !this.liked;
    },
  },
  watch: {
    post: {
      deep: true,
      handler(newPost) {
        this.likeCount = newPost.likeCount;
      },
    },
  },

};
</script>