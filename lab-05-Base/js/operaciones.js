function sumar(){
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let respuesta = parseInt(op1) + parseInt(op2)
    document.getElementById("rpta").innerHTML = respuesta
}

function restar() {
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let respuesta = parseInt(op1) - parseInt(op2)
    document.getElementById("rpta").innerHTML = respuesta
}
function multiplicar() {
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let respuesta = parseInt(op1) * parseInt(op2)
    document.getElementById("rpta").innerHTML = respuesta
}
function dividir() {
    let op1 = document.getElementById("id1").value
    let op2 = document.getElementById("id2").value

    let respuesta = parseInt(op1) / parseInt(op2)
    document.getElementById("rpta").innerHTML = respuesta
}