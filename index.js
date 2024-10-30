// Get DOM elements
const song = document.getElementById('song');
const musicRange = document.getElementById('music-range');
const playBtn = document.getElementById('play-btn');
const playPauseBtn = document.getElementById('play-pause');

// Set initial max value for the range input
musicRange.max = song.duration;

// Update the range input value when the song metadata is loaded
song.onloadedmetadata = function () {
    musicRange.max = song.duration; // Set the maximum value based on song duration
    musicRange.value = song.currentTime; // Initialize the range input value
}

// Play/Pause button event listener
playBtn.addEventListener('click', () => {
    if (playPauseBtn.classList.contains('fa-play')) {
        song.play(); // Play the song
        playPauseBtn.classList.add('fa-pause'); // Change button icon to pause
        playPauseBtn.classList.remove('fa-play');
    } else {
        song.pause(); // Pause the song
        playPauseBtn.classList.remove('fa-pause'); // Change button icon to play
        playPauseBtn.classList.add('fa-play');
    }
});

// Reset play button icon when the song ends
song.addEventListener('ended', () => {
    playPauseBtn.classList.remove('fa-pause');
    playPauseBtn.classList.add('fa-play');
});

// Update the range input to reflect current time every 500ms
setInterval(() => {
    if (!song.paused) {
        musicRange.value = song.currentTime;
    }
}, 500);

// Seek the song when the range input value changes
musicRange.addEventListener('input', () => {
    song.currentTime = musicRange.value; // Update current time based on range input
});
