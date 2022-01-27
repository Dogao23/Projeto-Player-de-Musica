let musicas = [
   { titulo: 'Black charme', artista:'Young thug', src:'imagens/musicas/X2Download.com - Young Thug _With That_ featuring Duke (128 kbps).mp3',
       img:'imagens/notas-da-musica-de-fundo-vector_21-1893.jpg'},

   { titulo: 'Black charme', artista:'Roddy Rich', src:'imagens/musicas/y2meta.com - Roddy Ricch - Down Below [Official Music Video] (Dir. by JMP) (128 kbps).mp3',
       img:'imagens/notas-da-musica-de-fundo-vector_21-1893.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i')


renderizarMusica(indexMusica);


//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 1;
    }
 renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 1){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

//Funçoes
function renderizarMusica(index) {
   musica.setAttribute('src', musicas[index].src);
   musica.addEventListener('loadeddata', () =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
       });
}


function tocarMusica () {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/ musica.duration) * 100) + '%';
   let tempoDecorrido = document.querySelector('.inicio');
   tempoDecorrido.textContent =segundosParaMinutos( Math.floor(musica.currentTime));
}

function segundosParaMinutos (segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10 ){
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos+':'+campoSegundos;
}



























