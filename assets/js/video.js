
    var autoPlayVideo = document.getElementById("bvideo");
    autoPlayVideo.oncanplaythrough = function() {
        autoPlayVideo.muted = true;
        autoPlayVideo.play();
        autoPlayVideo.pause();
        autoPlayVideo.play();
        autoPlayVideo.muted = false;
    }
