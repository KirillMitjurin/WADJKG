<template>
  <div class="post">
    <div class="post-header">
      <div></div>
      <img :src="post.profilePicture" class="user-pic" :alt="post.author" />
      <div>{{post.author}}</div>
      <div class="post-date">{{ formattedDate }}</div>
    </div>
    <img v-if="post.imageUrl" :src="post.imageUrl" class="post-image" alt="Post Image" />
    <div class="post-text">{{ post.text }}</div>
    <div class="post-footer">
      <button v-on:click="addLike">👍</button>
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
  methods: {
    addLike() { 
      this.$store.dispatch("likePost", this.post.id)
    }
  },
  computed: {
    formattedDate() {
      const date = new Date(this.post.createTime);
      return date.toLocaleDateString("en-GB") + " " + date.toLocaleTimeString("en-GB");
    },
  },
};
</script>
