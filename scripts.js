const entradaTexto = document.querySelector(".textarea");

const salidaTexto = document.querySelector(".mensaje");

/* FUNCIÓN PARA ENCRIPTAR : Reglas de encriptación
a= ai
e= enter
i= imes
o= ober
u= ufat

solo se aceptan letras minúsculas

*/

function encriptar(texto) {

    let arregloReglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    /* se toma el texto ingresado y se lo convierte a minúscula con el método tolowercase */
    texto = texto.toLowerCase();

    /* se recorre el arreglo con for */
   for(let i = 0; i < arregloReglas.length; i++){

    /* se buscan coincidencias en cada palabra, busca en el índice 0, 1,2..... si el arreglo contiene la letra de la posición cero, o sea, a,e,i....*/
    if(texto.includes(arregloReglas[i][0])){
        /* si encuentra la vocal en la posición i, a esta hay q cambiarla por el valor de la posición 1 */
        texto = texto.replaceAll(arregloReglas[i][0],arregloReglas[i][1])
    }
   }
   return texto;
}

function botonEncriptar(){
    const textoEncriptado = encriptar(entradaTexto.value);
    salidaTexto.value = textoEncriptado;
    salidaTexto.style.backgroundImage = "none";
    entradaTexto.value = "";
}
/* -------------------------------------------------------------------------------------------------------------- */

function desencriptar(textoDesencriptado) {
    let arregloReglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    /* se recorre el arreglo con for */
   for(let i = 0; i < arregloReglas.length; i++){

    /* se buscan coincidencias en cada palabra, busca en el índice 0, 1,2..... si el arreglo contiene la letra de la posición cero, o sea, a,e,i....*/
    if(textoDesencriptado.includes(arregloReglas[i][1])){
        /* si encuentra la vocal en la posición i, a esta hay q cambiarla por el valor de la posición 1 */
        textoDesencriptado = textoDesencriptado.replaceAll(arregloReglas[i][1],arregloReglas[i][0])
    }
   }
   return textoDesencriptado;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(entradaTexto.value);
    salidaTexto.value = textoDesencriptado;
    //entradaTexto.value = "";

}

function copiar(){
    salidaTexto.select();
    navigator.clipboard.writeText(salidaTexto.value);
    salidaTexto.value = "";
    console.log("Texto copiado a la memoria RAM")
    alert("El texto fue copiado a la papelera");
}