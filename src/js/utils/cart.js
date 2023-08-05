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
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart.length = 0;
}
