
//cargo el ficher
// 1er fuciones
// 2do lo demas variable, etc

/*
// seleccionamos la etiqueta que queremos capturar
let titulo = document.querySelector('h1');
let juego = document.querySelector('container__boton');
let subtitulo = document.querySelector('p')
//insertamos una cadena de texto al tag H1 y al p 
titulo.innerHTML = 'juego secreto';
subtitulo.innerHTML = 'ingrese un numero del 1 a 20';
*/
 //document.getElementById("numeroUsuario").value nos sirve para 
 // poder capturar el valor de un objeto a traves del id
 // sin el .value captura el tag

function verificarIntento(){
    let numerousuario = parseInt(document.getElementById("numeroUsuario").value);
    console.log(numerousuario)
    console.log("cantidad de veces: "+intentos);
 
    if(numerousuario === numeroSecreto){
         // ${..} nos deja insertar codigo js 
        asignarTextoElemento('p',`acertaste en ${intentos } ${intentos > 1 ? 'veces ': 'vez'}`);
         //capturamos el id del boton para activar el boton cuando acierto el usuario 
         document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
         limpiarcaja();
         if(numeroSecreto > numerousuario){
             asignarTextoElemento('p','el numero secreto es mayor');
         }
        else{
             asignarTextoElemento('p','el numero secreto es menor');
         }
        
        intentos++
    }
};

function asignarTextoElemento(tag,texto){
    // seleccionamos la etiqueta que queremos capturar
    let etiqueta = document.querySelector(tag);// ejemplo : 'h1'
    //insertamos una cadena de texto al tag ejemplo : H1 o p 
    etiqueta.innerHTML = texto;
}
// creamos funciones
function generaNumeroSecreto(){
    let numeroSecreto = parseInt(Math.floor(Math.random()*cantidadMaxima)+1);
    //creamos una bandera para saber cuando salir de la funcion
    if(numerosSecretos.length == cantidadMaxima){
        asignarTextoElemento('p','ya se sortearon todos los numeros de posibilidades');
    }else{
        if(numerosSecretos.includes(numeroSecreto)){
            //realizamos recursividad
            return generaNumeroSecreto(); 
        }else{
            //nos permite añidir un elemento al arreglo
            numerosSecretos.push(numeroSecreto);
            return numeroSecreto;
        }
    }
   
}
//limpiamos la caja 
function limpiarcaja(){
    let caja = document.querySelector('#numeroUsuario');
    caja.value = '';
}

//inicializamos valores
function condicionesIniciales(){
    asignarTextoElemento('h1',"juego secreto");
    asignarTextoElemento('p',"ingrese un numero de 1 al 100");
    numeroSecreto = generaNumeroSecreto();
    inicalizarIntentos();
    console.log("numero secreto: "+numeroSecreto);
    console.log(numerosSecretos);
}
//inicializamos los intentos
function inicalizarIntentos(){
    intentos = 1;
}
function reiniciarJuego(){
    limpiarcaja();
    condicionesIniciales();
    // carturamos el tag y el seteamos el atrbituto disabled para que sea true
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}
let numerosSecretos = [];
let numeroSecreto = 0;
let intentos = 0;
let cantidadMaxima = 20;
condicionesIniciales();

