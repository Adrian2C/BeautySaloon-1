document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const closeButton = document.querySelector(".navbar-button"); // Botón de cerrar

    // Función para alternar la clase "active" en el menú
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Cierra el menú al hacer clic en el botón de cerrar
    closeButton.addEventListener("click", () => {
        menu.classList.remove("active");
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== menuToggle && e.target !== menuToggle.querySelector("i")) {
            menu.classList.remove("active");
        }
    });
});