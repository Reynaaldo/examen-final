/*
    *La función saludar, recibe los datos de la persona por teclado y muestra el resultado en un elemento P. 
*/
function saludar(){
    const persona=[];
    persona[0]=prompt("Cual es tu nombre?");
    persona[1]=prompt("Cual es tu apellido?");//?Para obtener un elemento de un arreglo, se puede hacer colocando su nombre seguido de [pocision].
    persona[2]=prompt("Cual es tu edad?");
    persona[3]="Fin";
    document.getElementById("datos").innerHTML=persona;//?Para obtener todos los datos del arreglo, simplemente se coloca el nombre del arreglo.
}

//*numeros pares
function pares(){
    const par=[];
    let i=1;
    let n=prompt("Ingrese el número de terminos pares");
    while(i<=n){
        par[i-1]=i*2;
        i++;
    }
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < par.length; j++) {
      texto =texto+ "<li>" + par[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("serie").innerHTML=texto;   
}

//* Numeros impares
function impares(){
    const impar=[];
    let n=prompt("Ingrese el numero de terminos impares");
    for(let i=0;i<n;i++){
        impar[i]=(2*i)+1;
        console.log(impar[i]);
    }

    let tam=impar.length
    texto="<ul>";
    for(let j=0;j<tam;j++){
        texto=texto+"<li>"+impar[j]+"</li>";
    }
    texto=texto+"</ul>";
    document.getElementById("resultado").innerHTML=texto;
}

//*numeros multiplos de 3
function multiplos3(){
    const mult3=[];
    let i=1;
    let n=prompt("Ingrese la cantidad de numeros a generar");
    while(i<=n){
        mult3[i-1]=i*3;
        i++;
    }
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < mult3.length; j++) {
      texto =texto+ "<li>" + mult3[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("multi3").innerHTML=texto;   
}

//*numeros multiplos de 5
function multiplos5(){
    const mult5=[];
    let i=1;
    let n=prompt("Ingrese la cantidad de numeros a generar");
    while(i<=n){
        mult5[i-1]=i*5;
        i++;
    }
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < mult5.length; j++) {
      texto =texto+ "<li>" + mult5[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("multi5").innerHTML=texto;   
}

//*numeros aleatorios
function aleatorios(){
    const ale=[];
    let i=1;
    let n=prompt("Ingrese la cantidad de numeros a generar");
    while(i<=n){
        ale[i-1]=Math.floor(Math.random()*50)+1;
        i++;
    }
    let texto = "<ul>";//*Se crea una variable TEXTO, que contiene la sintaxis de una etiqueta <UL>, con lo cual se inicia la lista.
    for (let j = 0; j < ale.length; j++) {
      texto =texto+ "<li>" + ale[j] + "</li>";//*En cada iteración, se agrega el elemento <LI> a cada fila, para generar los elementos de la lista
    }
    texto += "</ul>";//*Para finalizar, se agrega la etiqueta de cierre de la lista </UL>
    document.getElementById("alea").innerHTML=texto;   
}
