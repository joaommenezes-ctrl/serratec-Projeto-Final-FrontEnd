const deleteUser = async (event) => {
  event.preventDefault();

  const idUser = document.getElementById('idUser').value.trim();

  if (!idUser) {
    alert("⚠️ Informe o ID do usuário!");
    return;
  }

  try {
    const resposta = await fetch(`${BASE_URL}/${idUser}`, { method: 'DELETE' });

    if (resposta.ok) {
      alert("🗑️ Usuário deletado com sucesso!");
    } else {
      alert("❌ Não foi possível deletar o usuário.");
    }
  } catch (error) {
    alert("❌ Erro ao conectar com o servidor.");
  }
};