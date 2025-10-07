async function register(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  // confere se preencheu todos os campos
  if (!nome || !email || !senha) {
    alert("Preencha todas as informações");
    return;
  }

  // confere se email tem pelo menos um "@"
  if (!email.includes("@")) {
    alert("Digite um email válido");
    return;
  }

  // senha tem que ter 6 caracters
  if (senha.length < 6) {
    alert("A senha deve ter no mínimo 6 caracteres");
    return;
  }

  try {
      const response = await fetch(`${BASE_URL}`);
      const usuarios = await response.json();

  let emailExiste = false;

  for (const usuario of usuarios) {
    if (usuario.email === email) {
      alert("Este email já está cadastrado!");
      emailExiste = true;
      break;
    }
  }

  if (emailExiste){
    return;
  }

    const novoUsuario = {
      name: nome,
      email: email,
      senha: senha,
    };

    const cadastroResponse = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    });

    if (cadastroResponse.status === 201) {
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "/login/login.html";
    } else {
      alert("Não foi possível criar o usuário");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Não foi possível conectar com o servidor");
  }
}
