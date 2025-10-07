const updateUser = async (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const idUser = document.getElementById('idUser').value.trim();

  if (!nome || !email || !senha || !idUser) {
    alert("⚠️ Preencha todos os campos!");
    return;
  }

  try {
    const resposta = await fetch(`${BASE_URL}/${idUser}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    if (resposta.ok) {
      alert("✅ Usuário alterado com sucesso!");
    } else {
      alert("❌ Erro ao alterar o usuário.");
    }
  } catch (error) {
    alert("❌ Falha ao conectar com o servidor.");
  }
};