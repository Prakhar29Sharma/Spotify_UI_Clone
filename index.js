var isPlaying = false;
var replay = false;
document.querySelector("#play").addEventListener("click", function () {
    if(isPlaying === false) {
        document.querySelector("#audio").play();
        isPlaying = true;
    } else {
        document.querySelector("#audio").pause();
        isPlaying = false;
    }
});

document.querySelector()