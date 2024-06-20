// script.js

// Obtener el iframe del video
const videoFrame = document.getElementById('videoFrame');

// Detectar cuando el video termina
videoFrame.addEventListener('ended', function() {
    // Reiniciar el video
    videoFrame.src = videoFrame.src.replace('&autoplay=1', '') + '&autoplay=1';
});
