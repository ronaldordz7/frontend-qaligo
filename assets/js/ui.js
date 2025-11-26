export function updateNavbar() {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const loginBtn = document.getElementById("nav-login");
  const accountBtn = document.getElementById("nav-account");

  if (user) {
    loginBtn.style.display = "none";
    accountBtn.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    accountBtn.style.display = "none";
  }
}
