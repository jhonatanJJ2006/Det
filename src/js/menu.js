(function () {
    const menu = document.querySelector(".header__menu");
    const nav = document.querySelector(".header__nav--2");
    const overlay = document.querySelector(".overlay");

    // Mostrar menú y overlay
    menu.addEventListener("click", () => {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Scroll suave al hacer clic en un enlace del menú
    document.querySelectorAll(".header__nav--2 a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("data-id");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
            nav.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
})();
