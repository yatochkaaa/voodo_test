import { getCart } from "./cart.js";

export function showCartProducts() {
  const cartProductsDiv = document.getElementById("cart-products");
  cartProductsDiv.innerHTML = "";

  getCart().forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("cart-product");

    const titleElement = document.createElement("h3");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.variants[0]?.price}`;

    const quantityElement = document.createElement("p");
    quantityElement.textContent = `Quantity: ${product.quantity}`;

    productDiv.appendChild(titleElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(quantityElement);

    cartProductsDiv.appendChild(productDiv);
  });
}

showCartProducts();
