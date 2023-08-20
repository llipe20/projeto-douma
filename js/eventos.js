
import apiTmdb from "./api-tmdb.js";

export { showPlay, rolagem, trailer }

// EVENTO do botão de pesquisa
var lupa = document.getElementById("botton-open")
var input = document.getElementById("input-search")
var close = document.getElementById("botton-close")
var boxSearch = document.getElementById("box-search")

// abrir barra
lupa.addEventListener("click", () => {

    input.classList.remove("invisible")
    input.focus()
    close.classList.remove("invisible")
    lupa.classList.add("invisible")
})

// fechar barra
close.addEventListener("click", () => {

    input.value = ''
    input.classList.add("invisible")
    close.classList.add("invisible")
    lupa.classList.remove("invisible")
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
        window.location.href = './search.html'

        const movies = await getFilme()
        const pesquisa = input.value.toLowerCase()

        for (let posicao in movies)
        {
            let bancoFilme = movies[posicao].title.toLowerCase()

            if (bancoFilme.includes(pesquisa))
            {
                console.log(bancoFilme) 
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
    
            if (isRight) 
            {
                atual += 4;
            } 
            else 
            {
                atual -= 4;
            }
    
            if (atual >= max) {
                atual = max;
            }
            
            if (atual < 0) {
                atual = 0;
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
            boxSearch.style.backgroundColor = 'transparent'
            close.style.backgroundColor = 'transparent'

            close.style.color = 'white'
            input.style.color = 'white'
        } 
        else 
        {
            nav.classList.remove("scrolled")

            lupa.style.backgroundColor =  'rgb(0, 0, 157)'
            boxSearch.style.backgroundColor = 'white'

            close.style.color = 'black'
            input.style.color = 'black'
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

    const play = document.getElementById("botton--play")

    play.addEventListener("click", () => {

    const url = `https://www.youtube.com/watch?v=${id}`
    window.open(url, "_blank")

        // CODIGO PENDENTE
    })
}  
