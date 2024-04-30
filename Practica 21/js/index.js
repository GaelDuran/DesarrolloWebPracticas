    let lista = document.getElementById("lista");
    let texto = "Hola mi nombre es Charles, y voy a cumplir 18 años";
    console.log(texto);

    lista.innerHTML = texto;

    texto = 'Esta es otra cadena';

    lista.innerHTML = texto;

    texto = `Esta es otra forma`;

    let text = `Cadena multilinea
        La Salle
        Alumnos 301
        ESTA SEMANA COMIENZAN los examenes del segundo parcial
        Suerte!
    `;

    console.log(text);

    let a = 5;
    let b = 10;

    let resultado = `El resultado de la suma es ${a} + ${b} es ${a+b} 

    <ul>
        <li>Multiplica ${ a * b }</li>
        <li>Divide ${ a / b }</li>
        <li>Resta  ${ a - b }</li>
    </ul>
    `;
    console.log(resultado);
    lista.innerHTML = resultado;

