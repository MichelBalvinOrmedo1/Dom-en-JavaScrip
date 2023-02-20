let nombre = document.getElementById("nombre");

nombre.addEventListener("keypress", (e) => {
    e.preventDefault();

    let letra = e.key;

    if(!isFinite(letra)){
        nombre.value += letra;
    }

})