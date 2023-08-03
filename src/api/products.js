async function fetchProducts() {
  const url = "https://voodoo-sandbox.myshopify.com/products.json?limit=24";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ошибка при выполнении GET-запроса");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Ошибка при выполнении GET-запроса:", error);
  }
}

fetchProducts();
