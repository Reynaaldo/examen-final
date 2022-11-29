var aleatorio = Math.floor(Math.random() * 10) + 1;
var aleatorio2 = Math.floor(Math.random() * 30) + 1;
var intentos = 0;
var correcto = false;

function juego1(){
var select_dificultad = prompt("Selecciona la dificultad, Fácil = 1, Media = 2, Difícil = 3: ");

if(select_dificultad == 1){
dificultad = 1;
}

if (select_dificultad == 2) {
dificultad = 2;
}
if (select_dificultad == 3) {
dificultad = 3;
}

if (select_dificultad != 1 && select_dificultad != 2 && select_dificultad != 3){
alert("No se seleccionó una dificultad.")
}

if(dificultad == 1){
alert("Dificultad Fácil. No hay límite de intentos.");

while(correcto == false){
var entrada = prompt("Introduzca un número del 1 al 10: ");
if (entrada == null){
return;
}
intentos ++;
if(entrada == aleatorio){
alert("Correcto! Usaste " + intentos + " intentos.");
correcto = true;
document.getElementById('resp').innerHTML = intentos;
document.getElementById('num').innerHTML = aleatorio;
}else
{
alert(entrada + " no es el número correcto, intentos usados: " + intentos);
}
}
}

if (dificultad == 2) {
alert("Dificultad Media. 5 intentos.");

while (correcto == false && intentos < 5) {
var entrada = prompt("Introduzca un número del 1 al 10: ");
if (entrada == null){
return;
}
intentos++;
if (entrada == aleatorio) {
alert("Correcto! Usaste " + intentos + " intentos.");
correcto = true;
document.getElementById('resp').innerHTML = intentos;
document.getElementById('num').innerHTML = aleatorio;
} else
{
alert(entrada + " no es el número correcto, intentos usados: " + intentos);
}
}
if (intentos == 5){
alert("Game Over, no acertaste al número correcto.")
document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;

}
}

if (dificultad == 3) {
alert("Dificultad Difícil. 3 intentos.");

while (correcto == false && intentos < 3) {
var entrada = prompt("Introduzca un número del 1 al 10: ");
if (entrada == null){
return;
}
intentos++;
if (entrada == aleatorio) {
alert("Correcto! Usaste " + intentos + " intentos.");
correcto = true;
document.getElementById('resp').innerHTML = intentos;
document.getElementById('num').innerHTML = aleatorio;
} else
{
alert(entrada + " no es el número correcto, intentos usados: " + intentos);
}
}
if (intentos == 3) {
alert("Game Over, no acertaste al número correcto.")
document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;


}
}
}




function juego2(){

while (correcto == false) {
var entrada = prompt("Introduzca un número del 1 al 30: ");
if (entrada == null){
return;
}
intentos++;
if(entrada > aleatorio2){
alert("Estás cerca! Prueba un número menor.")
}else if(entrada < aleatorio2){
alert("Estás cerca! Prueba un número mayor.")
}
if (entrada == aleatorio2) {
alert("Correcto! Usaste " + intentos + " intentos.");
correcto = true;
document.getElementById('resp').innerHTML = intentos;
document.getElementById('num').innerHTML = aleatorio2;
} else
{
alert(entrada + " no es el número correcto, intentos usados: " + intentos);
}
}

if (intentos == 15) {
alert("Game Over, no acertaste al número correcto.");
document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
}
}

function juego3() {
var select_intentos = prompt("Especifique el número de intentos: ");

if (select_intentos > 30) {
alert("Son muchos intentos.");
}
if (select_intentos < 1){
alert("No especificaste el número de intentos.")
}

while (correcto == false) {
var entrada = prompt("Introduzca un número del 1 al 30: ");
if (entrada == null){
return;
}
intentos++;
if (entrada > aleatorio2) {
alert("Estás cerca! Prueba un número menor.")
} else if (entrada < aleatorio2) {
alert("Estás cerca! Prueba un número mayor.")
}
if (entrada == aleatorio2) {
alert("Correcto! Usaste " + intentos + " intentos.");
correcto = true;
document.getElementById('resp').innerHTML = intentos;
document.getElementById('num').innerHTML = aleatorio2;
} else
{
alert(entrada + " no es el número correcto, intentos usados: " + intentos);
}
if (intentos == select_intentos) {
alert("Game Over, no acertaste al número correcto.");
document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
return;
}
}
}

