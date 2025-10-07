// const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// função pra verificar se tem um usuário logado e alterar a NAV.
function checkAuthStatus() {
  const user = getUser();
  console.log(user);
  const authDropdown = document.getElementById("auth-dropdown");
  const userDropdown = document.getElementById("user-dropdown");
  const userName = document.getElementById("user-name");

  if (user) {
    authDropdown.style.display = "none";
    userDropdown.style.display = "block";
    userName.textContent = user.name;
  } else {
    authDropdown.style.display = "block";
    userDropdown.style.display = "none";
  }
}

// função para fazer o logout do usuário.
function handleLogout(event) {
  event.preventDefault();
  const user = getUser();
  const confirmMsg = user
    ? `${user.name}, deseja realmente sair?`
    : "Deseja realmente sair?";

  if (confirm(confirmMsg)) {
    localStorage.removeItem("user");
    alert("Logout realizado com sucesso!");
    checkAuthStatus();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
});
