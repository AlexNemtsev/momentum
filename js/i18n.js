const i18n = {
    'greetings': {
        'morning': {
            'ru-RU': 'Доброе утро, ',
            'en-Br': 'Good morning, '
        },
        'afternoon': {
            'ru-RU': 'Добрый день, ',
            'en-Br': 'Good afternoon, '
        },
        'evening': {
            'ru-RU': 'Добрый вечер, ',
            'en-Br': 'Good evening, '
        },
        'night': {
            'ru-RU': 'Доброй ночи, ',
            'en-Br': 'Good night, '
        }
    },
    'namePlaceholder': {
        'ru-RU': '[Введите имя]',
        'en-Br': '[Enter name]'
    },
    'defaultCity': {
        'ru-RU': 'Минск',
        'en-Br': 'Minsk'
    },
    'emptyCityFieldWarning': {
        'ru-RU': 'Вы не ввели название города!',
        'en-Br': 'You have not entered the city name!'
    },
    'wrongCityFieldWarning': {
        'ru-RU': 'Вы ввели неправильное название города!',
        'en-Br': 'You have entered a wrong city name!'
    },
    'windSpeed': {
        'ru-RU': 'Скорость ветра',
        'en-Br': 'Wind speed'
    },
    'speedDimension': {
        'ru-RU': 'м/с',
        'en-Br': 'm/s'
    },
    'humidity': {
        'ru-RU': 'Влажность',
        'en-Br': 'Humidity'
    }
}

// const langSelector = document.querySelector('#lang-select');
// console.log(langSelector);

// function handleFormSubmit(event) {
//     event.preventDefault();
//     console.log('click');
// }

// const langForm = document.querySelector('.right-panel>form');
// const { elements } = langForm;
// console.log(elements[0]['value']);

// langForm.addEventListener('')

// const enSelected = document.querySelector('#lang-select>option:nth-child(1)')
// enSelected.addEventListener('click', () => {
//     console.log(enSelected);
// });

export default i18n;