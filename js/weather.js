import locale from "./settings.js";
import i18n from "./i18n.js";
import { saveData } from "./dataManager.js";

const apiKey = '';

const weatherIcon = document.querySelector('.weather-icon');
const temperatureDisplay = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windDisplay = document.querySelector('.wind');
const humidityDisplay = document.querySelector('.humidity');

const cityField = document.querySelector('.city');

cityField.addEventListener('change', () => {
    getWeather();
    saveData(cityField, 'city');
});

async function getWeather() {
    const lang = locale.substring(0, 2);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityField.value}&lang=${lang}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    checkGetStatus(res.status);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperatureDisplay.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windDisplay.textContent = `${i18n.windSpeed[locale]} ${Math.round(data.wind.speed)}: ${i18n.speedDimension[locale]}`;
    humidityDisplay.textContent = `${i18n.humidity[locale]}: ${data.main.humidity}%`
}

function checkGetStatus(status) {
    if (status === 404) {
        alert(i18n.wrongCityFieldWarning[locale]);
    } else if (status === 400) {
        alert(i18n.emptyCityFieldWarning[locale]);
    }
}

export {getWeather, cityField};
