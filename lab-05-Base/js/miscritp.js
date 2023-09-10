//Esto es un comentario de una linea
/*
Esto es un comentario de varias lineas 
*/

//Caso 1: Obtener la cabecera del documento
let cabecera = document.head;
console.log(cabecera)

//Caso 2: Obtener el body del documento
let cuerpo = document.body;
console.log(cuerpo)

//Caso 3: Recuperar un nodo y ver sus propiedades
let lpAntiguos = document.getElementById("antiguo");
console.log(lpAntiguos)

let arreglo_antiguos = []

let nodos = lpAntiguos.childNodes
for (i = 0; i < nodos.length; i++) {
    console.log(nodos[i])
    if (nodos[i].nodeType == document.ELEMENT_NODE) {
        arreglo_antiguos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta1").innerHTML = arreglo_antiguos;

//Caso 4: Recuperar datos
let lpModernos = document.getElementById("moderno");
console.log(lpModernos)

let arreglo_modernos = []

nodos = lpModernos.childNodes
for (i = 0; i < nodos.length; i++) {
    console.log(nodos[i])
    if (nodos[i].nodeType == document.ELEMENT_NODE) {
        arreglo_modernos.push(nodos[i].textContent)
    }
}

document.getElementById("rpta2").innerHTML = arreglo_modernos;

//Caso 5: Concatenar arreglos
document.getElementById("rpta3").innerHTML =
    arreglo_antiguos.concat(arreglo_modernos)

// Caso 6: Concatenar los elementos de los arrays en una cadena de texto
document.getElementById("rpta3").innerHTML = arreglo_antiguos.join("*")

// Caso 7: Ubicar la posicion de un elemento en un arreglo
let pos = arreglo_modernos.indexOf('Kotlin')
document.getElementById("rpta4").innerHTML = pos

// Caso 8: Insertar un elemento a un arreglo 
/* La funcion splice funciona asi: 
splice(posicion a insertar, numero de elementos a borrar, 'elementos nuevos')
*/
arreglo_modernos.splice(1, 0, 'Unlamda', 'Malboge')
document.getElementById("rpta5").innerHTML = arreglo_modernos

// Caso 9: Insertar y borrar un elemento
arreglo_modernos.splice(3, 1, 'Intercal', 'ooak')
document.getElementById("rpta6").innerHTML = arreglo_modernos

// Caso 10: Borrar un elemento
arreglo_modernos.splice(3, 1,)
document.getElementById("rpta7").innerHTML = arreglo_modernos

/* Caso 11: obtener ultimo elemento del arreglo */
var elemento = arreglo_modernos.pop()
document.getElementById("rpta1").innerHTML = elemento

// Caso 12: Obtener el primer elemento del arreglo
var elemento = arreglo_modernos.shift()
document.getElementById("rpta2").innerHTML = elemento 

// Caso 13: Agregar un elemento al final
arreglo_modernos.push("Dart")
document.getElementById("rpta1").innerHTML = arreglo_modernos

// Caso 14: Otra forma de colocar elemento al final del arreglo
arreglo_modernos[ arreglo_modernos.length] = "Gaaaa"
document.getElementById("rpta5").innerHTML = arreglo_modernos

// Caso 15: Colocar un elemento al inicio del arreglo
arreglo_modernos.unshift("AleUwU")
document.getElementById("rpta6").innerHTML = arreglo_modernos

// Caso 16: Ordenar el arreglo
arreglo_modernos.sort()
document.getElementById("rpta7").innerHTML = arreglo_modernos

// Caso 17: Ordenar el arreglo al reves
arreglo_modernos.reverse()
document.getElementById("rpta8").innerHTML = arreglo_modernos

// Caso 18: Generar HTML
var rpta = []
rpta.push("<ol>")
rpta.push("<li> Peru - 0 </li>")
rpta.push("<li> Brasil - 3 </li>")
rpta.push("<li> Messi - 9 </li>")
rpta.push("</ol>")
var contenido = rpta.join(' ')

document.getElementById("rpta1").innerHTML = contenido