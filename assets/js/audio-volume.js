let audio;

function pause_music() {
    audio = document.getElementById("music");
    audio.pause();   
}

function play_music(){
    audio = document.getElementById("music");
    audio.play();
    audio.volume = 0.1; 
    play_music.called = true;   
}

function restart_music(){
    audio = document.getElementById("music");
    audio.currentTime = 0;
}

document.addEventListener("visibilitychange", event => {
    if (document.visibilityState === "hidden" && play_music.called) {

      pause_music();
      document.title = "Music paused!";
      play_music.called = false;

    }
    else if(document.visibilityState === "visible"){

        document.title = "Juuso.computer | Computer & electronics work | Juuso Silvo | Tietokone ja elektroniikka harrastaja";

    }
})