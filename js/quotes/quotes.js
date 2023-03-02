import locale from "../settings.js";

const quoteDisplay = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const changeQuoteButton = document.querySelector('.change-quote');

async function getQuotes() {
    const quotes = `./js/quotes/quotes_${locale.substring(0, 2)}.json`;
    const res = await fetch(quotes);
    const data = await res.json();

    const randomQuoteNum = Math.ceil(Math.random() * data.length);
    quoteDisplay.textContent = data[randomQuoteNum].quote;
    quoteAuthor.textContent = data[randomQuoteNum].author;
}

changeQuoteButton.addEventListener('click', getQuotes);

export default getQuotes;