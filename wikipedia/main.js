const URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";
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
  fetchResults(value);
});

const fetchResults = async searchValue => {
  results.innerHTML = `<div class='loading'></div>`;
  try {
    const response = await fetch(`${URL}${searchValue}`);
    const {
      query: { search },
    } = await response.json();
    displayResults(search);
  } catch (error) {
    results.innerHTML = "<p class='error'>There was ans error...</p>";
  }
};

const displayResults = list => {
  const searchList = list
    .map(item => {
      const { title, snippet } = item;
      return `<a href="https://en.wikipedia.org/wiki/${title}" class="link" target="_blank">
      <h4>${title}</h4>
      <p>${snippet}</p>
    </a>`;
    })
    .join("");
  results.innerHTML = `<div class='articles'>${searchList}</div>`;
};
