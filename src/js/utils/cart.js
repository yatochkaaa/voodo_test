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

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function updateCart(product, el) {
  if (product.quantity <= 0) {
    // Удаляем элемент из корзины, если количество равно или меньше нуля
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      removeFromCart(index);
      showCartProducts();
    }
  }
  // Обновляем поле Quantity в карточке
  el.textContent = `${product.quantity}`;
}

export function clearCart() {
  cart.length = 0;
}
