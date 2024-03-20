function practica8(){
var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
var resutado ="";
if (num1>num2) {
    resultado="el numero mayor es"+num1;
} else if(num2>num1){
    resultado="el numero mayor es"+num2;
}else{
    resultado="los numeros son iguales";
}
document.getElementById("resultado").innerHTML = resultado;
}