document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.querySelector(".flex-middle");
  
    function createPostHTML(post) {
      const postDate = new Date(post.createTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
  
      const postImage = post.imageUrl
        ? `<img src="${post.imageUrl}" class="post-image" alt="Post Image" />`
        : "";
  
      return `
        <div class="post">
          <div class="post-header">
            <img src="${post.profilePicture}" class="user-pic" alt="${post.author}" />
            <div class="post-date">${postDate}</div>
          </div>
          ${postImage}
          <div class="post-text">${post.text}</div>
          <div class="post-footer">
            <img src="res/images/thumbsUp.png" class="thumbs-up" alt="Thumbs Up" />
            <span class="like-count">${post.likeCount} likes</span>
          </div>
        </div>
      `;
    }
  
    function renderPosts(posts) {
      postsContainer.innerHTML = posts.map(createPostHTML).join("");
    }
  
    // TASK 4
    /*
    fetch('https://api.jsonbin.io/v3/b/6726882ce41b4d34e44d3941')
      .then(response => response.json())
      .then(data => {
        renderPosts(data.record); // Use "data.record" if JSON structure includes a "record" key
      })
      .catch(error => console.error("Error fetching from online source:", error));
    */

    fetch("res/data/data.json")
      .then(response => response.json())
      .then(data => {
        renderPosts(data);
      })
      .catch(error => console.error("Error fetching from local JSON file:", error));
  });
  