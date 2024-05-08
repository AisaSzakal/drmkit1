function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log('Audio element:', audio);
    console.log('Key element:', key);
    if (!audio) return; // Stops the function from running for keys without associated audio.
    audio.currentTime = 0; // Rewind to the start.
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform.
    console.log('Transition ended:', e.target);
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
console.log('Keys:', keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



