
// EVENTO pegando o id do filme pela URL
import Tmdb from "./api-tmdb.js"

  // elementos paras exibir os dados

  var cartaz = document.getElementById("img-cartaz")
  var views = document.getElementById("view")
  var title = document.getElementById("title-filme")
  var ponto = document.getElementById("ponto")
  var date = document.getElementById("ano")
  var language = document.getElementById("language")
  var sinopses = document.getElementsByClassName("sinopse")

  document.addEventListener('DOMContentLoaded', async () => {

    const getId = async () => {
        // Obter a URL atual
        const urlParams = new URLSearchParams(window.location.search);

        // Obter o valor do parâmetro 'id'
        const cod = urlParams.get('id');

        return cod
    };

  const id = await getId()
  const filme = await Tmdb.getMovieId(id)

  cartaz.setAttribute("src",`https://image.tmdb.org/t/p/w300${filme.poster_path}`)
  views.textContent = `${filme.popularity} visualizações`

  title.textContent = `${filme.title}`
  ponto.textContent = `${filme.vote_average.toFixed(1)} pontos`

  const ano = new Date(`${filme.release_date}`)
  date.textContent = `${ano.getFullYear()}`

  language.textContent = `${filme.original_language}`

  for( const sinopse of sinopses)
  {
    sinopse.textContent = `${filme.overview}`
  }
});