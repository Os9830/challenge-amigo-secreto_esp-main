// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres_Amigos = [];

limpiar_Campo = () =>  
{
    document.getElementById('amigo').value = '';
}

agregarAmigo = (nombres) =>
{
    nombres = document.getElementById('amigo').value;
    if( nombres != '')
    {
        nombres_Amigos.push(nombres);
        limpiar_Campo();
        actualizarLista();
    }
    else
    {
        alert("Por favor, inserte un nombre.");
    }
}

actualizarLista = () => 
{
    const lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 

    for (let i = 0; i < nombres_Amigos.length; i++) 
    { 
        const li = document.createElement("li"); 
        li.textContent = nombres_Amigos[i];
        lista.appendChild(li); 
    }
}

sortearAmigo = () =>
{
    if (nombres_Amigos.length > 0) 
    {
        const indiceAleatorio = Math.floor(Math.random() * nombres_Amigos.length);
        const amigoSeleccionado = nombres_Amigos[indiceAleatorio];
        const lista = document.getElementById("listaAmigos"); 
        lista.innerHTML = ""; 
        const li = document.createElement("li");
        li.textContent = `El amigo secreto es: ${amigoSeleccionado}`;
        lista.appendChild(li);
    }
    else
    {
        alert("No hay amigos en la lista.");
    }
}
