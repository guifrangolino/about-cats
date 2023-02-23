const btn = document.querySelector('.btn')
const texto = document.querySelector('.area-fato p')
const textoArea = document.querySelector('.area-fato')
const catGif = document.querySelector('.cat-gif')
const meowAudio = new Audio()
meowAudio.src = './assets/meow-sound.mp3'
meowAudio.volume = 0.2;

btn.addEventListener('click', () => {
    meowAudio.play()
    fetch('https://catfact.ninja/fact')
    .then(resp => resp.json())
    .then(data => {
            texto.innerHTML = data.fact
            textoArea.style.display = 'Block'
            catGif.style.display = 'none'

            btn.disabled = true;
            setTimeout(function(){
                btn.disabled = false;
            }, 500);
        })
})