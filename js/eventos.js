
export { showPlay, rolagem, imgResposive }

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
            nav.classList.add("scrolled");
        } 
        else 
        {
            nav.classList.remove("scrolled");
        }
    });
}

scrollNav()


// EVENTO do botão de play
const showPlay = (id) => {

    const play = document.getElementById("botton--play")

    play.addEventListener("click", async () => {

        const cod = await id
        window.location.href = `home-filme.html?id=${cod}`
    })
}


const imgResposive = (fundo,poster,backdrop) => {

    window.addEventListener('resize', () => {

        let mediaQuery = window.innerWidth

        if (mediaQuery < 500)
        {
            fundo.style.background = `url(https://image.tmdb.org/t/p/w500${poster})`
            fundo.style.backgroundPosition = 'center center'
        }
        else if (mediaQuery > 500 && mediaQuery < 1920)
        {
            fundo.style.background = `url(https://image.tmdb.org/t/p/original${backdrop})`

            fundo.style.backgroundPosition = 'center center'
        }
        else
        {
            fundo.style.background = `url(https://image.tmdb.org/t/p/original${backdrop})`
        }
    })
}

// EVENTO do botão de pesquisa



