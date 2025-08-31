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
    }
    else
    {
        alert("Por favor, inserte un nombre.");
    }
}

sortearAmigo = () =>
{
    
}
