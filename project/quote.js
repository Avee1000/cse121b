import {blackBox, displayRandomQuote, getQuotes, quoteElement} from "./modules/quote-generator.js";
import {darkMode} from "./modules/dark-mode.js";

document.querySelector("#button").addEventListener("click", () => {
    getQuotes();
});

blackBox();

document.querySelector("#nav1").addEventListener("click", () => {
    darkMode();
})
