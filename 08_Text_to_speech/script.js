let speech = new SpeechSynthesisUtterance();
let voices =[];
let voiceSelect = document.getElementById('voiceSelect');

const listenBtn = document.getElementById('listenBtn')
const pauseBtn = document.getElementById('pauseBtn')
const charCount = document.getElementById('charCount')
const input = document.getElementById('textInput')

input.addEventListener('keyup', () => {
    let text = input.value;
    let count = text.trim().length;
    charCount.innerHTML = `${count}`
})

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
}

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})

listenBtn.addEventListener('click', () => {
    speech.text = document.getElementById('textInput').value;
    window.speechSynthesis.speak(speech)
    listenBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
})

pauseBtn.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    listenBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
})