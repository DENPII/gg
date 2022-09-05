'use strict';
function generoEvento(){
    alert('Preciono el boton');
}
function EventoMouse(){
    console.log('mouse');
}
//Evento por propiedad
const btnPropiedad=document.getElementById('btnPropiedad');

btnPropiedad.onclick=function(){
    const nombre=document.getElementById('nombre').value;
    const apellido=document.getElementById('apellido').value;
    const promedio=document.getElementById('promedio').value;
    const tipo=document.getElementById('tipo').value;

    if (!inNaN(parseFloat(promedio))){
        console.log(``);
        console.log(promedio);
    }else{
        console.log("invalid");
    }
    //alert('Click generado por propiedad');
}
//Evento por el metodo addEventListener
const inputName=getElementById('nombre');

inputName.addEventListener('click',()=>{
    alert('click');
});