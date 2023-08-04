export function createCards(products) {
  const cardContainer = document.getElementById("card-container");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = product.images[0]?.src || "https://dummyimage.com/320"; // Используем заглушку, если у товара нет изображения
    image.alt = "Product Image";

    const details = document.createElement("div");
    details.classList.add("card-details");

    const productName = document.createElement("h2");
    productName.classList.add("product-name");
    productName.textContent = product.title;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `$${product.variants[0]?.price || "N/A"}`; // Используем "N/A", если цена отсутствует

    const condition = document.createElement("p");
    condition.classList.add("condition");
    condition.textContent = `Condition: ${product.product_type || "N/A"}`; // Используем "N/A", если тип продукта отсутствует

    const rating = document.createElement("p");
    rating.classList.add("rating");
    rating.textContent = `Rating: ${product.rating || "N/A"}`; // Используем "N/A", если рейтинг отсутствует

    details.appendChild(productName);
    details.appendChild(price);
    details.appendChild(condition);
    details.appendChild(rating);

    card.appendChild(image);
    card.appendChild(details);

    cardContainer.appendChild(card);
  });
}
