const botonTema = document.getElementById('cambiar-tema');
let modoOscuro = false;

botonTema.addEventListener('click', function() {
    modoOscuro = !modoOscuro;

    if (modoOscuro) {
        document.body.style.backgroundColor = '#121212';
        botonTema.style.backgroundColor = '#ffffff';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        botonTema.style.backgroundColor = '';
        botonTema.style.color = '';
    }
});
