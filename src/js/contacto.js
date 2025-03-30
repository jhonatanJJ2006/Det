(function () {
    
    const botonContacto = document.querySelector(".contacto__formulario__boton");
    const nombre = document.querySelector("#nombre").value.trim();
    const apellido = document.querySelector("#apellido").value.trim();
    const correo = document.querySelector("#email").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

    if(botonContacto)    {
        botonContacto.addEventListener('click', async (e) => {
            e.preventDefault();

            const data = new FormData();
            data.append('nombre', nombre);
            data.append('apellido', apellido);
            data.append('correo', correo);
            data.append('mensaje', mensaje);

            try {
                const respuesta = await fetch("/email/enviar", {
                    method: "POST",
                    body: data,
                });
    
                const resultado = await respuesta.json();
    
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
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error de conexión",
                    text: "No se pudo enviar el formulario. Inténtalo de nuevo.",
                });
                console.error("Error:", error);
            }

        });
    }

    
})();