function realizarOperacion(operacion) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('resultadoTexto').innerText = "Por favor, ingresa dos números válidos.";
        return;
    }
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                document.getElementById('resultadoTexto').innerText = "Error: División por cero.";
                return;
            }
            resultado = numero1 / numero2;
            break;
    }
    document.getElementById('resultadoTexto').innerText = resultado;
}
