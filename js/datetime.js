import showGreeting from './greeting.js';
import locale from './settings.js';

const timeDisplay = document.querySelector('.time');
const dateDisplay = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString(locale);
    timeDisplay.textContent = currentTime;

    showDate();
    showGreeting();

    setTimeout(showTime, 1000);
}

function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const currentDate = date.toLocaleDateString(locale, options);

    dateDisplay.textContent = currentDate;
}

export default showTime;