function agregarPersona() {
    //Obtengo todos los valores del formulario a través del DOM
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let sexo = document.getElementById("sexo").value;
    let tipoDocumento = document.getElementById("tipo_documento").value;
    let numeroDocumento = document.getElementById("numero_documento").value;
    let telefono = document.getElementById("telefono").value;

    //Agrego a la tabla los datos obtenidos del formulario, pasandole la información a través de variables
    let tabla = document.getElementById("tabla-personas-registradas")
    let fila = tabla.insertRow();
    fila.insertCell(0).innerHTML = nombre;
    fila.insertCell(1).innerHTML = apellido;
    fila.insertCell(2).innerHTML = sexo;
    fila.insertCell(3).innerHTML = tipoDocumento;
    fila.insertCell(4).innerHTML = numeroDocumento;
    fila.insertCell(5).innerHTML = telefono;

    //Apenas abro la web, la tabla será invisible. Luego de agregar el primer elemento, voy a mostrarla por pantalla cambiandole el
    // display (ver CSS para ver por qué no se ve)    
    if (tabla.style.display === '') {
        tabla.style.display = 'table';
    }
}
