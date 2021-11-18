/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/

function crearLista() {
  const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

  let lista = document.createElement("ul");

  document.body.appendChild(lista);

  for (let i = 0; i < countries.length; i++) {
    let punto = document.createElement("li");
    document.querySelector("ul").appendChild(punto).textContent = countries[i];
  }
}

crearLista();

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

function eliminarElemento() {
  document
    .querySelector("body")
    .removeChild(document.querySelector(".fn-remove-me"));
}

eliminarElemento();

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

function crearLista2() {
  const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

  let lista2 = document.createElement("ul");

  document.querySelector('[data-function="printHere"]').appendChild(lista2);

  for (let i = 0; i < cars.length; i++) {
    let punto2 = document.createElement("li");
    document.querySelector("ul").appendChild(punto2).textContent = cars[i];
  }
}
crearLista2();

/*1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/

function ejercicio4() {
  const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];

  for (let i = 0; i < countries.length; i++) {
    let contenedor = document.createElement("div");
    contenedor.className = `div${i}`;

    let texto = document.createElement("h4");
    let imagen = document.createElement("img");

    document.body.appendChild(contenedor);
    document.querySelector(`.div${i}`).appendChild(texto).textContent =
      countries[i].title;
    document.querySelector(`.div${i}`).appendChild(imagen).textContent =
      countries[i].imgUrl;
  }
}

ejercicio4();

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.*/

function botonElimina() {
  let boton = document.createElement("button");
  document.body.appendChild(boton).textContent = "Elimino al ultimo elemento";

  let divAEliminar = document.querySelectorAll("div")[5];

  let borrarDiv = function () {
    document.body.removeChild(divAEliminar);
  };

  document.querySelector("button").addEventListener("click", borrarDiv);
}
botonElimina();

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.*/

function eliminarCadaDiv() {
  let boton1 = document.createElement("button");
  document.body.appendChild(boton1).textContent = "Elimino al Primer div";
  boton1.className = "boton1";

  let boton2 = document.createElement("button");
  document.body.appendChild(boton2).textContent = "Elimino al Segundo div";
  boton2.className = "boton2";

  let boton3 = document.createElement("button");
  document.body.appendChild(boton3).textContent = "Elimino al Tercer div";
  boton3.className = "boton3";

  let boton4 = document.createElement("button");
  document.body.appendChild(boton4).textContent = "Elimino al Cuarto div";
  boton4.className = "boton4";

  let boton5 = document.createElement("button");
  document.body.appendChild(boton5).textContent = "Elimino al Quinto div";
  boton5.className = "boton5";

  let eliminarDiv1 = document.querySelectorAll("div")[1];
  let borrarDiv1 = function () {
    document.body.removeChild(eliminarDiv1);
  };

  let eliminarDiv2 = document.querySelectorAll("div")[2];
  let borrarDiv2 = function () {
    document.body.removeChild(eliminarDiv2);
  };

  let eliminarDiv3 = document.querySelectorAll("div")[3];
  let borrarDiv3 = function () {
    document.body.removeChild(eliminarDiv3);
  };

  let eliminarDiv4 = document.querySelectorAll("div")[4];
  let borrarDiv4 = function () {
    document.body.removeChild(eliminarDiv4);
  };

  let eliminarDiv5 = document.querySelectorAll("div")[5];
  let borrarDiv5 = function () {
    document.body.removeChild(eliminarDiv5);
  };

  document.querySelector(".boton1").addEventListener("click", borrarDiv1);
  document.querySelector(".boton2").addEventListener("click", borrarDiv2);
  document.querySelector(".boton3").addEventListener("click", borrarDiv3);
  document.querySelector(".boton4").addEventListener("click", borrarDiv4);
  document.querySelector(".boton5").addEventListener("click", borrarDiv5);
}
eliminarCadaDiv();
