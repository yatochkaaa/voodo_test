import { createCards } from "./createCards.js";
import { totalProducts, limit } from "../../constants/constants.js";

const firstPage = 1;
let totalPageCount = Math.ceil(totalProducts / limit);
let currentPage = firstPage;
let amountPreviusPages;
let amountNextPages;

// Функция для обновления данных на странице
async function updatePage() {
  const products = await fetchProducts(currentPage, totalPageCount);

  // Очищаем содержимое контейнера для карточек
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  createCards(products);

  // Обновляем информацию о текущей странице
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";

  switch (currentPage) {
    case firstPage:
      amountPreviusPages = 0;
      amountNextPages = 5;
      break;
    case firstPage + 1:
      amountPreviusPages = 1;
      amountNextPages = 4;
      break;
    case firstPage + 2:
      amountPreviusPages = 2;
      amountNextPages = 3;
      break;
    case totalPageCount - 2:
      amountPreviusPages = 3;
      amountNextPages = 2;
      break;
    case totalPageCount - 1:
      amountPreviusPages = 4;
      amountNextPages = 1;
      break;
    case totalPageCount:
      amountPreviusPages = 5;
      amountNextPages = 0;
      break;
    default:
      amountPreviusPages = 2;
      amountNextPages = 3;
      break;
  }

  // first button
  const firstPageButton = document.createElement("button");
  firstPageButton.textContent = firstPage;
  firstPageButton.classList.add("pagination-item");
  paginationElement.appendChild(firstPageButton);

  firstPageButton.addEventListener("click", () => {
    currentPage = firstPage;
    updatePage();
  });

  // divider
  if (currentPage > 4) {
    const dividerPageElement = document.createElement("div");
    dividerPageElement.textContent = "...";
    dividerPageElement.classList.add("pagination-item");
    paginationElement.appendChild(dividerPageElement);
  }

  // middle buttons
  for (
    let pageNumber = currentPage - amountPreviusPages;
    pageNumber < currentPage + amountNextPages;
    pageNumber++
  ) {
    if (pageNumber === firstPage || pageNumber === totalPageCount) continue;

    const pageButton = document.createElement("button");
    pageButton.textContent = pageNumber;
    pageButton.classList.add("pagination-item");
    paginationElement.appendChild(pageButton);

    pageButton.addEventListener("click", () => {
      currentPage = pageNumber;
      updatePage();
    });
  }

  // divider
  if (currentPage < 17) {
    const dividerPageElement = document.createElement("div");
    dividerPageElement.textContent = "...";
    dividerPageElement.classList.add("pagination-item");
    paginationElement.appendChild(dividerPageElement);
  }

  // last button
  const lastPageButton = document.createElement("button");
  lastPageButton.textContent = totalPageCount;
  lastPageButton.classList.add("pagination-item");
  paginationElement.appendChild(lastPageButton);

  lastPageButton.addEventListener("click", () => {
    currentPage = totalPageCount;
    updatePage();
  });
}

// Функция для получения данных из API с учетом выбранной страницы
async function fetchProducts(page) {
  try {
    const response = await fetch(
      `https://voodoo-sandbox.myshopify.com/products.json?limit=24&page=${page}`
    );
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Update initial data
updatePage();
