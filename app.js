// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let numero = 0
let sorteados =[]

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo==""){
        alert("Por favor, inserte un nombre");
    } else if(amigos.includes(nombreAmigo)){
            alert("Por favor, inserte otro nombre, ese ya fue ingresado");
            document.getElementById('amigo').value='';
        } else {
            amigos.push(nombreAmigo);
            numero++
            listaDeAmigos()
            document.getElementById('amigo').value='';
            console.log(amigos)
        }
    }

function listaDeAmigos(){
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML="";

    for (let i=0; i<amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent= amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length===0){
        alert("No hay amigos en la lista para sortear.");
        return
        } else if (amigos.length<4){
            let Julian = amigos.length
            alert(`Ay Julian, ${(Julian === 1) ? 'eres' : 'somos'} ${Julian}, ni al caso`)
            return
        } 

        let indiceAleatorio = Math.floor(Math.random()*amigos.length)
        let amigoSorteado = amigos[indiceAleatorio]

        if (sorteados.length==numero) {
            asignarTexto('resultado','Ya salieron todos los nombres');
            return

        } else {
            //Si el nombre sorteado ya salió 
            if (sorteados.includes(amigoSorteado)) {
                return sortearAmigo();
            } else {
                var lista = document.getElementById('listaAmigos');
                lista.innerHTML="";
                sorteados.push(amigoSorteado);
                asignarTexto('resultado',amigoSorteado)
                return amigoSorteado;
            }
        }
}

function asignarTexto (elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

