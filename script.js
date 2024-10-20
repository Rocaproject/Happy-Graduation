function play() {
    var audio = document.getElementById('myAudio');
    audio.loop = true; // Atur audio untuk loop
    audio.play().then(function() {
        console.log('Audio is playing.');
    }).catch(function(error) {
        console.error('Playback failed:', error);
    });
}

// Jalankan fungsi play ketika halaman dimuat
window.addEventListener('load', play);