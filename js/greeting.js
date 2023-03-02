import i18n from "./i18n.js";
import locale from "./settings.js";
import getTimeOfDay from "./timeOfDay.js";

const greetingDisplay = document.querySelector('.greeting');

export default function showGreeting() {
    greetingDisplay.textContent = i18n.greetings[getTimeOfDay()][locale];
}