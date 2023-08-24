
import apiTmdb from "./api-tmdb.js";

export { showPlay, rolagem, trailer}


// EVENTO DE JANELA MODAL (dialog)
var janelas = document.querySelectorAll(".dialog")
const openModal = () => {

    if(janelas)
    {
        janelas.forEach( janela => {
            janela.style.display = 'flex'
        
            setTimeout(() => {
                janela.style.display = 'none'
               
            }, 2000)
        })
    }
}



// EVENTO do botão de pesquisa
var lupa = document.getElementById("botton-open")
var input = document.getElementsByClassName("input-search")
var close = document.getElementById("botton-close")
var boxSearch = document.getElementById("box-search")

// abrir barra de pesquisa
if (lupa) 
{
    lupa.addEventListener("click", () => {

    input[0].classList.remove("invisible")
    input[0].focus()
    close.classList.remove("invisible")
    lupa.classList.add("invisible")

    })

    // fechar barra
    close.addEventListener("click", () => {

        input[0].value = ''
        input[0].classList.add("invisible")
        close.classList.add("invisible")
        lupa.classList.remove("invisible")
    })
}

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


// EVENTO DE PESQUISA

// Adiciona os elementos necessario para apresentar os dados da pesquisa
const addElementos = (idFilme, posterPath) => {

    if (idFilme == undefined || posterPath == undefined )
    {
        return     
    }

    const main = document.getElementById("main-search")
    let div = document.createElement("div") 
    let a = document.createElement("a")
    let img = document.createElement("img")

    div.classList.add("lista","div") 
    div.appendChild(a)

    a.setAttribute("href",`home-filme.html?id=${idFilme}`)
    a.appendChild(img)

    img.setAttribute("src",`https://image.tmdb.org/t/p/w300${posterPath}`)

    main.appendChild(div)
    
}


// Aplicando evento de input para pesquisa
if(input) 
{
    for (let x = 0; x < input.length; x ++) 
    {
        // filtar a pesquisa e retornar respostas
        input[x].addEventListener("keyup", async (event) => {

            if (event.key === "Enter") 
            {   
                // remover a pesquisa atual
                const divAtuais = document.getElementsByClassName("div")

                if (divAtuais)  
                {
                    for (let y = 0; y < divAtuais.length; y ++)
                    {
                        divAtuais[y].style.display = 'none'
                    }
                }

                // buscando os filmes
                const movies = await getFilme()
                const pesquisa = input[x].value.toLowerCase()
                let ids = []

                for (let i = 0; i < movies.length; i++)
                {
                    let a = movies[i].title

                    if (a === undefined)
                    {
                        a =  movies[i +1].title
                    }

                    let movieTitle = a.toLowerCase()

                    if (movieTitle.includes(pesquisa))
                    {
                        if (window.location.pathname == '/gitHub/projeto-douma/search.html')
                        {
                            addElementos(movies[i].id, movies[i].poster_path)
                        }
                            ids.push(movies[i].id)
                    }
                    else
                    {
                        continue 
                    }
                }
                
                if (ids.length !== 0) // Mandando id dos filmes pesquisado para o localStore
                {
                    const idString = JSON.stringify(ids);

                    localStorage.clear()
                    localStorage.setItem('idPesquisa', idString);

                    if (window.location.pathname !== '/gitHub/projeto-douma/search.html')
                    {
                        window.location.href = 'search.html'          
                    }
                }
                else
                {
                    // dialog
                    openModal()

                }
            } 
        })
        
        // EVENTO apagar valor de input
        const btnClear = document.getElementById("botton-clear")

        if(btnClear)
        {
            btnClear.addEventListener("click", () => {

                input[x].value = ''
            })
        }
    }
}



// EVENTO: pega os dados do localStorage e apresenta o resultado da pesquisa
document.addEventListener('DOMContentLoaded', function() {

    // Verificar a URL da página atual
    if (window.location.pathname === '/gitHub/projeto-douma/search.html') 
    {
        const ids = JSON.parse(localStorage.getItem('idPesquisa'))

        if(ids.length == 0)
        {
            openModal()  // dialog
        }
        else
        {
            ids.forEach ( async id => {

                let filme = await apiTmdb.getMovieId(id)
                addElementos(filme.id, filme.poster_path)
            })
        }
    }
});

    

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
            input[0].style.color = 'white'
        } 
        else 
        {
            nav.classList.remove("scrolled")

            lupa.style.backgroundColor =  'rgb(0, 0, 157)'
            boxSearch.style.backgroundColor = 'white'

            close.style.color = 'black'
            input[0].style.color = 'black'
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

// EVENTO botão de voltar
var voltar = document.getElementById("voltar")

if (voltar)
{
    voltar.addEventListener("click", () => {
        window.location.href = "index.html"
    })
}

const a = () => {
      // Adicione um ouvinte para o evento resize
    window.addEventListener('resize', () => {

    const width = window.innerWidth;

    if(width > 800)
    {
        // imagem desktop
        console.log('desktop' + width)
    }
    else
    {
        // imagem mobile
        console.log('mobile' + width)
    }
    })
}
  
  
  
  