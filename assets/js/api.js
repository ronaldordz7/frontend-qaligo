const API_URL = "https://backend-qaligo.onrender.com/api";

export async function apiGet(path) {
  const res = await fetch(API_URL + path);
  return res.json();
}

export async function apiPost(path, body, auth = false) {
  const headers = { "Content-Type": "application/json" };
  if (auth) headers["Authorization"] = "Bearer " + localStorage.getItem("token");

  const res = await fetch(API_URL + path, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  });

  return res.json();
}
