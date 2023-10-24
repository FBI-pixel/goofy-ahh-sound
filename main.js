function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0;

while(contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador + 1;
    console.log(contador);
}