// /store/index.js
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

function loadState() {
  const savedPosts = localStorage.getItem('postslist');
  return savedPosts ? JSON.parse(savedPosts) : null;
}

function saveState(state) {
  localStorage.setItem('postslist', JSON.stringify(state.postslist));
}

const store = createStore({
  plugins: [
    createPersistedState({
      key: "vuex",
      storage: window.localStorage,
    }),
  ],
  strict: true,
  state: {
    // productList should be placed here
    postslist: loadState() || [{
      "id": 1, "author": "Juri", "createTime": "2024-11-02T22:45:23Z", "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.visitestonia.com%2Fimages%2F3876926%2F1600_900_false_false_3b479f9b2dd1021abd3fcdbffc830787.jpg&f=1&nofb=1&ipt=02577bb51a4d79952d2636343e0a4cc8cdf2f474701f6ea03c95a27651712587&ipo=images",
      "text": "Tartu Town Hall Square",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 12
    }, {
      "id": 2, "author": "Georg",
      "createTime": "2024-11-02T17:22:47Z",
      "text": "This post does not have a picture but is still very important to share with everyone.",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 131
    }, {
      "id": 3,
      "author": "Kirill",
      "createTime": "2024-11-02T17:50:14Z",
      "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.delfi.ee%2Fmedia-api-image-cropper%2Fv1%2F08774ef0-9891-11ed-8859-d32deef5f612.jpg%3Fnoup%26w%3D1200%26h%3D711&f=1&nofb=1&ipt=b6c14e3ee1f338f658c3975293971d7be95554094ab496776de25d670a1a17ff&ipo=images",
      "text": "Best place is Tartu",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 11
    }, {
      "id": 4,
      "author": "Georg",
      "createTime": "2024-11-01T22:19:50Z",
      "text": "We started second homework!!!",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 131
    },
    {
      "id": 5,
      "author": "Kirill",
      "createTime": "2024-11-01T17:50:14Z",
      "text": "We almost started our homework",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 131
    },
    {
      "id": 6,
      "author": "Juri",
      "createTime": "2024-10-01T14:41:52Z",
      "imageUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprogrammerhumor.io%2Fwp-content%2Fuploads%2F2022%2F09%2Fprogrammerhumor-io-javascript-memes-programming-memes-c858a57ee19b2e6.jpg&f=1&nofb=1&ipt=ca2ab935527a7b1909da2b5444a15babbe1b2efa19f43a776ddf09d457c40991&ipo=images",
      "text": "And another one",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 444
    },
    {
      "id": 7,
      "author": "Juri",
      "createTime": "2024-11-01T14:15:30Z",
      "imageUrl": "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/5f5c552df65706c5add019f7399912886954f2c782e894e7e2a2054d0a3bfe4a_1.jpg",
      "text": "I found this funny meme today",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 783
    },
    {
      "id": 8,
      "author": "Kirill",
      "createTime": "2024-11-01T12:33:45Z",
      "text": "Mood: ( ͡° ͜ʖ ͡°)",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 0
    },
    {
      "id": 9,
      "author": "Juri",
      "createTime": "2024-11-01T00:10:16Z",
      "imageUrl": "https://www.businessinsider.in/photo/81101004/you-can-now-rickroll-your-friends-in-hd-with-a-remastered-version-of-rick-astleys-never-gonna-give-you-up.jpg?imgsize=180479",
      "text": "Classic",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 25
    },
    {
      "id": 10,
      "author": "Georg",
      "createTime": "2024-10-31T23:59:21Z",
      "text": "Goodbye, October. Hello, November!",
      "profilePicture": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Funknown-person-icon%2Funknown-person-icon-4.jpg&f=1&nofb=1&ipt=33b28b6ff14c031c15a9917911a33404e11a8a1f4c0790482cf223e76f31af64&ipo=images",
      "likeCount": 56
    }],

  },
  getters: {

  },

  mutations: {
    addLike(state, postId) {
      const post = state.postslist.find((post) => post.id === postId);
      if (post) {
        post.likeCount += 1;
      }
    },
    resetLikes(state) {
      state.postslist.forEach((post) => {
        post.likeCount = 0;
      });
    },
    syncState(state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit("addLike", postId);
    },
    resetAllLikes({ commit }) {
      commit('resetLikes');
    },
    syncStore({ commit }, newState) {
      commit("syncState", newState);
    },
  },
});

window.addEventListener("storage", (event) => {
  if (event.key === "vuex") {
    const newState = JSON.parse(event.newValue);
    store.dispatch("syncStore", newState); // Sync state changes across tabs
  }
});

export default store;

