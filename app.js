
const buttons = document.querySelectorAll('button');

const playnote = event =>{
    const button =event.target;
    const note = button.dataset.note;
    const audioId = `Audio${note}`;
    const audio = document.getElementById(audioId);
    //console.log(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(button => button.addEventListener('click', playnote));

const keyNoteDown = event =>{

    const key = event.key;
}

document.addEventListener('keydown', keyNoteDown);