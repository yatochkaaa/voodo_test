export async function fetchProducts(page) {
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