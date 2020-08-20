const keys = document.querySelectorAll('.key');
const audioTracks = document.querySelectorAll('.audio');

function highlight(){
    keys.forEach((key) => key.classList.remove('highlighted'));
    this.classList.add('highlighted');
}

function playAudio(){
    audioTracks.forEach((track) => {
        if(!track.paused){
            track.pause();
            track.load();
        } 
    });
    document.getElementById('audio-' + this.getAttribute('id')).play();
}

keys.forEach((key) => {
    key.addEventListener('click', highlight);
    key.addEventListener('click', playAudio);
});

document.addEventListener('keypress', function(event){
    if(document.getElementById(event.code)){
        highlight.call(document.getElementById(event.code));
        playAudio.call(document.getElementById(event.code));
    }
});
