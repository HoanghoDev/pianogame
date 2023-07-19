let keyPiano = {
    "1" : 'audio/1.mp3',
    "2" : 'audio/2.mp3',
    "3" : 'audio/3.mp3',
    "4" : 'audio/4.mp3',
    "5" : 'audio/5.mp3',
    "6" : 'audio/6.mp3',
    "7" : 'audio/7.mp3',
    "8" : 'audio/8.mp3',
    "9" : 'audio/9.mp3',
    "0" : 'audio/10.mp3',
    "a" : 'audio/a.mp3',
    "b" : 'audio/b.mp3',
    "c" : 'audio/c.mp3',
    "d" : 'audio/d.mp3',
    "e" : 'audio/e.mp3',
    "f" : 'audio/f.mp3',
    "g" : 'audio/g.mp3'

}
document.addEventListener('keydown', 
(event) => playPiano(event.key));
function playPiano(key){
    audio = new Audio(keyPiano[key]); 
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    if(keyClick){
        keyClick.classList.add('active');
        const remmoveActive = setInterval(() => {
            keyClick.classList.remove('active')
        }, 500);
    }
}
let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', (e)=>{
        playPiano(key.dataset.key);
    })
})