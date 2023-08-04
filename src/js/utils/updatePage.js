import { fetchProducts } from "../api/fetchProducts.js";
import { createCards } from "./createCards.js";
import { firstPage, totalPageCount } from "../../constants/constants.js";

let currentPage = firstPage;
let amountPreviusPages;
let amountNextPages;

export async function updatePage() {
  const products = await fetchProducts(currentPage, totalPageCount);

  // Update cards
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  createCards(products);

  // Update pagination
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

  // First button
  const firstPageButton = document.createElement("button");
  firstPageButton.textContent = firstPage;
  firstPageButton.classList.add("pagination-item");
  checkActivePaginationItem(firstPage) &&
    firstPageButton.classList.add("bg-black", "text-sand");
  paginationElement.appendChild(firstPageButton);

  firstPageButton.addEventListener("click", () => {
    currentPage = firstPage;
    updatePage();
  });

  // Divider
  if (currentPage > 4) {
    const dividerPageElement = document.createElement("div");
    dividerPageElement.textContent = "...";
    dividerPageElement.classList.add("pagination-item");
    paginationElement.appendChild(dividerPageElement);
  }

  // Middle buttons
  for (
    let pageNumber = currentPage - amountPreviusPages;
    pageNumber < currentPage + amountNextPages;
    pageNumber++
  ) {
    if (pageNumber === firstPage || pageNumber === totalPageCount) continue;

    const pageButton = document.createElement("button");
    pageButton.textContent = pageNumber;
    pageButton.classList.add("pagination-item");
    checkActivePaginationItem(pageNumber) &&
      pageButton.classList.add("bg-black", "text-sand");
    paginationElement.appendChild(pageButton);

    pageButton.addEventListener("click", () => {
      currentPage = pageNumber;
      updatePage();
    });
  }

  // Divider
  if (currentPage < 17) {
    const dividerPageElement = document.createElement("div");
    dividerPageElement.textContent = "...";
    dividerPageElement.classList.add("pagination-item");
    paginationElement.appendChild(dividerPageElement);
  }

  // Last button
  const lastPageButton = document.createElement("button");
  lastPageButton.textContent = totalPageCount;
  lastPageButton.classList.add("pagination-item");
  checkActivePaginationItem(totalPageCount) &&
    lastPageButton.classList.add("bg-black", "text-sand");
  paginationElement.appendChild(lastPageButton);

  lastPageButton.addEventListener("click", () => {
    currentPage = totalPageCount;
    updatePage();
  });
}

export function checkActivePaginationItem(page) {
  return page === currentPage;
}

// Update initial data
updatePage();
