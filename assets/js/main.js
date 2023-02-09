function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++ ) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;    //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //onkeydown é quando a tecla do mouse é apertada
    tecla.onkeydown = function (evento) { //estudar class e event

        console.log(evento.code)
        if (evento.code === 'Tab'){
            tecla.classList.add('ativa');
        }
        
    }
    //onkeyup quando a tecla do mouse é solta
    tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        
    }
}