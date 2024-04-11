
    let numero = 100; // Variable global, tipo number entero
    console.log(numero);
    let decimal = 100.5; // Variable global, tipo number decimal
    console.log(decimal);

    let texto = "Hola Mundo"; // Variable global, tipo string
    let texto2 = 'Hola Mundo'; // Variable global, tipo string

    let booleano = true; // Variable global, tipo boolean
    let arreglo = [1, 2, 3, 4, 5]; // Variable global, tipo arreglo
    let arreglo2 = ["a", "b", "c", "d", "e"]; // Variable global, tipo arreglo
    console.log(arreglo2);
    console.log(arreglo[3]);
    console.log(arreglo[-2]);
    console.log(arreglo[30]);

    let arregloMixto = [1,2,3,4,5, "a", "b", "c", "d", "e", true, false]; // Variable global, tipo arreglo

    console.log(arregloMixto);

    arregloMixto[0] = "Hola";
    console.log(arregloMixto);

    let objeto = {
        nombre : "Juan",
        edad : 30,
        telefono : "1234567890"
    }
    console.log(objeto);
    console.log(objeto.telefono);
    console.log(objeto["edad"]);
    console.log("Nombre" + objeto.nombre);

    let estudiante = {
        nombre : "Luis Felipe",
        matricula : "202424",
        carrera : "Ing. de Software y Sistemas",
        materias : ["Matematicas", "Programacion", "Base de Datos"],
        amigos : [
        {
            nombre : "Pedro",
            telefono : "1234567890"
        },
        {
            nombre : "Maria (Crush",
            telefono : "0987654321"
        }
    ]
}

    console.log(estudiante.materias[1]);
    console.log(estudiante.amigos[1].nombre);

    let variable = 10.5;
    console.log(typeof variable);
    let variable2 = '10.5';
    console.log(typeof variable2);
    let variable3 = true;
    console.log(typeof variable3); 
    let variable4 = [1,2,3,4,5];
    console.log(typeof variable4);
    let variable5 = {
        nombre : "Juan",
        edad : 30,
        telefono : "1234567890"
    }
    console.log(typeof variable5.telefono);

    let saludo, nombre = "Juan";
    nombre = "Luis Felipe";
    console.log(nombre);