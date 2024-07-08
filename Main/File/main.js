
const list = document.querySelector('.list2');
const musicList = document.querySelector('.music')

list.addEventListener('click', ()=>{
    list.classList.add("pl");
    musicList.classList.remove("pl");
});
musicList.addEventListener('click', ()=>{
    list.classList.remove("pl");
    musicList.classList.add("pl");
});


///music list ///


const lock = document.querySelector('#lock');
const unlock = document.querySelector('#unlock');

lock.addEventListener('click', ()=>{
    lock.classList.add("pl");
    unlock.classList.remove("pl");
});
unlock.addEventListener('click', ()=>{
    lock.classList.remove("pl");
    unlock.classList.add("pl");
});


/// lock close 


const play = document.querySelector('.play');
const puse = document.querySelector('.puse');

play.addEventListener('click', ()=>{
    play.classList.add("pl");
    puse.classList.remove("pl");
});

puse.addEventListener('click', ()=>{
    play.classList.remove("pl");
    puse.classList.add("pl");
});

/// play puse close 

let song = document.querySelector('#song');
let progres = document.querySelector('#range');

song.onloadedmetadata = function(){
   progres.max = song.duration;
   progres.Value = song.currentTime;
};

function playpause(){
    if (puse.innerHTML = puse) {
        song.pause();
    } else {
      song.play();  
      };

if (song.play()){
    setInterval(()=>{
       progres.value = song.currentTime; 
    }, 500);
}

