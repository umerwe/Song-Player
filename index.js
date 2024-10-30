const song = document.getElementById('song');
const musicRange = document.getElementById('music-range');
const playBtn = document.getElementById('play-btn');
const playPauseBtn = document.getElementById('play-pause');
const startTime = document.getElementById('start-time');
const endTime = document.getElementById('end-time');

musicRange.max = song.duration;

song.onloadedmetadata = function () {
    musicRange.max = song.duration;
    musicRange.value = song.currentTime;
}

playBtn.addEventListener('click', () => {
    if (playPauseBtn.classList.contains('fa-play')) {
        song.play();
        playPauseBtn.classList.add('fa-pause');
        playPauseBtn.classList.remove('fa-play');

    }
    else {
        song.pause();
        playPauseBtn.classList.remove('fa-pause');
        playPauseBtn.classList.add('fa-play');
    }
});
song.addEventListener('ended', () => {
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');
})
if (song.play) {
    setInterval(() => {
        musicRange.value = song.currentTime;
    }, 500);
}

musicRange.addEventListener('change', () => {
    song.currentTime = musicRange.value;
})

