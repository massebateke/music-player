const musicContainer = document.querySelector('.music-container');//en gros ca affiche le txt de la classe donné ou le contenenu 
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

//Song title
const songs = ['hey','summer','ukulele'];

//Keep tracks of song
let songIndex = 2; //means thet ukulele is the default song

//Initially load song into the document object model
loadSong(songs[songIndex]);

//Update song details
function loadSong(song){
    title.innerText = song;//changement du titre du song en fonction de l'array
    audio.src = 'music/${song}.mp3';//chemin vers le song
    cover.src = 'images/${cover}.jpg';//ou song
}

function playSong(){
    musicContainer.classList.add('play')
}

function pauseSong(){

}




//Event listeners
playBtn.addEventListener('click', () => { //en gros si tu fais une action il ya une action
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying){
        pauseSong()
    } else {
        playSong()
    }
    
})