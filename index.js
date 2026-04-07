let i = 0;
let texto = "Hello World";
let elemento = document.getElementById("texto");
let container = document.querySelector(".animado");

function digitar() {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100);
    }
}

digitar();
