document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const commission = document.getElementById('commission').value;

            if (!name || !email || !commission) {
                alert("Por favor, completa todos los campos.");
                event.preventDefault(); // Evita el envío del formulario
            }
        });
    } else {
        console.warn('El formulario no se encontró');
    }
});