// Función para cambiar entre modos
function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    const button = document.getElementById('toggleButton');
    const switchLabel = document.querySelector('.custom-control-label');
    
    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Cambiar a Modo Claro';
        switchLabel.textContent = 'Modo Claro';
    } else {
        button.textContent = 'Cambiar a Modo Oscuro';
        switchLabel.textContent = 'Modo Oscuro';
    }
}

// Evento para el botón
document.getElementById('toggleButton').addEventListener('click', () => {
    toggleMode();
    document.getElementById('toggleSwitch').checked = document.body.classList.contains('dark-mode');
});

// Evento para el switch
document.getElementById('toggleSwitch').addEventListener('change', () => {
    toggleMode();
});
