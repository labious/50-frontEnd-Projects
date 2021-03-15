const sounds = ['Begin','Affirmative','verified','Authorization-code','Incoming','processing','Warning','Complete'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;
    btn.addEventListener('click',() => {
        stopSounds();
        document.getElementById(sound).play();
    })
    document.getElementById('buttons').appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => {
        const sounde = document.getElementById(sound);

        sounde.pause();
        sounde.currentTime = 0;
    })
}