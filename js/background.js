import getTimeOfDay from "./timeOfDay.js";

const body = document.querySelector('body');
const slidePrevButton = document.querySelector('.slide-prev');
const slideNextButton = document.querySelector('.slide-next');

let randomNum = getRandomNum();

function getRandomNum() {
    return Math.ceil(Math.random() * 20);
}

export default function setBg() {
    const img = new Image();
    const timeOfDay = getTimeOfDay();
    const bgNum = `${randomNum}`.padStart(2, '0');

    img.src = `https://raw.githubusercontent.com/alexnemtsev/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/alexnemtsev/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
    };
}

function getSlideNext() {
    randomNum = randomNum === 20 ? 1 : randomNum + 1;
    setBg();
}

function getSlidePrev() {
    randomNum = randomNum === 1 ? 20 : randomNum - 1;
    setBg();
}

slidePrevButton.addEventListener('click', getSlidePrev);
slideNextButton.addEventListener('click', getSlideNext);