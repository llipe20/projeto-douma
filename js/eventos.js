
var btnRolagem = document.querySelectorAll(".botton-absoluto")
var filmeAtual = 0;
var lista = document.getElementsByTagName("li");
var max = lista.length;

btnRolagem.forEach(btnRolagem => {
    btnRolagem.addEventListener("click", () => {

        // descobrir qual botão foi clicado
        const isRight = btnRolagem.classList.contains('right');

        if (isRight)
        {
            filmeAtual += 1;
        }
        else
        {
            filmeAtual -= 1;
        }

        if (filmeAtual >= max)
        {
            filmeAtual = 0;
        }
        
        if (filmeAtual < 0)
        {
            filmeAtual = max - 1;
        }

        lista[filmeAtual].scrollIntoView({
            inline : "center",
            behavior : "smooth"
        })

        console.log(filmeAtual)
    })
})

