const form = document.querySelector(".form");
const input = document.querySelector(".input");
const results = document.querySelector(".results");
form.addEventListener("submit", e => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    results.innerHTML = "<p class='error'>please enter valid search term</p>";
    return;
  }
});
