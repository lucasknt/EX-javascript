
function listaCelulares( ) {
    let oldTexto = '';

    const contas = [
        '20,00',
        '200,00',
        '75,00',
        '90',
        'Xiaomi'
    ];
    
    //Metodo 1

     var texto = celulares.toString()
     texto = texto.replaceAll(",", "<br> <br>")
     document.getElementById("banana").innerHTML = texto
    
    // Metodo 2

    // for(var index = 0 ; index < celulares.length ; index++){
    //     oldTexto = document.getElementById("banana").innerHTML;
    //     document.getElementById("banana").insertAdjacentHTML("afterend",`${oldTexto} <p> ${celulares[index]} </p>`)
    // }
}



