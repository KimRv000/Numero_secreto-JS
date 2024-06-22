
let clicks = 0;
let max_rango = 10;

let max_rangoUsuario = 0;

const numSecreto = Math.floor(Math.random() * max_rango + 1);
console.log(numSecreto);

let resultado = "";
let mensaje = "";

let numUsuario = 0;

let intentos = 0;
const max_intentos = 5;

//Contenedores//
const contenedorTextoAzul = document.getElementById("textoAzul");
const contenedorTextoUno = document.getElementById("texto_1");
const contenedorTextoDos = document.getElementById("texto_2");

//Botones and input//

const myButtonStart = document.getElementById("myButtonStart");
const myButtonNext = document.getElementById("myButtonNext");
const myInput = document.getElementById("myInput");
const form = document.getElementById("containerAnswers");
const inputValue = document.getElementById("myInput").value;

//Inicio del juego//
contenedorTextoAzul.innerText = "Bienvenido a Número Secreto";
myButtonStart.addEventListener("click", () => {
    contenedorTextoAzul.innerText = "Adivine el Número Secreto";
    contenedorTextoUno.style.visibility = "visible";
    contenedorTextoDos.style.visibility = "visible";
    contenedorTextoUno.innerText = `Ingrese un número del 1 al ${max_rango}.`;
    myInput.style.visibility = "visible";
    contenedorTextoDos.innerText = `Tienes ${max_intentos - intentos} intentos`
    myButtonStart.style.visibility = "hidden"
    myButtonNext.style.visibility = "visible";


})

myButtonNext.addEventListener("click", (e) => {
    e.preventDefault();
    numUsuario = parseInt(document.getElementById("myInput").value);
    console.log(numUsuario);
    document.getElementById("myInput").value = '';
    intentos++

    if (numUsuario === numSecreto) {
        contenedorTextoAzul.innerText = " Adivinaste!"
        contenedorTextoUno.innerText = `El número secreto es ${numSecreto}`;
        contenedorTextoDos.style.fontSize = "x-large";
        contenedorTextoDos.innerText = `Intentaste ${intentos} ${intentos === 1 ? "vez":"veces"}`;
        myInput.style.visibility = "hidden";
        myButtonNext.style.visibility = "hidden";
    }
    else if(isNaN(numUsuario) || numUsuario <= 0 || numUsuario > max_rango){
        contenedorTextoAzul.innerText = "Número inválido"
        contenedorTextoUno.innerText = "Ingrese un número dentro del rango";
        intentos--
    }
    else {
        contenedorTextoAzul.innerText = "Incorrecto, intente de nuevo"
        if(numUsuario>numSecreto){
            contenedorTextoUno.innerText = `Ingrese un número menor a ${numUsuario}.`;
        }else{
            contenedorTextoUno.innerText = `Ingrese un número mayor a ${numUsuario}.`;
        }
        contenedorTextoDos.innerText = `Tienes ${max_intentos - intentos} intentos`
    }

    if (intentos > max_intentos) {
        contenedorTextoAzul.innerText = " Te quedaste sin intentos!"
        contenedorTextoUno.style.visibility = "hidden";
        contenedorTextoDos.style.visibility = "hidden";
        myInput.style.visibility = "hidden";
        myButtonNext.style.visibility = "hidden";
        myButtonStart.style.visibility = "visible"
        intentos = 0;
    }
})




