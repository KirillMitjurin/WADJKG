fetch('https://api.jsonbin.io/v3/b/6726882ce41b4d34e44d3941')
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    const posts = data.record;
    const middleContainer = document.querySelector('.flex-middle');
    middleContainer.innerHTML = '';

    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      const postHeader = `
        <div class="post-header">
          <img src="${post.profilePicture}" class="user-pic" alt="${post.author}" />
          <div class="post-date">${new Date(post.createTime).toLocaleDateString()}</div>
        </div>
      `;
      const postImage = post.imageUrl 
      ? `<img src="${post.imageUrl}" class="post-image" style="display: block; opacity: 1; visibility: visible;" alt="Post Image" />`
      : '';
    
      const postText = `<div class="post-text">${post.text || 'No content available'}</div>`;

      const postFooter = `
        <div class="post-footer">
          <img src="res/images/thumbsUp.png" class="thumbs-up" alt="Thumbs Up" />
          <span class="like-count">${post.likeCount} Likes</span>
        </div>
      `;

      postElement.innerHTML = postHeader + postImage + postText + postFooter;

      middleContainer.appendChild(postElement);
    });
})
.catch(error => {
    console.error("There was a problem with the fetch operation:", error);
});
