const toggleBtn = document.querySelector(".toggle-btn");
const postsContainer = document.querySelector(".posts-container");
const url = "https://dummyjson.com/posts";
toggleBtn.addEventListener("click", e => {
  document.documentElement.classList.toggle("dark-theme");
  const moon = e.currentTarget.firstElementChild;
  const sun = e.currentTarget.lastElementChild;
  if (!moon.classList.contains("moon")) {
    moon.classList.toggle("moon");
    sun.classList.toggle("sun");
  } else {
    moon.classList.toggle("moon");
    sun.classList.toggle("sun");
  }
});

async function fetchPosts() {
  postsContainer.innerHTML = `<div class='loading'></div>`;
  try {
    const response = await fetch(url);
    const { posts: data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function displayPosts(posts) {
  const latestPosts = posts
    .map(post => {
      const { body: desc, title } = post;
      return `<article class="single-post">
    <h1 class="title">${title}</h1>
    <p class="description">${desc}</p>
  </article>`;
    })
    .join("");
  postsContainer.innerHTML = latestPosts;
}

async function display() {
  const data = await fetchPosts();
  displayPosts(data);
}
display();
