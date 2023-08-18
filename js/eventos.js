    
    export default {
        rolagem: (bottons, imgs, atual) => {

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
            
                    console.log(atual);
                });
            });
        }
    }



