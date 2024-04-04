const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const sidebarContainer = document.querySelector(".sidebar-container");
// sidebar toggle
toggleBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("show");
});
