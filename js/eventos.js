
import apiTmdb from "./api-tmdb.js";

export { showPlay, rolagem, imgResposive }

// EVENTO do botão de pesquisa
var lupa = document.getElementById("botton-open")
var input = document.getElementById("input-search")
var close = document.getElementById("botton-close")

// abrir barra
lupa.addEventListener("click", () => {

    input.classList.remove("invisible")
    input.focus()
    close.classList.remove("invisible")
})

// fechar barra
close.addEventListener("click", () => {

    input.value = ''
    input.classList.add("invisible")
    close.classList.add("invisible")
})

// pegar todos os filmes da API
const getFilme = async () => {
    const lista = await apiTmdb.getHomeList();

    let allFilmes = []; // Array para armazenar todos os filmes

    for (const posicao in lista) {

        const filmesDaPosicao = lista[posicao].movie.results;
        allFilmes = allFilmes.concat(filmesDaPosicao); // Adiciona os filmes ao array
    }

    return allFilmes;
}


// EVENTO para filtar a pesquisa e retornar respostas
input.addEventListener("keyup", async (event) => {

    if (event.key === "Enter") 
    {
        const movies = await getFilme()
        const pesquisa = input.value.toLowerCase()

        for (let posicao in movies)
        {
            let bancoFilme = movies[posicao].title.toLowerCase()

            if (bancoFilme.includes(pesquisa))
            {
                // COD PENDENTE 
            }
            else
            {
                continue
            }
        }
    } 
})

// EVENTO de botões de rolagem horizontal
const rolagem = (bottons, imgs, atual) => {

    const max = imgs.length;

    bottons.forEach(botton => {
        botton.addEventListener("click", () => {
    
            // Descobrir qual botão foi clicado
            const isRight = botton.classList.contains('right');
    
            if (isRight) {
                atual += 1;
            } else {
                atual -= 1;
            }
    
            if (atual >= max) {
                atual = 0;
            }
            
            if (atual < 0) {
                atual = max - 1;
            }
    
            imgs[atual].scrollIntoView({
                inline: "center",
                behavior: "smooth"
            });
        });
    });
}


// EVENTO de background na nav fixa
const scrollNav = () => {

    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 5) 
        {
            nav.classList.add("scrolled")
            lupa.style.backgroundColor = 'transparent'
            lupa.style.transition = 'background-color 0.5s ease-in-out'
            close.style.backgroundColor = 'transparent'
            close.style.transition = 'background-color 0.5s ease-in-out'
        } 
        else 
        {
            nav.classList.remove("scrolled")
            lupa.style.backgroundColor = ' rgb(0, 0, 157)'
            close.style.backgroundColor = ' rgb(0, 0, 157)'
        }
    });
}

scrollNav()


// EVENTO do botão de detalhes
const showPlay = (id) => {

    const detalhe = document.getElementById("botton--list")

    detalhe.addEventListener("click", async () => {

        const cod = await id
        window.location.href = `home-filme.html?id=${cod}`
    })
}

// EVENTO do botão de play

const trailer = (id) => {

    const play = document.getElementById("botton-play")

    play.addEventListener("click", async () => {

        const cod = await id

        // CODIGO PENDENTE
    })
}   