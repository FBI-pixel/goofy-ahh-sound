function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1]
    const idAudio = "#som_"+efeito
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    }
    contador = contador + 1;
    console.log(contador);
}