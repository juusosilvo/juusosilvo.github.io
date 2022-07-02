function mute() {
    var audio = document.getElementById("music");
    audio.volume = 0.0; 
    document.getElementById("playing").textContent = "";
}

function unmute(){
    var audio = document.getElementById("music");
    audio.play();
    audio.volume = 0.1;  
    document.getElementById("playing").textContent = "now playing: canti - human music";
}