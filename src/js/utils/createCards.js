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

    const coreInfo = document.createElement("div");
    coreInfo.classList.add("card-core-info");

    const conditionInfo = document.createElement("div");
    conditionInfo.classList.add("card-condition-info");

    const productName = document.createElement("h2");
    productName.classList.add("product-name", "font-bold");
    productName.textContent = product.title;

    const price = document.createElement("p");
    price.classList.add("price", "font-bold");
    price.textContent = `$${product.variants[0]?.price || "N/A"}`; // Используем "N/A", если цена отсутствует

    const condition = document.createElement("p");
    condition.classList.add("card-condition");
    condition.textContent = "Condition";

    const rating = document.createElement("p");
    rating.classList.add("card-quality");
    rating.textContent = "Slightly used";

    details.appendChild(coreInfo);
    details.appendChild(conditionInfo);

    coreInfo.appendChild(productName);
    coreInfo.appendChild(price);
    conditionInfo.appendChild(condition);
    conditionInfo.appendChild(rating);

    card.appendChild(image);
    card.appendChild(details);

    cardContainer.appendChild(card);
  });
}
