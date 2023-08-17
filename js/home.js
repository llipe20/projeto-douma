import Tmdb from "./api-tmdb.js";

// pegando os elementos para add os dados

// header
var fundo = document.querySelector(".header")
var title = document.getElementById("info--title")
var ponto = document.getElementById("info--ponto")
var ano = document.getElementById("info--ano")
var tempo = document.getElementById("info--time")
var sinopse = document.getElementById("info--sinopse")
var view = document.getElementById("info--view")

// Box-principal 
var main = document.getElementById("main")

// trazendo os dados dos filmes
const listAll = async () => {
    let lista = await Tmdb.getHomeList()
    
    //  FILME NA HEADER

    // pegando um filme aleatório
    const filmes = lista[1].movie.results
    const valor = Math.floor(Math.random() * (filmes.length - 1))
    const filmeEscolhido = filmes[valor]

    console.log(filmeEscolhido)

    // motando a header

    fundo.style.background = `url(https://image.tmdb.org/t/p/original${filmeEscolhido.backdrop_path})`

    title.textContent = `${filmeEscolhido.title}` 
    ponto.textContent = `${filmeEscolhido.vote_average.toFixed(1)} pontos`

    // ano
    const year = new Date(`${filmeEscolhido.release_date}`)
    ano.textContent = `${year.getFullYear()}`

    // duração
    tempo.textContent = `${filmeEscolhido.original_language}`

    // sinopse
    const max = 300;
    const conteudo = filmeEscolhido.overview
    
    if (conteudo.length > max) 
    {
        sinopse.textContent = conteudo.slice(0, max) + " ..."
    } 
    else 
    {
        sinopse.textContent = conteudo
    }
    
    view.textContent = `${filmeEscolhido.popularity} view`
    

    // FILMES NAS LISTAS 

    for (let i = 0; i < lista.length; i++)
    {
        // CRIANDOO AS TAGS HTML
        var section = document.createElement("section")
        section.classList.add("section-movie")

        // div do title da sessão
        var boxTitle = document.createElement("div")
        boxTitle.classList.add("box-title")

        // title da sessão (ex: comédia)
        let h2 = document.createElement("h2")
        h2.classList.add("title-section")

        // box fixo de lista
        var boxFixo = document.createElement("div")
        boxFixo.classList.add("box-lista-fixa")

        // botões de rolagem lateral
        var botton = document.createElement("button")
        botton.classList.add("botton-absoluto")

        // emoj dos botões
        var span = document.createElement("span")
        span.classList.add("material-symbols-outlined")

        // box lista -relativo
        var ul = document.createElement("ul")
        ul.classList.add("box-rolagem-lista")

        // Motando a estrutura da lista

        main.appendChild(section)
            section.appendChild(boxTitle)
                boxTitle.appendChild(h2)
                    h2.textContent = (`${lista[i].title}`)

                    console.log(lista[i].movie.results)

            section.appendChild(boxFixo)
                boxFixo.appendChild(botton)     // botão da esqueda
                    botton.setAttribute("id","botton-left")
                    botton.appendChild(span)
                        span.textContent = ("chevron_left")
                boxFixo.appendChild(ul)

                    for (let x = 0; x < lista[i].movie.results.length; x++)  // add as listas com filmes
                    {
                         // lista
                        var li = document.createElement("li")
                        li.classList.add("lista")

                        // ancora
                        var a = document.createElement("a")

                        // imagem cartaz
                        var img = document.createElement("img")
                        img.classList.add("foto-cartaz")

                        // motando a lista
                        ul.appendChild(li)
                            li.appendChild(a)
                                a.setAttribute("href",`home-filme.html?id=${lista[i].movie.results[x].id}`) 

                                a.appendChild(img)
                                    img.setAttribute("src",`https://image.tmdb.org/t/p/w300${lista[i].movie.results[x].poster_path}`) 
                    }
               
                boxFixo.appendChild(botton)     // botão da direita
                botton.setAttribute("id","botton-right")
                botton.appendChild(span)
                    span.textContent = ("chevron_right")
    }
}

listAll()

