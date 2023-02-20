var boton = document.getElementById("hola");
const newDiv = document.createElement("div");
var eliminar = document.getElementById("eliminar").style.display = 'none';

boton.addEventListener("click", function(e){
    e.preventDefault()
    
    let parrafo = document.createElement("p");

    let text = document.createTextNode("Hola como estas quiero estar aqui contigo");

    parrafo.appendChild(text);
    newDiv.appendChild(parrafo);

    var miDiv = document.getElementById("miDiv");
    
    miDiv.parentNode.insertBefore(newDiv, miDiv.nextSibling)
    document.getElementById("eliminar").style.display = 'block';

 
    
})
    
   //eliminar un nodo
  
eliminar.addEventListener("click", (e) =>{
    e.preventDefault()
    newDiv.removeChild(newDiv   )
    
})
   
   
