input = prompt("Ingresa un numero");
out = isNaN(input);
    if(out == false){
    var x = input;
switch (true) {
    case x < 16 && x > 0:
        alert("Eres un joven");
        break;
    case x > 16 && x < 26:
        alert("Eres un adulto");
        break;
    case x > 26 && x < 45:
        alert("En tu mejor momento");
        break;
    default:
        alert("Ninguno");


}
}else{
    alert("Debes de ingresar un numero");}