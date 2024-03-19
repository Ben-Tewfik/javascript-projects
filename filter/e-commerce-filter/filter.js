const productsContainer = document.querySelector(".products-container");
const url = "https://dummyjson.com/products";

// fetch products
async function fetchProducts(url) {
  const response = await fetch(url);
  const { products } = await response.json();
  return products;
}
// display products
function displayProducts(products) {
  const allProducts = products
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
}

async function display() {
  const data = await fetchProducts(url);
  displayProducts(data);
}

display();
