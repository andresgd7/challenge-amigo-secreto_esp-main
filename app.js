// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const ulTag=document.getElementById("resultado");

function mostrarAmigos() {
    ulTag.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        ulTag.appendChild(li);
    }
}


function agregarAmigo() {
    const nomAmigo = document.getElementById("amigo").value.trim();

    if (nomAmigo === "") {
        alert("Por favor, ingresa un nombre de amigo.");
        return;
    }

    amigos.push(nomAmigo);
    mostrarAmigos();
    document.getElementById("amigo").value = "";

    console.log(amigos);
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    const randomAmigo = amigos[Math.floor(Math.random() * amigos.length)];
    ulTag.innerHTML = `El amigo secreto sorteado es: ${randomAmigo}`;
}
