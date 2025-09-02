// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos.
let nombresAmigos = [];

// Obtenemos los elementos del HTML una sola vez para mejorar el rendimiento.
const campoAmigo = document.getElementById('amigo');
const listaHTML = document.getElementById("listaAmigos");

const limpiarCampo = () => 
{
    campoAmigo.value = '';
}

const agregarAmigo = () => 
{
    // Usamos .trim() para eliminar espacios en blanco al inicio y al final.
    const nombre = campoAmigo.value.trim();

    if (nombre === '') 
    {
        alert("Por favor, inserta un nombre.");
        return; 
    }

    // Verificamos si el nombre ya existe en la lista.
    if (nombresAmigos.includes(nombre)) 
    {
        alert("Este nombre ya ha sido agregado. Intenta con otro.");
        limpiarCampo();
        return; 
    }

    nombresAmigos.push(nombre);
    limpiarCampo();
    actualizarLista();
}

const actualizarLista = () => 
{
    listaHTML.innerHTML = ""; 

    //Uso de forEach para recorrer la lista de amigos y creacion de elementos li.
    nombresAmigos.forEach(nombre => 
    {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

const sortearAmigo = () => 
{
    // Verificamos que haya suficientes amigos para un sorteo.
    if (nombresAmigos.length < 2) 
    {
        alert("Necesitas al menos 2 amigos en la lista para poder  realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSeleccionado = nombresAmigos[indiceAleatorio];

    listaHTML.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}