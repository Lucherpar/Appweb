//Creamos Array de jugadores vacia
let players = null

function GetPlayers(){
    fetch("players.json")
        .then(function(resp){
            return resp.json()
        }).then(function(respJSON){
            players = respJSON
        }).catch(function(error){
            console.log(error)
        })
}

        //cargar jugadores desde el JSON
GetPlayers()

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
            text: "El nombre del jugador no es correcto",
            icon: "error"
        });
        document.getElementById("mensaje").style.display = "block"
        document.getElementById("mensajeAlta").style.display = "none"
    }else {
        //TODO BIEN VALIDADO
        //Búsqueda del jugador en el array de jugadores
        for(let player of players){
            if(player.nombre == txtJugador.value){
                //Encontrado jugador
                    Swal.fire({
                        title: "Error!!!",
                        text: "El jugador ya existe en el registro de jugadores. No lo puedo dar de alta",
                        icon: "error"
                    });
                    document.getElementById("mensajeAlta").style.display = "none"
                break
            }else{
                //No existe el jugador
                Swal.fire({
                    title: "Bienvenido!!",
                    text: txtJugador.value,
                    icon: "success"
                });
                document.getElementById("mensajeAlta").style.display = "block"
                document.getElementById("mensaje").style.display = "none"
            }
        }
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
