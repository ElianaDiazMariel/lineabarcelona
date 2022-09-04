const formulario = document.querySelector("#contactForm")
const inputNombres = document.querySelector("#InputName")
const inputEmail = document.querySelector ("#InputEmail")
const inputTelefono = document.querySelector("#InputPhone")
const inputMensaje = document.querySelector("#ControlTextarea")

console.log(formulario, inputNombres, inputEmail , inputTelefono, inputMensaje)

const clientes = [] 
    class cliente {
        constructor (nombre, email, telefono, mensaje){
            this.nombre = nombre;
            this.email = email;
            this.telefono = telefono;
            this.mensaje = mensaje;
        }
    }

    const convertirAJSONYSubirAlLS = (clave, valor) => {
        const arrayAJSON = JSON.stringify(valor)
       localStorage.setItem(clave, arrayAJSON)
    }





formulario.onsubmit = (event) => {
    clientes.push(new cliente(inputNombres.value, inputEmail.value, inputMensaje.value))
    swal("Formulario enviado con éxito","nos contactaremos a la brevedad");
    formulario.reset() 
    convertirAJSONYSubirAlLS("clientes", clientes) 
    console.log(clientes)
}
