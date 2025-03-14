
function calcularAulas() {
    let alumnos = parseInt(document.getElementById("alumnos").value);
    if (isNaN(alumnos) || alumnos < 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un número válido.";
        return;
    }
    
    let capacidadAula = 30;
    let aulasLlenas = Math.floor(alumnos / capacidadAula);

    let sobrantes = alumnos % capacidadAula;
    let faltan = sobrantes === 0 ? 0 : capacidadAula - sobrantes;

    if (aulasLlenas === 0) {
        aulasLlenas = "Ninguna aula, genia😜 ";  
    }
    document.getElementById("resultado").innerHTML = 
        `Aulas llenas: ${aulasLlenas} <br> ` +
        `Cant. Alumnos para llenar la última aula: ${faltan}`;
}

function reiniciar() {
    document.getElementById("alumnos").value = ""; // Limpia el input
    document.getElementById("resultado").innerHTML = ""; // Borra el resultado
    }