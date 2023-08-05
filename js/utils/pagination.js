import { fetchProducts } from "../api/fetchProducts.js";
import { createCards } from "./createCards.js";
import { firstPage, totalPageCount } from "../constants/constants.js";

let currentPage = firstPage;

export async function updatePage() {
  const products = await fetchProducts(currentPage, totalPageCount);

  // Update cards
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  createCards(products);

  // Update pagination
  const paginationElement = document.getElementById("pagination");
  paginationElement.innerHTML = "";
  const pagesToShow = 5;

  function createPaginationButton(pageNumber) {
    const pageButton = document.createElement("button");
    pageButton.textContent = pageNumber;
    pageButton.classList.add("pagination-item");
    if (pageNumber === currentPage) {
      pageButton.classList.add("bg-black", "text-sand");
    }
    paginationElement.appendChild(pageButton);
    pageButton.addEventListener("click", () => {
      currentPage = pageNumber;
      updatePage();
    });
  }

  function createDivider() {
    const dividerPageElement = document.createElement("div");
    dividerPageElement.textContent = "...";
    dividerPageElement.classList.add("pagination-item");
    paginationElement.appendChild(dividerPageElement);
  }

  // First button
  createPaginationButton(firstPage);

  // Left divider
  if (currentPage > pagesToShow - 1) {
    createDivider();
  }

  // Middle buttons
  const startPage = Math.max(currentPage - 2, firstPage + 1);
  const endPage = Math.min(currentPage + 2, totalPageCount - 1);
  for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
    createPaginationButton(pageNumber);
  }

  // Right divider
  if (currentPage < totalPageCount - (pagesToShow - 2)) {
    createDivider();
  }

  // Last button
  createPaginationButton(totalPageCount);
}

export function checkActivePaginationItem(page) {
  return page === currentPage;
}

// Update initial data
updatePage();
