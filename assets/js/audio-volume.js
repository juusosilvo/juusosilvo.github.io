let audio;

function pause_music() {

    audio = document.getElementById("music");
    audio.pause(); 
    
}

function play_music(){

    audio = document.getElementById("music");
    audio.play();
    audio.volume = 0.1; 
    
}

function restart_music(){

    audio = document.getElementById("music");
    audio.currentTime = 0;

}