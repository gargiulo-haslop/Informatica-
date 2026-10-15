//Datos 
const nombre= "mary"; //Permance el valor de "nombre" sin cambiar 
const clave= "1234"; // Es de tipo "stream" porque está entre "", estos datos son los reales y luego tendré que comparar essos con los que ponga el ususario
//Capturamos la info del DOM 
let nomIng = document.getElementById ("usuario"); //Esta variable si cambia. El "getElementById" es para buscar el elemento. 
let claveIng = document.getElementById ("contraseña"); 
let boton = document.getElementById ("btn-ingresar"); 
//Escuchamos/sentimos que el boón está siendo presionado 
boton.addEventListener ("click", function () {

alert( nomIng.value); //Verifica qude el valor/la info que se estè escribiendo en el "let" sea compatible con "const" (o sea, quie sea la misma info/datos)

 }); // Todo lo que yo ordene dentro de la llave ("{") va a pasar SOLO si el botón es presionado 


