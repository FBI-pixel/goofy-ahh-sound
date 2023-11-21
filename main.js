function tocaSom(idElementoAudio){
    const elemento = document.querySelector (idElementoAudio);
    if (elemento && elemento.lcalName === 'audio'){
        elemento.play();
    }else{
        console.log("elemento invalido ou não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0;contador < listaDeTeclas.length;contador++){
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]
    const idAudio = '#som_$(efeito)';
    tecla.onclick = function(){
        tocaSom(idAudio)
    }
    tecla.onkeydown = function (evento){
      if (evento.code === 'space' || evento.code === 'enter'){
        tecla.classList.add('ativa');
      }
    }
      tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
      }
          
}