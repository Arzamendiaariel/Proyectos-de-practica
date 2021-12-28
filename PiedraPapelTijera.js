var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === piedra && cpu === tijera){
            console.log("el usuario GANO con "+ piedra)
        }else if(user === papel && cpu === piedra){
            console.log( "el usuario GANO con " + papel)
        }else if(user === tijera && cpu === papel){
            console.log("el usuario GANO con " + tijera)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

var jugador;
var computador;

if (jugador == "tijeras"  && computador == "papel") 
{
    console.log("Ganaste");
}
else if (jugador == "Piedra"  && computador == "tijeras") 
{
    console.log("Ganaste");
}
else if (jugador == "papel"  && computador == "piedra") 
{
    console.log("Ganaste");
}
else if (jugador == computador ) 
{
    console.log("empate");
}
else {
    console.log("Perdiste")
}