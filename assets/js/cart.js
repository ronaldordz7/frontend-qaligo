const KEY = "qaligo_cart";

export function getCart() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

function save(cart) {
  localStorage.setItem(KEY, JSON.stringify(cart));
}

export function addItem(item) {
  const cart = getCart();
  const found = cart.find(i => i.productId === item.productId);

  if (found) found.quantity += item.quantity;
  else cart.push(item);

  save(cart);
}

export function totalPrice() {
  return getCart().reduce((a, b) => a + b.unitPrice * b.quantity, 0);
}

export function totalItems() {
  return getCart().reduce((a, b) => a + b.quantity, 0);
}

export function clearCart() {
  localStorage.removeItem(KEY);
}
