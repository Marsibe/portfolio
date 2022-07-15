function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() =>{
            elemento.innerHTML += letra;
        }, 250 * i);
    });
}

const titulo = document.querySelector("#subtitle");
for(var i = 0; i < 5; i++){
    typeWriter(titulo);
}