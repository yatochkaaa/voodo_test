import { showCartProducts } from "./showCartProducts.js";

const cart = [];

export function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  showCartProducts();
  updateCartTotal();
}

export function getCart() {
  return cart;
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartTotal();
}

export function updateCart(product, el) {
  if (product.quantity <= 0) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      removeFromCart(index);
      showCartProducts();
    }
  }
  el.textContent = `${product.quantity}`;
  updateCartTotal();
}

export function calculateCartTotal() {
  let total = 0;

  for (const product of cart) {
    total += product.variants[0]?.price * product.quantity;
  }

  return total;
}

function updateCartTotal() {
  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.textContent = `$${calculateCartTotal().toFixed(2)}`;
}
