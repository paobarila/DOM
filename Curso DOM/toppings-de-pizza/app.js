//metodos para seleccionar elementos//

const contenedor=document.getElementById("contenedor");
console.log(contenedor);
console.log(typeof contenedor);
console.log(contenedor.innerHTML);
console.log(contenedor.innerText);
console.log(contenedor.tagName);

const titulo=document.getElementById("titulo");
console.log(titulo);
console.log(typeof titulo);
console.log(titulo.innerHTML);
console.log(titulo.innerText);
console.log(titulo.tagName)

const toppings= document.getElementsByClassName("topping");
console.log(toppings)
console.log(toppings.length)
console.log(toppings[1])
console.log(toppings[1].id)

const misToppings=document.getElementsByTagName("li");
console.log(misToppings);
console.log(misToppings.length);

//metodo querySelector//
const aceitunas=document.querySelector('#aceitunas')
console.log(aceitunas)

const primerToppingNaranja=document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);
console.log(typeof primerToppingNaranja);

const primerTopiingNoMarron=document.querySelector('ul li:not(.fondo-marron)');
console.log(primerTopiingNoMarron);

const todosNaranja=document.querySelectorAll('.fondo-naranja');
console.log(todosNaranja);
console.log(todosNaranja.length);
console.log(todosNaranja[1]);

//modificar los estilos en linea//
const primerTopping=document.querySelector('.topping');
console.log(primerTopping);
console.log(primerTopping.style);

primerTopping.style.backgroundColor='blue';
primerTopping.style.textTransform='uppercase';

//modificar texto con DOM//

const listaToppings=document.getElementById('lista');
console.log(listaToppings)
console.log('> InnerText');
console.log(listaToppings.innerText);
console.log('> TextContent');
console.log(listaToppings.textContent);
console.log('> InnerHTML');
console.log(listaToppings.innerHTML);

const tituloModif=document.getElementById('titulo');
console.log(tituloModif);
console.log(tituloModif.innerText);

tituloModif.innerText='Elige tu Topping favorito';

//trabajar con los atributos de un elemento//

const enlace=document.getElementsByTagName('a')
console.log(enlace[65].getAttribute('href')); //mostrar atributo//
console.log(enlace[65].setAttribute('href',"https://www.freecodecamp.org")); //cambiar atributo //