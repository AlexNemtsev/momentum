import './audio/audio.js';
import locale from './settings.js';
import i18n from './i18n.js';
import getQuotes from './quotes/quotes.js';
import { getWeather, cityField } from './weather.js'
import setBg from './background.js';
import { saveData, loadData } from './dataManager.js';
import showTime from './datetime.js';

const nameField = document.querySelector('.name');
nameField.placeholder = i18n.namePlaceholder[locale];

showTime();

window.addEventListener('beforeunload', () => saveData(nameField, 'name'));

window.addEventListener('load', () => {
    loadData(nameField, 'name', '');
    loadData(cityField, 'city', i18n.defaultCity[locale]);
    getWeather();
});

setBg();
getQuotes();
console.log('Выполненные пункты 1 - 6, оценка 85/150');