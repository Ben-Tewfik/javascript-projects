import projects from "./global-utils/data.js";

const container = document.querySelector(".section-center");

container.innerHTML = projects
  .map(project => {
    const { title, url, image } = project;
    return `<a href="${url}" class="project" target="_blank">
    <img src="${image}" alt="${title}" class="img" />
    <footer>${title}</footer>
  </a>`;
  })
  .join("");
