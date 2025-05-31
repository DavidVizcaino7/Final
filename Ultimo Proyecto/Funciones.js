// declaramos un arreglo vacío para almacenar las notas ingresadas
var notas = [];

// Función que se ejecuta al hacer clic en el botón "Agregar Nota"
function agregarNota() {
    // Obtiene el elemento input donde se escribe la nota
    var input = document.getElementById("nota");

    // Convierte el valor del input a un número decimal (float)
    var valor = parseFloat(input.value);

    // Verifica si el valor ingresado está dentro del rango permitido (0 a 10)
    if (valor >= 0 && valor <= 10) {
        // Si es válido, lo añade al arreglo de notas
        notas.push(valor);

        // Muestra la nota agregada en pantalla dentro del elemento "listaNotas"
        document.getElementById("listaNotas").innerHTML += "Nota: " + valor + "<br>";

        // Limpia el campo del input para que el usuario pueda escribir otra nota
        input.value = "";
    } else {
        // Si la nota no está en el rango, muestra una alerta
        alert("Nota entre 0 y 10");
    }
}

// Función que se ejecuta al hacer clic en el botón "Calcular Promedio"
function calcularPromedio() {
    // Verifica si hay notas registradas
    if (notas.length == 0) {
        alert("No hay notas");
        return; // Sale de la función si no hay notas
    }

    // Inicializa una variable para acumular la suma de todas las notas
    var suma = 0;

    // Recorre el arreglo de notas y acumula la suma de sus elementos
    for (var i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calcula el promedio dividiendo la suma total entre la cantidad de notas
    var promedio = suma / notas.length;

    // Determina si el estudiante está aprobado (promedio >= 7) o reprobado
    var mensaje = promedio >= 7 ? "Aprobado" : "Reprobado";

    // Muestra el resultado del promedio en pantalla con dos decimales
    document.getElementById("promedio").innerHTML = "Promedio: " + promedio.toFixed(2) + " - " + mensaje;
}  


// 
