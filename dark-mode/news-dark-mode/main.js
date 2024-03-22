const toggleBtn = document.querySelector(".toggle-btn");
const postsContainer = document.querySelector(".posts-container");
const ball = document.querySelector(".ball");
const url = "https://dummyjson.com/posts";
toggleBtn.addEventListener("click", e => {
  document.documentElement.classList.toggle("dark-theme");
  ball.classList.toggle("move");
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
      const { body: desc, title, tags } = post;
      const type = tags
        .map(tag => {
          return `<span>${tag}</span>`;
        })
        .join("");
      return `<article class="single-post">
    <h1 class="title">${title}</h1>
    <div class='tags'>
    ${type}
    </div>
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
