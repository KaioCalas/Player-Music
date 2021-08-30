// Variavéis
let musicas = [
    {titulo:'Elevators Need Rock Too', artista: 'Spence', src:'musicas/Elevators Need Rock Too - Spence.mp3', img:'imagens/rock1.jpg'},
    {titulo:'Asleep With the Sun', artista: 'Unicorn Heads', src:'musicas/Asleep with the Sun - Unicorn Heads.mp3', img:'imagens/rock2.jpg'},
    {titulo:'Ginormous Robots', artista: 'Nathan Moore', src:'musicas/Ginormous Robots - Nathan Moore.mp3', img:'imagens/rock3.jpg'}
];

let music = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusic = document.querySelector('.end');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


// Eventos
 document.querySelector('.button-play').addEventListener('click', tocarMusica);

 document.querySelector('.button-pause').addEventListener('click', pausarMusica);

 music.addEventListener('timeupdate', updateBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funções

function renderizarMusica(index){
    music.setAttribute('src', musicas[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusic.textContent = segundosParaMinutos(Math.floor(music.duration));
    });
}


function tocarMusica(){
    music.play();
    document.querySelector('.button-pause').style.display="block";
    document.querySelector('.button-play').style.display="none";
}

function pausarMusica(){
    music.pause();
    document.querySelector('.button-play').style.display="block";
    document.querySelector('.button-pause').style.display="none";

}

function updateBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + "%";
    let tempoDecorrido = document.querySelector('.start');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

