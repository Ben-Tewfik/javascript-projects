import { fetchProducts } from "./utils/products.js";
const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".form");
const search = document.querySelector(".search-input");
const btns = document.querySelector(".btn-container");
const url = "https://dummyjson.com/products";

// fetch products
const products = await fetchProducts(url);
let filteredProducts = [...products];
// display products
function displayProducts() {
  if (filteredProducts.length > 0) {
    const allProducts = filteredProducts
      .map(product => {
        const { id, title, price, thumbnail: img, rating, brand } = product;
        return `
      <a href='product.html?id=${id}' class='link'>
          <img src=${img} alt=${title} class="img" />
          <footer class='product-footer'>
          <h2 class="product-title">${title}</h2>
          <p class='product-brand'>${brand}</p>
          <p class='product-rating'>${displayRating(rating)}</p>
          <p class="product-price">$${price}.99</p>
          </footer>
      
      </div>
      </a>
      `;
      })
      .join("");
    productsContainer.innerHTML = allProducts;
  } else {
    productsContainer.innerHTML = `<p>no such product</p>`;
  }
}

displayProducts();

// search
form.addEventListener("keyup", e => {
  e.preventDefault();
  const searchValue = e.target.value;
  filteredProducts = products.filter(product => {
    if (product.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return product.title;
    }
  });
  displayProducts();
});

// display unique categories
function displayCategories() {
  const uniqueCategories = [
    "all",
    ...new Set(products.map(product => product.category)),
  ];
  const categories = uniqueCategories
    .map(category => {
      return ` <button class="btn" data-category='${category}'>${category}</button>`;
    })
    .join("");
  btns.innerHTML = categories;
}

displayCategories();

// filter categories
btns.addEventListener("click", e => {
  const category = e.target.dataset.category;
  if (e.target.classList.contains("btn")) {
    if (category === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(
        product => product.category === category
      );
      search.value = "";
    }
  }
  displayProducts();
});

// display rating
function displayRating(number) {
  let rating = Math.round(number * 2) / 2;
  let output = [];
  for (let i = rating - 1; i >= 0; i--) {
    output.push(`<i class="fa-solid fa-star"></i>`);
    if (i == 0.5) {
      output.push(`<i class="fa-solid fa-star-half-stroke"></i>`);
    }
  }
  for (let i = 5 - rating; i >= 1; i--) {
    output.push(`<i class="fa-regular fa-star"></i>`);
  }
  return output.join("");
}
