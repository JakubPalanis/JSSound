document.addEventListener('DOMContentLoaded', function () {
    const audioFileInput = document.getElementById('audio-file');
    const playButton = document.getElementById('play-button');
    const gridContainer = document.getElementById('grid-container');

    createGrid(6, 6);

    let wavesurfer;

    function createGrid(rows, cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const square = document.createElement("div");
                square.classList.add("coloredSquare");
                gridContainer.appendChild(square);
            }
            gridContainer.appendChild(document.createElement("br"));
        }
    }

    function initWaveSurfer() {
        wavesurfer = WaveSurfer.create({
            container: '#grid-container',
            waveColor: 'transparent', 
            progressColor: 'transparent'
        });

    }

    function loadAudioFile() {
        const file = audioFileInput.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            wavesurfer.load(url);
        }
    }
 
    
    playButton.addEventListener('click', function () {
        wavesurfer.playPause();
    });

    audioFileInput.addEventListener('change', function () {
        loadAudioFile();
    });

    initWaveSurfer();
});