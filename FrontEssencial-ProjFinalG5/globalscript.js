// link do MOCKAPI que fiz pra ter usuários.
const BASE_URL = "https://68e2c5998e14f4523dabc35a.mockapi.io/hp/usuarios";

// Salvar usuário no LocalStorage
function saveUser(userData) {
  localStorage.setItem("user", JSON.stringify(userData));
}

// Get no usuário logado
function getUser() {
  const user = localStorage.getItem("user");
  
  return user ? JSON.parse(user) : null;
}
const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

function removeUser() {
    localStorage.removeItem('user');
}

