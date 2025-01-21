const apiUrl = "https://caa044d3e3ae1b759359.free.beeceptor.com/api/users/";

fetchBlogs();

const submitButton = document.getElementById("submit-btn");

const addBlog = (e) => {
  e.preventDefault();

  const imageUrl = document.getElementById("image-url").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  if (!imageUrl || !title || !description) {
    alert("All fields are required");
    return;
  }

  const newBlog = {
    imageUrl,
    title,
    description,
  };

  axios
    .post(apiUrl, newBlog)
    .then((response) => {
      console.log("Blog added successfully:", response.data);
      fetchBlogs();
    })
    .catch((error) => {
      console.log("Error adding blog:", error);
    });
};

submitButton.addEventListener("click", addBlog);

// Function to fetch blogs
function fetchBlogs() {
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Blogs fetched successfully:", response.data);
      displayBlogs(response.data);
      document.getElementById("blog-count").textContent =
        response.data.length;
    })
    .catch((error) => {
      console.error("Error fetching blogs:", error);
    });
}

// Display the blogs on the page
function displayBlogs(blogs) {
  const blogList = document.getElementById("blog-list");
  blogList.innerHTML = "";

  blogs.forEach((blog) => {
    const blogItem = document.createElement("div");
    blogItem.classList.add("blog-item");
    blogItem.innerHTML = `
      <h3>${blog.title}</h3>
      <img src="${blog.imageUrl}" alt="${blog.title}">
      <p>${blog.description}</p>
      <button class="btn" onclick="editBlog('${blog._id}')">Edit</button>
      <button class="btn" onclick="deleteBlog('${blog._id}')">Delete</button>
    `;
    blogList.appendChild(blogItem);
  });
}

function deleteBlog(id) {
  axios
    .delete(`${apiUrl}/${id}`)
    .then(() => {
      console.log("Blog deleted successfully");
      fetchBlogs();
    })
    .catch((error) => {
      console.error("Error deleting blog:", error);
    });
}

function editBlog(id) {
  axios
    .get(`${apiUrl}/${id}`)
    .then((response) => {
      const blog = response.data;
      document.getElementById("image-url").value = blog.imageUrl;
      document.getElementById("title").value = blog.title;
      document.getElementById("description").value = blog.description;

      submitButton.textContent = "Update Blog";
      submitButton.onclick = (e) => {
        e.preventDefault();
        updateBlog(id);
      };
    })
    .catch((error) => {
      console.error("Error fetching blog for editing:", error);
    });
}

function updateBlog(id) {
  const imageUrl = document.getElementById("image-url").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const updatedBlog = { imageUrl, title, description };

  axios
    .put(`${apiUrl}/${id}`, updatedBlog)
    .then(() => {
      console.log("Blog updated successfully");
      submitButton.textContent = "POST BLOG";
      submitButton.onclick = addBlog;
      document.getElementById("blog-form").reset();
      fetchBlogs();
    })
    .catch((error) => {
      console.error("Error updating blog:", error);
    });
}
