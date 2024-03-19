const productsContainer = document.querySelector(".products-container");
const url = "https://dummyjson.com/products";

// fetch products

async function fetchProducts(url) {
  const response = await fetch(url);
  const { products } = await response.json();
  console.log(products);
  return products;
}
fetchProducts(url);
