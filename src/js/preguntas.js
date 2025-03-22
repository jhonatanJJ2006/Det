(function () {
    function togglePregunta(elemento) {
        const contenido = elemento.nextElementSibling;
        const icono = elemento.querySelector('.preguntas__icono');
        const estaAbierto = elemento.classList.contains('abierto');

        // Cerrar todos los elementos abiertos
        document.querySelectorAll('.preguntas__contenido').forEach((item) => item.classList.remove('activo'));
        document.querySelectorAll('.preguntas__lista--item').forEach((item) => item.classList.remove('abierto'));

        // Si el elemento no estaba abierto, lo abre
        if (!estaAbierto) {
            contenido.classList.add('activo');
            elemento.classList.add('abierto');
        }
    }

    document.querySelectorAll('.preguntas__lista--item').forEach((item) => {
        item.addEventListener('click', function () {
            togglePregunta(this);
        });
    });
})();
