const button = document.getElementById('button');
const text = document.getElementById('text');

button.addEventListener('click',function(e){
    e.preventDefault();

    const speech = new SpeechSynthesisUtterance(text.value);
    window.speechSynthesis.speak(speech);

})