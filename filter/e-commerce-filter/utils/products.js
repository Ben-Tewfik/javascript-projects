const productsContainer = document.querySelector(".products-container");

export async function fetchProducts(url) {
  productsContainer.innerHTML = `<div class="loading">loading</div>`;
  try {
    const response = await fetch(url);
    const { products } = await response.json();
    return products;
  } catch (error) {
    return `<p>oop no products</p>`;
  }
}
