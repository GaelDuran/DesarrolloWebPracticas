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

        Alt + 96 apostrofe invertido o backtick
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

    let persona = 'Pablo';
    let edad = 16;
    let cadena = 'my name is';

    function miFuncion(cadena, personaX, edadExp){
        let resultado = ``;

        //resultado += cadena + personaX + 'tiene una edad de' + edadExp + 'años';

        resultado = `${cadena} ${personaX} tiene una edad de ${edadExp} años`;

        console.log(resultado);
        return resultado;
    }

    miFuncion("Nombre:",persona,edad);
    
    //let resultado2 = miFuncion`Hello ${cadena} ${persona} your age is ${edad} years`;
    //console.log(resultado2);

    function mostrarNombre(name){
        console.log(name);
        return name;
    }

    let resultado2 = mostrarNombre` Raul `;

    let titulo = "Ganadores de los Oscares 2024";
    let cantantes = ["Billie Elish","Lady Gaga","Adele"];
    let cadenaHTML = `<h1>${titulo}</h1>`;

    cadenaHTML += `<ul>`;

    for(let cantante of cantantes){
        cadenaHTML += `<li>${cantante}</li>`;
    }

    cadenaHTML += `</ul>`;
    
    lista.innerHTML = cadenaHTML;

    x = 3,14;
    otraFuncion();

    function otraFuncion(){
        "use strict";
        let y = 3.14;
    }

