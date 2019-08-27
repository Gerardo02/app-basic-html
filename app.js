
const buttons = document.querySelectorAll('button');
//const audio = document.getElementById("AudioDo");
const sound = new Audio();
sound.src = "audio/Do.mp3";

const playnote = event =>{
    console.log(event.target.dataset.note);
    
}
buttons.forEach(
    button => button.addEventListener('click', playnote)
    
);