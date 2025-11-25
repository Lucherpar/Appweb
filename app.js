function validarDatos(e){
    //Suspender el envio de datos al servidor
    //Pero manteniendo la validación en el FROM HTML
    e.preventDefault()

    //alert("hola")
    const txtJugador = document.getElementById("txtJugador")
    //alert(txtJugador.value)

    //Validaciones mediante EXPRESIONES REGULARES (RegEx)
    if(!txtJugador.value.match(/[a-z]/) || !txtJugador.value.match(/[A-Z]/) || !txtJugador.value.match(/\d/)){
        Swal.fire({
            title: "Error!!!",
            text: "Error de validación",
            icon: "error"
        });
        document.getElementById("mensaje").style.display = "block"
    }else {
        //TODO BIEN VALIDADO
        Swal.fire({
            title: "Bienvenido!!",
            text: txtJugador.value,
            icon: "success"
        });
        document.getElementById("mensaje").style.display = "none"
    }

}
function cambiarImagen(){
    const imgVini = document.getElementById("imgVini")
    const correVini = document.getElementById("correVini")

    if(imgVini.src.includes("vini1")){
        imgVini.src = "img/vini2.jpeg"
        correVini.innerText ="On, no!"
        correVini.style.color = "red"
    }else{
        imgVini.src = "img/vini1.jpeg"
        correVini.innerText ="Winner!"
        correVini.style.color = "green"
    }
}