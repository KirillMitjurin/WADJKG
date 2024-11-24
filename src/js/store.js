import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: [
      {
        postId: 1,
        author: "Juri",
        createTime: "2024-11-02T22:45:23Z",
        imageUrl:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.visitestonia.com%2Fimages%2F3876926%2F1600_900_false_false_3b479f9b2dd1021abd3fcdbffc830787.jpg&f=1&nofb=1",
        text: "Tartu Town Hall Square",
        profilePicture:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1",
        likeCount: 12,
      },
      {
        postId: 2,
        author: "Georg",
        createTime: "2024-11-02T17:22:47Z",
        text: "This post does not have a picture but is still very important to share with everyone.",
        profilePicture:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1",
        likeCount: 131,
      },
    ],
  },
  getters: {
    getPostById: (state) => (id) => state.posts.find((post) => post.postId === id),
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts({ commit }) {
      // Simulate an API call with a timeout
      setTimeout(() => {
        commit("updatePosts", [
          // Replace this with actual fetched data if connected to API
          {
            postId: 1,
            author: "Juri",
            createTime: "2024-11-02T22:45:23Z",
            imageUrl:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.visitestonia.com%2Fimages%2F3876926%2F1600_900_false_false_3b479f9b2dd1021abd3fcdbffc830787.jpg&f=1&nofb=1",
            text: "Tartu Town Hall Square",
            profilePicture:
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1",
            likeCount: 12,
          },
        ]);
      }, 1000);
    },
  },
});

export default store;
