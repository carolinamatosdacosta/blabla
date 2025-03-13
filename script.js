const texto = "Bem-vindo(a) ao meu portfólio";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.querySelector(".typing").innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100);
    }
}

window.onload = digitar;