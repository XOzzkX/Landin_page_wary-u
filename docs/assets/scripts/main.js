document.addEventListener("DOMContentLoaded", function () {
  console.log("Bienvenido a la Landing Page de WARY-U");

  window.mostrarSeccion = function(seccionId) {
      // Oculta todas las secciones
      const secciones = document.querySelectorAll("main > section");
      secciones.forEach(seccion => {
          seccion.style.display = 'none';
      });

      // Muestra la sección seleccionada
      document.getElementById(seccionId).style.display = 'block';

      // Agregar clase 'active' a la etiqueta seleccionada en el menú
      const links = document.querySelectorAll(".nav-links li a");
      links.forEach(link => {
          link.classList.remove("active");
      });
      
      document.querySelector(`.nav-links li a[href="#${seccionId}"]`).classList.add("active");
  };
});
document.addEventListener("DOMContentLoaded", function () {
  // Inicializar la sección activa
  mostrarSeccion('inicio'); // Esto mostrará la sección "inicio" por defecto

  const navLinks = document.querySelectorAll('.nav-links li a');

  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Remover clase 'active' de todos los enlaces
          navLinks.forEach(l => l.classList.remove('active'));
          // Agregar clase 'active' al enlace que fue clickeado
          this.classList.add('active');
      });
  });
});

// Función para mostrar secciones
function mostrarSeccion(seccion) {
  // Aquí puedes agregar tu lógica para mostrar la sección correspondiente
  const secciones = document.querySelectorAll('.seccion'); // Asume que tienes un contenedor para cada sección
  secciones.forEach(s => {
      s.style.display = 'none'; // Oculta todas las secciones
  });

  document.getElementById(seccion).style.display = 'block'; // Muestra la sección seleccionada
}
