'use strict'
//seleccionar elementos del DOm
let myTitle= document.
getElementsByName("titulo");
//selector por el name
let tagName = document.getElementsByName("art1");
//Seleccion por etiqueta
let etiqueta = document.getElementsByTagName("h3");
console.log(etiqueta);
//QuerySelector id
let queryContainer = document.querySelector("#container");
//QuerySelector class
let myMenu = document.querySelector(".menu");
//QuerySelector etiqueta
let myOl = document.querySelector("ol");
console.log(myOl);
//all
let allArt = document.querySelectorAll("article");
console.log(allArt);
//Crear elementos
let miParrafo = document.createElement("p");
miParrafo.id="parrafo";
miParrafo.className="parrafo";
miParrafo.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos aperiam magnam, praesentium necessitatibus dicta eveniet vitae consequuntur voluptatibus maiores dolor quisquam. Cupiditate, qui? Cum minus natus nulla laboriosam inventore";
miParrafo.innerHTML="<h3>Esto es otro titulo</h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quos aperiam magnam, praesentium necessitatibus dicta eveniet vitae consequuntur voluptatibus maiores dolor quisquam. Cupiditate, qui? Cum minus natus nulla <strong>laboriosam inventore</strong>";
//Insertar elemento en el DOM
document.body.appendChild(miParrafo);
//Seleccion elemento
let seccion1 = document.getElementById("seccion1");
seccion1.appendChild(miParrafo);


