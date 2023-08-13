const datos ={
    nombre:'',
    email:'',
    mensaje:''

}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const mensaje= document.querySelector('#mensaje');


nombre.addEventListener('input',leerTexto);

email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);





const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
evento.preventDefault();


//Validar Formulario

const {nombre,email,mensaje} =datos;



if(nombre===''||email===''||mensaje===''){

    console.log(nombre);
    console.log(email);
    console.log(mensaje);


    mostrarError('Todos los campos son obligatorios')

    return; 
}

mostrarMensaje('Formulario enviado');
});

//FUNCIONES

function mostrarMensaje(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');

    formulario.appendChild(alerta);


    setTimeout(()=>{  //Remover Cartel
        alerta.remove();
    },5000);

}


function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);


    setTimeout(()=>{  //Remover Cartel
        error.remove();
    },5000);

}

function leerTexto(e){
    datos[e.target.id] = e.target.value;

}

