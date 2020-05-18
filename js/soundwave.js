var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});
wavesurfer.load('../wav/DPG.wav');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});