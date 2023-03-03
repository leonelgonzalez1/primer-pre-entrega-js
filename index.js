
//juego 1


const nombre = prompt("ingrese su nombre")
alert("bienvenido " +nombre)
alert("a continuacion tendras que responder algunas preguntas de futbol, buena suerte")



let pregunta1 = prompt("cual es la seleccion con mas copas del mundo?")
while(pregunta1 !=="brasil"){
    alert("incorrecto, vamos de nuevo")
    pregunta1 = prompt("quien es la seleccion con mas copas del mundo?") 
}
alert ("correcto") 



let pregunta2 = prompt("quien es el actual campeon del mundo?")
while(pregunta2 !=="argentina"){
    alert("incorrecto, vamos de nuevo")
    pregunta2 = prompt("quien es el actual campeon del mundo?") 
}
alert ("correcto")  



let pregunta3 = prompt("como es el apellido del mejor jugador de la historia?")
while(pregunta3 !=="messi"){
    alert("incorrecto, vamos de nuevo")
    pregunta3 = prompt("como es el apellido del mejor jugador de la historia?") 
}
alert ("correcto")  


alert("ultima pregunta")


let pregunta4 =(prompt("en que año se juega el proximo mundial?"))
while(pregunta4 !=="2026"){
    alert("incorrecto, vamos de nuevo")
    pregunta4 = prompt("en que año se juega el proximo mundial?") 
}
alert ("correcto") 

alert("felicidades "+nombre) 


//juego 2



alert("juego 2, elije un lado de la moneda y apuesta")


const moneda = prompt("cara o cruz")
if(moneda ==="cara"){
    alert("perdiste,")
}
else if(moneda ==="cruz"){
    alert("ganaste")
}


const moneda2 = prompt("cara o cruz")
if(moneda2 ==="cara"){
    alert("perdiste")
}
else if(moneda2 ==="cruz"){
    alert("ganaste")
}


const moneda3 = prompt("cara o cruz")
if(moneda3 ==="cruz"){
    alert("perdiste")
}
else if(moneda3 ==="cara"){
    alert("ganaste")
}


alert("muchas gracias por jugar, espero que te lo hayas pasado bien, saludos " +nombre)



