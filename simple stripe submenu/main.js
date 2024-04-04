import sublinks from "./utils/data.js";
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebarContainer = document.querySelector(".sidebar-container");
const linksContainer = document.querySelector(".menu-container");
// sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("show");
});
// display links in sidebar
linksContainer.innerHTML = sublinks
  .map(subLink => {
    const { page, links } = subLink;
    return `<article>
  <h4 class="title">${page}</h4>
  <div class="links-container">
    ${links
      .map(({ icon, url, label }) => {
        return `<a href="${url}"><i class="${icon}"></i>${label}</a>`;
      })
      .join("")}
  </div>
</article>`;
  })
  .join("");
