function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]
    const idAudio = ´#som_$(efeito)´;
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}