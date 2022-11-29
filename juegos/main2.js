
//facil
function juego1(){
var texto;
var aleatorio = Math.floor(Math.random()*30);
var intentos = 0;
var acierto = false;
var dificultad = 0; 
	while(acierto == false){
		var entrada = prompt("Introduce un número del 1 al 30.");
		intentos++;
		if(entrada==null){
		  return;
		}
		if(entrada < aleatorio ){
		  alert("ingrese un número mayor")
		}
		else
		if (entrada >aleatorio){
		  alert("ingrese un número menor")
		}
		if (entrada == aleatorio){
			alert("EN HORA BUENA!!, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			console.log("El número era: " + aleatorio);
			texto="LO LOGRASTE :)";
		}
	}
	document.getElementById("resp1").innerHTML=texto;
	document.getElementById("aleatorio").innerHTML=aleatorio;
}

//medio
function juego2(){
let texto;
let adiv=prompt("introduce un número del 1 al 30 ",'');
let num=Math.floor(Math.random()*30);
console.log(num)
int=1;
while(int<5){
  if(adiv < num && int<5){
		  alert("ingrese un número mayor")
		}
		else
		if (adiv >num){
		  alert("ingrese un número menor")
		}
  if(adiv==num){
  console.log("lo lograste");
  texto="lo lograste :)";
  break;
  }
  else
  {
    console.log("prueba con otro número");
    adiv=prompt("prueba con otro número, te quedan "+(5-int)+" intentos");
    int++;
    texto="PERDISTE!!";
  }
}
  document.getElementById("resp2").innerHTML=texto;
	document.getElementById("num").innerHTML=num;
}

//dificil
function juego3(){
let texto;
let adiv=prompt("adivina el numero ",'');
let num=Math.floor(Math.random()*10);
console.log(num)
int=1;
while(int<2){
  if(adiv==num){
  console.log("lo lograste");
  texto="lo lograste :)";
  break;
  }
  else
  {
    console.log("prueba con otro número");
    adiv=prompt("prueba con otro número, te quedan "+(2-int)+" intentos");
    int++;
    texto="PERDISTE!!";
  }
}
  document.getElementById("resp1").innerHTML=texto;
	document.getElementById("num").innerHTML=num;
}

