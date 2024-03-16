const toggleBtn = document.querySelector(".toggle-btn");
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
