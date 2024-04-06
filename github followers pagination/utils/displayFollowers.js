const displayFollowers = (followers, container) => {
  const newFollowers = followers
    .map(follower => {
      const { avatar_url: image, html_url: url, login: name } = follower;
      return `<div class="card">
    <img src="${image}" alt="${name}" class="card-img" />
    <h4>${name}</h4>
    <a href="${url}" class="link" target="_blank">view profile</a>
  </div>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};
export default displayFollowers;
