const url = `https://dummyjson.com/products/`;
const singleProductContainer = document.querySelector(".single-product");
async function fetchSingleProduct() {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  const id = params.get("id");
  singleProductContainer.innerHTML = `<div class="loading"></div>`;
  try {
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    singleProductContainer.innerHTML = `<p class='error'>There was a problem loading the product. Please try again later.</p>`;
  }
}
async function displaySingleProduct(product) {
  const { brand, description, thumbnail: img, price, title } = product;
  singleProductContainer.innerHTML = `<img src=${img} alt=${title} class="single-product-img" />
  <div class="single-product-info">
    <h1 class="single-product-title">${title}</h1>
    <h3 class="single-product-company">${brand}</h3>
    <p class="single-product-price">${price}</p>
    <p class="single-product-desc">${description}</p>
    <button class="single-product-btn">add to cart</button>`;
}

const display = async () => {
  const data = await fetchSingleProduct();
  displaySingleProduct(data);
};

display();
