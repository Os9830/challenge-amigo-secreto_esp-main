# Challenge Amigo Secreto (Español)

Este proyecto es una aplicación para organizar un juego de **Amigo Secreto** de manera sencilla y eficiente.

El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

## Fucionalidades:
-Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

-Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

### TAREAS REALIZADAS

//TAREAS TARJETA 1

[x]Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

[x]Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

[x]Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

[x]Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

//TAREAS TARJETA 2

[x]Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

[x]Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

[x]Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

[x]Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.

//TAREAS TARJETA 3
[x]Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

[x]Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

[x]Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

[x]Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.