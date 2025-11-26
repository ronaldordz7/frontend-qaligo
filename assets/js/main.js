import { apiGet } from "./api.js";
import { addItem, totalItems, totalPrice } from "./cart.js";
import { setupChatbot } from "./chatbot.js";
import { updateNavbar } from "./ui.js";

window.onload = async () => {
  updateNavbar();
  setupChatbot();
  loadMenu();
  updateCartSummary();
};

async function loadMenu() {
  const grid = document.getElementById("product-grid");

  const products = await apiGet("/products");

  grid.innerHTML = products
    .map(
      p => `
      <div class="product-card glass">
        <img src="${p.imageUrl}" />
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <p><b>S/ ${p.basePrice.toFixed(2)}</b></p>

        <button class="btn" onclick="add(${p.id}, '${p.name}', ${p.basePrice})">
          Agregar
        </button>

        <button class="btn" onclick="location.href='producto.html?id=${p.id}'">
          Personalizar
        </button>
      </div>
    `
    )
    .join("");
}

window.add = function(productId, name, price) {
  addItem({
    productId,
    name,
    unitPrice: price,
    quantity: 1,
    customizationJson: null
  });
  updateCartSummary();
};

function updateCartSummary() {
  document.getElementById("cart-count").textContent = totalItems() + " items";
  document.getElementById("cart-total").textContent = "S/ " + totalPrice().toFixed(2);
}
