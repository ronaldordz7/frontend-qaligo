import { apiPost, apiGet } from "./api.js";

export async function login(email, password) {
  const res = await apiPost("/auth/login", { email, password });
  if (res.token) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
  }
  return res;
}

export async function register(data) {
  const res = await apiPost("/auth/register", data);
  if (res.token) {
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
  }
  return res;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export async function me() {
  return apiGet("/auth/me");
}
