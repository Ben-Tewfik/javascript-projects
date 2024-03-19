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
        const { title, price, thumbnail: img, images } = product;
        return `<div class="single-product">
          <img src=${img} alt=${title} class="img" />
      <h2 class="product-title">${title}</h2>
      <p class="product-price">$${price}</p>
      </div>
      </div>`;
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
    // if (searchValue === "") {
    //   return filteredProducts;
    // }
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
