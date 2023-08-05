const toggleCartIcon = document.querySelectorAll(".toggle-cart");
const cartDrawer = document.getElementById("cart-drawer");

function toggleCartDrawer() {
  if (cartDrawer.style.right === "-445px") {
    cartDrawer.style.right = "0";
  } else {
    cartDrawer.style.right = "-445px";
  }
}

toggleCartIcon.forEach((icon) =>
  icon.addEventListener("click", toggleCartDrawer)
);
