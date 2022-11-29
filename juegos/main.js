/*var a=10;
let i=1;
let j=2;
let k=3;
let res='';
while(i<=a)
{
  if (i%2==0)
  {
res=res+j+',';
j=j+2;
}
else
{
  res=res+k+',';
  k=k+3;
}
i=i+1;
}
console.log(res)*/

/*let n=prompt();
let i=2;
let s=0;
while (i < n) {
if (n % i == 0) {

console.log("lo divide ",i);
s=s+1;
}
i=i+1;
}
console.log('tiene',s,'divisores')*/





/*var aleatorio = Math.floor(Math.random()*10);
var intentos = 0;
var acierto = false;
var dificultad = 0;
var select_dificultad = prompt("Selecciona la dificultad: Fácil = 1 - Intermedio = 2 - Difícil = 3");
if (select_dificultad == 1){
	dificultad = 1;
}
if (select_dificultad == 2){
	dificultad = 2;
}
if (select_dificultad == 3){
	dificultad = 3;
}
if(dificultad == 1){
	alert("Has seleccionado el modo fácil, no tienes límite de intentos.");
	
	while(acierto == false){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			console.log("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	}
}

if(dificultad == 2){
	alert("Has seleccionado el modo intermedio, solo tienes 5 intentos.");
	
	while(acierto == false && intentos < 5){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			console.log("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 5){
		alert("Has fallado. Game over.");
		console.log("El número era: " + aleatorio);
	}
	}
}

if(dificultad == 3){
	alert("Has seleccionado el modo difícil, solo tienes 3 intentos.");
	
	while(acierto == false && intentos < 3){
		var entrada = prompt("Introduce un número del 1 al 10.");
		intentos++;
		if (entrada == aleatorio){
			alert("Enhorabuena, has acertado el número. Has utilizado " + intentos  + " intentos.");
			acierto = true;
			console.log("El número era: " + aleatorio);
		}else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}
	if (intentos == 3){
		alert("Has fallado. Game over.");
		console.log("El número era: " + aleatorio);
	}
	}
}*/

function juego2(){
var aleatorio = Math.floor(Math.random()*30);
var intentos = 0;
var acierto = false;
var dificultad = 0; 
	while(acierto == false){
		
		var ni= prompt("cuantos intentos quieres");
		var entrada = prompt("Introduce un número del 1 al 30.");
		intentos++;
		if(entrada==null){
		  return;
		}
		if(entrada < aleatorio && intentos<ni){
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
		}/*else
			{
				alert("Lo siento, no has acertado el número. Llevas " + intentos + " intentos.");
			}*/
			if (intentos == ni){
		alert("SE TE ACABARON LOS INTENTOS.");
		console.log("El número era: " + aleatorio);
	}
	}
	document.getElementById("resp2").innerHTML=aleatorio;
	document.getElementById("aleatorio").innerHTML=aleatorio;
}
