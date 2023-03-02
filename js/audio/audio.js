import playList from './playList.js';

const audio = new Audio();
const playButton = document.querySelector('.play');
const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
const playListItems = [];

let isPlay = false;
let trackNum = 0;

playList.forEach((el) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
    playListItems.push(li);
})

function playAudio() {
    audio.src = playList[trackNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;

    playListItems[trackNum].classList.add('item-active');

    if(audio.paused) {
        playNext();
    }
}

function pauseAudio() {
    audio.pause();
    isPlay = false;
}

function playPrev() {
    playListItems[trackNum].classList.remove('item-active');
    trackNum = trackNum === 0 ? playList.length - 1: trackNum - 1;
    playAudio();
    playButton.classList.add('pause');
}

function playNext() {
    playListItems[trackNum].classList.remove('item-active');
    trackNum = trackNum === playList.length - 1 ? 0 : trackNum + 1;
    playAudio();
    playButton.classList.add('pause');
}

playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);

playButton.addEventListener('click', () => {
    if (!isPlay) {
        playAudio();
    } else {
        pauseAudio();
    }
    playButton.classList.toggle('pause');
});

audio.addEventListener('ended', () => {
    playListItems[trackNum].classList.remove('item-active');
    trackNum = trackNum === playList.length - 1 ? 0 : trackNum + 1;
    playAudio();
});