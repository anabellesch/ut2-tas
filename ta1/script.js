
let texto=document.getElementById("texto");

function repeatString(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
}

function reverseString(texto) {
    let textoInvertido="";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    console.log(textoInvertido);
}