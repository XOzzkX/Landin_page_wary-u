document.addEventListener("DOMContentLoaded", function () {
    console.log("Bienvenido a la Landing Page de WARY-U");
  
    // Función para mostrar secciones
    window.mostrarSeccion = function(seccionId) {
        const secciones = document.querySelectorAll("main > section");
        secciones.forEach(seccion => {
            seccion.style.display = 'none';
        });
  
        document.getElementById(seccionId).style.display = 'block';
  
        const links = document.querySelectorAll(".nav-links li a");
        links.forEach(link => {
            link.classList.remove("active");
        });
        document.querySelector(`.nav-links li a[href="#${seccionId}"]`).classList.add("active");
    };
  
    // Inicializar la sección activa
    mostrarSeccion('inicio'); // Esto mostrará la sección "inicio" por defecto
  
    const navLinks = document.querySelectorAll('.nav-links li a');
  
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Previene la acción por defecto del enlace
            const seccionId = this.getAttribute('href').substring(1); // Obtener el ID de la sección desde el href
            mostrarSeccion(seccionId);
        });
    });

    const toggleButton = document.getElementById("toggle-mv");
        const misionVision = document.getElementById("mision-vision");

        toggleButton.addEventListener("click", () => {
            if (misionVision.style.display === "none") {
                misionVision.style.display = "flex"; // Cambiado a flex para centrar verticalmente
                toggleButton.innerText = "Ocultar Misión y Visión"; // Cambiar texto del botón
            } else {
                misionVision.style.display = "none";
                toggleButton.innerText = "Ver Misión y Visión"; // Cambiar texto del botón
            }
        });
  
    
})
// Expande o colapsa la respuesta de la pregunta FAQ al hacer clic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
        } else {
            answer.style.display = "none";
        }
    });
});
