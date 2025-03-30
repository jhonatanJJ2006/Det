(function () {
    const botonContacto = document.querySelector(".contacto__formulario__boton");

    if (botonContacto) {
        botonContacto.addEventListener("click", (e) => {
            e.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const apellido = document.querySelector("#apellido").value.trim();
            const correo = document.querySelector("#email").value.trim();
            const mensaje = document.querySelector("#mensaje").value.trim();

            // Validación básica
            if (!nombre || !apellido || !correo || !mensaje) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Todos los campos son obligatorios.",
                });
                return; // Detener el envío si falta algún campo
            }

            const data = new FormData();
            data.append("nombre", nombre);
            data.append("apellido", apellido);
            data.append("correo", correo);
            data.append("mensaje", mensaje);

            console.log(nombre);
            console.log(apellido);
            console.log(correo);
            console.log(mensaje);

            fetch("/email/enviar", { // Asegúrate de que esta ruta apunte a tu archivo PHP
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
