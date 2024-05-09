    let resultado = document.getElementById('resultado');

    let asignar = (valor) => resultado.value += valor;
    

    function calcular(){
        if(resultado.value != '')
            resultado.value = eval(resultado.value);
        else
            alert('ingrese un valor');
    }

    let limpiar = () => resultado.value = '';



    // RETO HACER CALCULADORA CIENTIFICA -- MINIMO 3 OPERACIONES 