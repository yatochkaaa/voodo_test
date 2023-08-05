import { getCart, removeFromCart } from "./cart.js";

export function showCartProducts() {
  const cartProductsDiv = document.getElementById("cart-products");
  cartProductsDiv.innerHTML = "";

  getCart().forEach((product) => {
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("cart-product");

    // Left Side
    const leftSide = document.createElement("div", "flex");
    leftSide.classList.add("cart-left-side");

    const imageElement = document.createElement("img");
    imageElement.classList.add("cart-image");
    imageElement.src = product.images[0]?.src || "https://dummyimage.com/74";

    const coreInfo = document.createElement("div");
    coreInfo.classList.add("cart-core-info");

    const titleElement = document.createElement("h3");
    titleElement.textContent = product.title;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${product.variants[0]?.price}`;

    const quantityElement = document.createElement("p");
    quantityElement.textContent = `Quantity: ${product.quantity}`;

    // Right Side
    const rightSide = document.createElement("div");
    rightSide.classList.add("cart-right-side");

    // Trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.addEventListener("click", () => {
      const index = getCart().findIndex((item) => item.id === product.id);

      if (index !== -1) {
        removeFromCart(index);
      }

      const productElement = trashButton.closest(".cart-product");
      productElement.remove();
    });

    const svgTrash = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgTrash.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgTrash.setAttribute("fill", "none");
    svgTrash.setAttribute("viewBox", "0 0 24 24");
    svgTrash.setAttribute("stroke-width", "1.5");
    svgTrash.setAttribute("stroke", "currentColor");
    svgTrash.classList.add("w-6", "h-6");

    const pathElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    pathElement.setAttribute("stroke-linecap", "round");
    pathElement.setAttribute("stroke-linejoin", "round");
    pathElement.setAttribute(
      "d",
      "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    );

    svgTrash.appendChild(pathElement);
    trashButton.appendChild(svgTrash);

    coreInfo.appendChild(titleElement);
    coreInfo.appendChild(priceElement);
    coreInfo.appendChild(quantityElement);

    leftSide.appendChild(imageElement);
    leftSide.appendChild(coreInfo);
    rightSide.appendChild(trashButton);

    cartProduct.appendChild(leftSide);
    cartProduct.appendChild(rightSide);
    cartProductsDiv.appendChild(cartProduct);
  });
}

showCartProducts();
