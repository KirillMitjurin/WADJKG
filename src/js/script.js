document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.querySelector(".flex-middle"); // posts will be rendered in this container
    const userPhoto = document.querySelector(".user-photo");
    const dropdown = document.querySelector(".dropdown");

    // event listener to toggle dropdown menu visibility
    userPhoto.addEventListener("click", () => {
        dropdown.style.display = dropdown.style.display === "none" || dropdown.style.display === "" ? "block" : "none";
    });

    // Close the dropdown if the user clicks outside of it
    // hide dropdown if clicked outside
    window.addEventListener("click", (event) => {
        if (!userPhoto.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
  
    // generates HTML for one post
    function createPostHTML(post) {
      const postDateObj = new Date(post.createTime);

      const postDate = postDateObj.toLocaleDateString("en-UK", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });

      const postTime = postDateObj.toLocaleTimeString("en-UK", {
        hour: "2-digit",
        minute: "2-digit"
      })

      const postDateFormatted = `${postDate} at ${postTime}`;
  
      // check post for image link, include image tag if applicable, otherwise empty
      const postImage = post.imageUrl
        ? `<img src="${post.imageUrl}" class="post-image" alt="Post Image" />`
        : "";
  
      // returns html of the post, including profile pic, date, text, image if applicable
      return `
        <div class="post">
          <div class="post-header">
            <img src="${post.profilePicture}" class="user-pic" alt="${post.author}" />
            <div class="post-date">${postDateFormatted}</div>
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
    
    // to render posts
    function renderPosts(posts) {
      postsContainer.innerHTML = posts.map(createPostHTML).join("");
    }

    // handling form validation
    function validateForm() {
      // Get email value
      const email = document.getElementById('email').value;

      // Store email in session storage
      sessionStorage.setItem('userEmail', email);
      
      // Optionally store user name or other details
      // sessionStorage.setItem('userName', 'User Name'); // Set a name if needed

      return true; // navigate to index.html
  }

  // to log 3out
  function logout() {
      sessionStorage.removeItem('userEmail'); // Clear email on logout
      // You can also redirect to login page after logout if needed
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

    // fetching data from local json file in res/data
    fetch("res/data/data.json")
      .then(response => response.json()) // converting response to json
      .then(data => {
        renderPosts(data); // render posts using fetched local data
      })
      .catch(error => console.error("Error fetching from local JSON file:", error));
  });
  