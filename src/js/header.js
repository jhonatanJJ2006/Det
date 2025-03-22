(function () {
    
    const header = document.querySelector(".header");

    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        localStorage.setItem("scrollPosition", window.scrollY);
    }

    window.addEventListener("scroll", checkScroll);

    if (localStorage.getItem("scrollPosition") > 50) {
        header.classList.add("scrolled");
    }

    document.querySelectorAll(".header__nav--item a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("data-id").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    document.querySelectorAll(".footer__nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("data-id").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
    
})();