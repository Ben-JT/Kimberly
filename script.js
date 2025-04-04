// Función para generar nuevas calificaciones
function generarCalificaciones() {
    return Array.from({ length: 40 }, () => Math.floor(Math.random() * 18) + 3);
}


// Variable global de calificaciones
let calificaciones = generarCalificaciones();

// Función para mostrar calificaciones en la página
function mostrarCalificaciones() {
    const container = document.getElementById("notas-container");
    container.innerHTML = ""; // Limpiar notas anteriores

    calificaciones.forEach(calif => {
        const div = document.createElement("div");
        div.classList.add("nota");
        div.textContent = calif;
        container.appendChild(div);
    });
}

// Función para calcular la media y la nota más baja
function calcularNotas() {
    let sum = 0;
    let baja = Math.min(...calificaciones); // Encontrar el mínimo con Math.min()

    // Calcular la suma total
    sum = calificaciones.reduce((total, calif) => total + calif, 0);

    let media = sum / calificaciones.length;

    document.getElementById("resultado").innerHTML = 
        `Calificación media: ${media.toFixed(2)} <br> 
        Calificación más baja: ${baja}<br> 
        La nota más baja siempre es de kimberly`;
}

// Función para reiniciar y generar nuevas calificaciones
function reiniciarNotas() {
    calificaciones = generarCalificaciones(); // Generar nuevas notas
    mostrarCalificaciones(); // Mostrar nuevas notas
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
}

// Mostrar calificaciones al cargar la página
mostrarCalificaciones();



//agregado para audio
document.addEventListener('touchstart', function() {
    const audio = document.getElementById('myAudio');
    audio.play();
});