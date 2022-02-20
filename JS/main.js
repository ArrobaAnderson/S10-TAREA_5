const contenido=document.getElementById("contenido");

// contenido.innerHTML = "Hola Programadores";

let nombre = "Anderson Arroba";
let edad = 21;

//contenido.innerHTML = `<h2>${nombre}</h2>`;
//contenido.innerHTML += `<h3>${edad}</h3>`;

let edades = [23, 45, 2, 42, 89];
//console.log(edades.length);

//let array = [23, 45, 2, 42];
//console.log(array[2]);

addContent(`<h2>${nombre}</h2><h3>${edad}</h3>`);

for(let i = 0; i < edades.length; i++){
    // console.log(i);
    //contenido.innerHTML += `<h3>La edad es de ${i}</h3>`;
    addContent(`<h3>La edad es de ${edades[i]} años</h3>`)
}

function addContent(newContent){
    //revisar todo los cambios en consola
    //console.log(newContent)
    contenido.innerHTML += newContent;
}


// if(edad > 18){
//     alert("Puedes entrar en la disco");
// }else if(edad > 13){
//     alert("Puedes entrar con un adulto");
// }else{
//     alert("No puedes entrar")
// }

// let condition = 1<4;
// if(condition){
//     alert("Es true");
// }

// const COLOR_ROJO = "#FF0000"

// let resultado = "Nombre: " + nombre;

// alert(resultado);

// console.log(nombre);

// nombre = "Sheyla Saldaña";

// alert(nombre);

// console.log(nombre);