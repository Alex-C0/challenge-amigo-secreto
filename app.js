let listaAmigos = [];// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    } else {
        if(listaAmigos.includes(nombreAmigo)){
            alert("Este nombre ya esta en la lista");
            return;
        } else{
           listaAmigos.push(nombreAmigo);
           document.getElementById("amigo").value = "";
           console.log(listaAmigos);
           actualizarAmigo();
        }
        
    }
    
    
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

function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert("No hay amigos disponibles para sortear");
    } else {
        let amigoSeleccionado = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = listaAmigos[amigoSeleccionado];
        let resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = amigoSecreto;
    }
}

    console.log(listaAmigos);
