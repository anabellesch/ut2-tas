
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

function removeFromArray(arreglo, item) {
    const indice = arreglo.indexOf(item);
    
    arreglo.splice(indice, 1);
    
    console.log(arreglo);
}

let arreglo = [1, 2, 3, 4, 5];

function getTheTitles(books){
    let titles = [];
    books.forEach(book => {
        titles.push(book.titulo);
    });
    return titles;
}

const libro1= new libro('Harry Potter', 'J.K. Rowling', 500);
const libro2= new libro('Cien años de soledad', 'Gabriel García Márquez', 800);
const libro3= new libro('El señor de los anillos', 'J.R.R. Tolkien', 1200);

let libros = [libro1, libro2, libro3];

function libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}


function getOdds(nums) {
    const odds = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            odds.push(nums[i]);
        }
    }
    return odds;
}

function duplicates(nums) {
    const counts = {};
    let duplicateCount = 0;

    for (let num of nums) {
        if (counts[num]) {
            if (counts[num] === 1) {
                duplicateCount++;
            }
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    console.log(duplicateCount);
}