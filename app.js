// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const ulTag=document.getElementById("resultado");

function agregarAmigo (){
    let nomAmigo=document.getElementById("amigo").value;
    

    if (nomAmigo === "") {
        alert("Por favor, ingresa un nombre de amigo.");}
    else{
        amigos.push(nomAmigo);
        const li = document.createElement("li");
        li.textContent = nomAmigo;
        ulTag.appendChild(li);
    }
    

    console.log(amigos);
    // .value = amigos.join(", ");
}

function sortearAmigo() {
    ulTag.innerHTML = "";
    const randomAmigo = amigos[Math.floor(Math.random() * amigos.length)];
    ulTag.innerHTML = `El amigo secreto sorteado es: ${randomAmigo}`;


}