    const fruits = ["apple", "orange", "banana", "kiwi"];

    let size = fruits.length;
    console.log(size);

    let contenido = "";
    for (let i = 0; i < size; i++) {
      console.log(fruits[i]);
      contenido += fruits[i] + ",";
    }

    let lista1 = document.getElementById("lista1");
    lista1.innerHTML = contenido;
    console.log(lista1);
    console.warn("La fruta es:", fruits);
    console.error("La fruta es:", fruits);
    console.info("La fruta es:", fruits);
    console.table(fruits);
    console.debug("La fruta es:", fruits);

    let lista2 = document.getElementById("lista2");
    lista2.innerHTML = fruits.join(" ***** ");

    let lista3 = document.getElementById("lista3");
    fruits.pop(); // Quita el ultimo elemento del arreglo
    console.log(fruits);
    lista3.innerHTML = "Lista3:" + fruits.join("------");

    let lista4 = document.getElementById("lista4");
    fruits.push("Mango"); // Agrega un elemento al final del arreglo
    fruits.push("Fresa");
    lista4.innerHTML = "Lista4:" + fruits.join("------");

    let lista5 = document.getElementById("lista5");
    fruits.shift(); // Quita el primer elemento del arreglo
    console.log(fruits);
    lista5.innerHTML = "Lista5:" + fruits.join("------");

    let lista6 = document.getElementById("lista6");
    fruits.unshift("Pera");
    fruits.unshift("Uva");
    console.log(fruits);
    lista6.innerHTML = "Lista5:" + fruits.join("------");

    const nombreMujeres = ["Greys", "Denisse", "Saray"];
    const nombreHombres = ["Hugo", "Paco", "Luis"];

    let listaNombres = nombreMujeres.concat(nombreHombres);
    console.log(listaNombres);
    let lista7 = document.getElementById("lista7");
    lista7.innerHTML = "ListaNombres:" + listaNombres.join("------");

