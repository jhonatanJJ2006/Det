(function () {
    const botonContacto = document.querySelector(".contacto__formulario__boton");

    if (botonContacto) {
        botonContacto.addEventListener("click", (e) => {
            e.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const apellido = document.querySelector("#apellido").value.trim();
            const correo = document.querySelector("#email").value.trim();
            const mensaje = document.querySelector("#mensaje").value.trim();

            const data = new FormData();
            data.append("nombre", nombre);
            data.append("apellido", apellido);
            data.append("correo", correo);
            data.append("mensaje", mensaje);

            console.log(nombre);
            console.log(apellido);
            console.log(correo);
            console.log(mensaje);

            fetch("/email/enviar", {
                method: "POST",
                body: data,
            })
            .then(response => response.json())
            .then(resultado => {
                if (resultado.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Mensaje enviado",
                        text: resultado.message,
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: resultado.message,
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Error de conexión",
                    text: "No se pudo enviar el formulario. Inténtalo de nuevo.",
                });
                console.error("Error:", error);
            });
        });
    }
})();
