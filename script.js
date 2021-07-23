//EVENTOS//


document.body.addEventListener('keydown', (event)=>{// no body evento de pressionar a tecla e vai para uma função
    playSound(event.code.toLowerCase());  // .code pega o código da tecla pressionada, mudando para lowercase, 
                            //para ficar mais facil de manipular essa informação
}); 

document.querySelector('.composer button').addEventListener('click',() =>{
    let song = document.querySelector('#input').value;

    if (song !== ''){
            let songArray = song.split('');
            playComposition(songArray);
    }


});

// FIM DE EVENTOS//

//FUNÇÔES//

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);// com essa ` consigo montar uma variavel
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);                                                        //dinamica, ela tem uma parte fixa e outra
                                                            // variavel
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play(); //.play executa o som
    }            
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
    }                                           
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
        playSound(`key${songItem}`);
    },wait);
    wait+=250;
    }
}