let listaAmigos = [];// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    } else {
        listaAmigos.push(nombreAmigo);
    }
    document.getElementById("amigo").value = "";
    console.log(listaAmigos);
    actualizarAmigo();
    
}
function actualizarAmigo() {
    const listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; //limpiamos la lista antes de actualizar

    for(let i = 0; i < listaAmigos.length; i++) {
       let li = document.createElement("li");
       li.textContent = listaAmigos[i];
       listaHTML.appendChild(li);

    }
}

    console.log(listaAmigos);
