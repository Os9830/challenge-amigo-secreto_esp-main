# Challenge Amigo Secreto 

Este proyecto es una aplicación sencilla para organizar un juego de **Amigo Secreto** de forma rápida y eficiente.

Los usuarios pueden agregar nombres a una lista y, al finalizar, realizar un sorteo aleatorio para descubrir quién será su "amigo secreto".

---

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden escribir un nombre en un campo de texto y añadirlo a la lista con el botón **"Adicionar"**.  
- **Validar entrada**: Si el campo está vacío, el sistema mostrará una alerta solicitando un nombre válido.  
- **Visualizar la lista**: Los nombres ingresados se muestran en una lista debajo del campo de entrada.  
- **Sorteo aleatorio**: Con el botón **"Sortear Amigo"**, se selecciona aleatoriamente un nombre de la lista y se muestra en pantalla.  

---

## Tareas implementadas

### Captura y validación de entradas
- [x] Capturar el valor del campo de entrada con `getElementById` o `querySelector`.  
- [x] Validar que el campo no esté vacío y mostrar un mensaje si lo está.  
- [x] Agregar el nombre válido a un arreglo con `.push()`.  
- [x] Limpiar el campo de entrada después de agregar un nombre.  

### Visualización de la lista
- [x] Obtener el elemento donde se mostrará la lista.  
- [x] Limpiar la lista existente antes de actualizarla.  
- [x] Iterar sobre el arreglo de amigos para generar elementos `<li>`.  
- [x] Renderizar la lista en el DOM.  

### Sorteo aleatorio
- [x] Validar que existan amigos en la lista antes de sortear.  
- [x] Generar un índice aleatorio con `Math.random()` y `Math.floor()`.  
- [x] Obtener el nombre correspondiente al índice generado.  
- [x] Mostrar el resultado en pantalla con `innerHTML`.  

---

## Tecnologías utilizadas
- **HTML**  
- **CSS**  
- **JavaScript (DOM, arrays, eventos)**  

---

Desarrollado como parte deL **Challenge Amigo Secreto**.  