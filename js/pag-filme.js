
  // EVENTO pegando o id do filme pela URL

  document.addEventListener('DOMContentLoaded', () => {
    const getId = async () => {
        // Obter a URL atual
        const urlParams = new URLSearchParams(window.location.search);

        // Obter o valor do parâmetro 'id'
        const cod = urlParams.get('id');

        return cod
    };

   let id = getId();
});