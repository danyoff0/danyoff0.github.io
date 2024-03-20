function practica9(){
var nombre =document.getElementById("correo1").value;
var matricula  = document.getElementById("correo2").value;



let nombre1 =nombre;
let nombre2=nombre;
let nombre3=nombre;
let nombre4 =nombre;

let matricula1 = matricula;
let matricula2 = matricula;
let matricula3 = matricula;
let matricula4 = matricula;



var audi= parseFloat(document.getElementById("auditoria").value);
var web= parseFloat(document.getElementById("web").value);
var gestion= parseFloat(document.getElementById("gestion").value);
var redes= parseFloat(document.getElementById("redes").value);
var topicos= parseFloat(document.getElementById("topicos").value);
var promedio1 = parseFloat("");

promedio1 = (audi+web+gestion+redes+topicos)/5;

let audi1=audi;
let web1=web;
let gestion1=gestion;
let redes1=redes;
let topicos1=topicos;


var  op=document.getElementById("opcion").value;
document.getElementById("op").innerHTML=op;


var  op1=document.getElementById("opcion1").value;
document.getElementById("op1").innerHTML=op1;

var  op2=document.getElementById("opcion2").value;
document.getElementById("op2").innerHTML=op2;

var  op3=document.getElementById("opcion3").value;
document.getElementById("op3").innerHTML=op3;

var  op4=document.getElementById("opcion4").value;
document.getElementById("op4").innerHTML=op4;




document.getElementById("cali").innerHTML = audi;
document.getElementById("cali1").innerHTML = web;
document.getElementById("cali2").innerHTML = gestion;
document.getElementById("cali3").innerHTML = redes;
document.getElementById("cali4").innerHTML = topicos1;

document.getElementById("nomb").innerHTML = nombre;
document.getElementById("matri").innerHTML = matricula;

document.getElementById("nomb1").innerHTML = nombre1;
document.getElementById("matri1").innerHTML = matricula1;

document.getElementById("nomb2").innerHTML = nombre2;
document.getElementById("matri2").innerHTML = matricula2;

document.getElementById("nomb3").innerHTML = nombre3;
document.getElementById("matri3").innerHTML = matricula3;

document.getElementById("nomb4").innerHTML = nombre4;
document.getElementById("matri4").innerHTML = matricula4;

document.getElementById("Pro").innerHTML = promedio1;

var promedio12="promedio";
document.getElementById("promedio").innerHTML = promedio12;
var Materias="Materias";
document.getElementById("materias").innerHTML = Materias;
var nom11="Nombre";
document.getElementById("nombre5").innerHTML = nom11;
var matri="Matricula";
document.getElementById("matricula2").innerHTML = matri;
var cali="Calificaciones";
document.getElementById("calificaciones1").innerHTML = cali;
var res1="Resultado";
document.getElementById("res").innerHTML = res1;

}