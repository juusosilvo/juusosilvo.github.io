function pause_music() {
    audio = document.getElementById("music");
    audio.pause();   
}

function play_music(){
    audio = document.getElementById("music");
    audio.play();
    audio.volume = 0.6; 
    play_music.called = true;
}

document.addEventListener("visibilitychange", event => {
    if (document.visibilityState === "hidden" && play_music.called) {
        pause_music();
        play_music.called = false;
    }
    else if(document.visibilityState === "visible"){
        change_volume(0.6);
    }
})
