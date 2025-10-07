async function login(event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  // verificar se os campos foram preenchidos
  if (!email || !password) {
    alert("Por favor insira suas credenciais");
    return;
  }

  // validação básica de login, confirmando email e senha
  try {
    const response = await fetch(`${BASE_URL}?email=${email}`);
    const usuarios = await response.json();

    if (usuarios.length === 0) {
      alert("Usuário não encontrado!");
      return;
    }

    const usuario = usuarios[0];

    if (usuario.senha !== password) {
      alert("Senha incorreta!");
      return;
    }

    alert(`Bem-vindo(a), ${usuario.name}!`);

    const userData = {
      id: usuario.id,
      name: usuario.name,
      email: usuario.email,
    };

    saveUser(userData);
    window.location.href = "/home/home.html";
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao conectar com o servidor");
  }
}
