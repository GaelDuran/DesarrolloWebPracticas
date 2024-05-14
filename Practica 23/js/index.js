let resultado = document.getElementById('resultado');
let historial = [];

let asignar = (valor) => resultado.value += valor;

function calcular() {
    if (resultado.value !== '') {
        try {
            let res = new Function('return ' + resultado.value)();
            historial.push(`${resultado.value} = ${res}`);
            actualizarHistorial();
            resultado.value = res;
        } catch (e) {
            alert('Expresión inválida');
        }
    } else {
        alert('Ingrese un valor');
    }
}

function calcularOperacion(operacion) {
    if (resultado.value !== '') {
        try {
            let valor = parseFloat(resultado.value);
            let res;
            switch (operacion) {
                case 'sqrt':
                    res = Math.sqrt(valor);
                    historial.push(`√${valor} = ${res}`);
                    break;
                case 'sin':
                    res = Math.sin(valor);
                    historial.push(`sin(${valor}) = ${res}`);
                    break;
                case 'cos':
                    res = Math.cos(valor);
                    historial.push(`cos(${valor}) = ${res}`);
                    break;
                case 'tan':
                    res = Math.tan(valor);
                    historial.push(`tan(${valor}) = ${res}`);
                    break;
            }
            actualizarHistorial();
            resultado.value = res;
        } catch (e) {
            alert('Error al calcular la operación');
        }
    } else {
        alert('Ingrese un valor');
    }
}

let limpiar = () => resultado.value = '';

function actualizarHistorial() {
    let historialElemento = document.getElementById('historial');
    historialElemento.innerHTML = '';
    historial.forEach((operacion) => {
        let item = document.createElement('li');
        item.className = 'list-group-item';
        item.textContent = operacion;
        historialElemento.appendChild(item);
    });
}