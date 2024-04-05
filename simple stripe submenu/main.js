import sublinks from "./utils/data.js";
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebarContainer = document.querySelector(".sidebar-container");
const linksContainer = document.querySelector(".menu-container");
const submenu = document.querySelector(".submenu");
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const linkBtns = [...document.querySelectorAll(".btn-link")];
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
linkBtns.forEach(btn => {
  if (btn.classList.contains("btn-link")) {
    btn.addEventListener("mouseover", e => {
      const element = e.currentTarget;
      const position = element.getBoundingClientRect();
      const center = (position.left + position.right) / 2;
      submenu.classList.add("show-submenu");
      submenu.style.left = `${center}px`;
    });
  }
});
hero.addEventListener("mouseover", e => {
  submenu.classList.remove("show-submenu");
});
nav.addEventListener("mouseover", e => {
  if (!e.target.classList.contains("btn-link")) {
    submenu.classList.remove("show-submenu");
  }
});
