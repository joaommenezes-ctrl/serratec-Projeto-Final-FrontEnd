document.addEventListener("DOMContentLoaded", () => {
  const btnGet = document.getElementById("btnGet");
  const resultadoForm = document.getElementById("resultado");

  btnGet.addEventListener("click", async () => {
    resultadoForm.innerHTML = "<p>Buscando dados...</p>";

    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error("Erro na requisição GET");

      const data = await response.json();

      resultadoForm.innerHTML = data.map(user => `
        <div class="card">

          <p><strong>id:</strong> ${user.id}</p>
          <p><strong>nome:</strong> ${user.name}</p>
          <p><strong>email:</strong> ${user.email}</p>
          <p><strong>senha:</strong> ${user.senha}</p>
          

        </div>
      `).join("");
    } catch (error) {
      resultadoForm.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
      console.error(error);
    }
  });
});
