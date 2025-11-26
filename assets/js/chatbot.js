import { apiPost } from "./api.js";

export function setupChatbot() {
  const btn = document.getElementById("chatbot-button");
  const panel = document.getElementById("chatbot-panel");
  const close = document.getElementById("close-chat");
  const send = document.getElementById("send-chat");
  const input = document.getElementById("chat-text");
  const messages = document.getElementById("chat-messages");

  btn.onclick = () => (panel.style.display = "flex");
  close.onclick = () => (panel.style.display = "none");

  send.onclick = async () => {
    const text = input.value.trim();
    if (!text) return;

    addMsg(text, "user");
    input.value = "";

    const res = await apiPost("/chat", { message: text });
    addMsg(res.reply, "bot");
  };

  function addMsg(txt, type) {
    const div = document.createElement("div");
    div.className = type === "user" ? "msg-user" : "msg-bot";
    div.textContent = txt;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }
}
