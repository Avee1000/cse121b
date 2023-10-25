export const quoteElement = document.getElementById("quotes");
export let quoteList = {};

export const blackBox = () => {
    
    const article = document.createElement("article");
    article.style.backgroundColor = "black";
    article.style.padding = "50px";
    article.style.margin = "10px";
    article.style.borderRadius = "25px";
    article.style.minHeight = "100px";
    article.style.maxHeight = "200px";
    article.style.color = 'white'
    article.style.textAlign = "center";
    article.style.fontFamily = "Belanosima";
    article.innerHTML = `Click on the "Generate a Quote" Below`;

    quoteElement.appendChild(article);
    return article;
}

export const displayRandomQuote = () => {

    console.log(quoteList);
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    const quoteText = quoteList[randomIndex].quote;

    const h2 = document.createElement("h2");
    h2.innerHTML = `<p><strong> "${quoteText}"</strong></p>`;
    h2.style.textAlign = "center";
    h2.style.position = "relative";
    h2.style.bottom = "55px";
    h2.style.color = "white";

    const words = quoteList[randomIndex].quote.split(' ');
    if (words.length > 20 && words.length < 100) {
        h2.style.fontSize = "18px";
    } else if (words.length > 30 && words.length < 100) {
        h2.style.fontSize = "11px";
    }

    const h3 = document.createElement("h3");
    let autho = quoteList[randomIndex].author;
    // if (autho === "type.fit") {
    //     autho = "Anonymous";
    // }
    // else {
    //     const typeFitIndex = autho.indexOf(", type.fit");
    //         autho = autho.substring(0, typeFitIndex).trim(); // Extract only the author's name
    // }
    h3.innerHTML = `<strong> - ${autho}`;
    h3.style.color = "white";
    h3.style.textAlign = "right";
    h3.style.position = "relative";
    h3.style.bottom = "45px";

    const copyButton = document.getElementById("nav2");
    copyButton.addEventListener("click", function() {
        copyQuoteToClipboard(quoteText);
    });

    const art = blackBox();
    art.innerHTML = '';
    art.append(h2, h3);
 
    quoteElement.querySelector("article").replaceWith(art);
    // quoteElement.innerHTML = ''; 
};

export const getQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes?limit=0&skip=10");

    if (response.ok) {
        const jsonData = await response.json();
        quoteList = jsonData.quotes;

        displayRandomQuote();
    }
};

function copyQuoteToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                document
                alert("Quote copied to clipboard.");
            })
            .catch(error => {
                console.error("Failed to copy text. ");
            });
    } else {

        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Quote copied to clipboard." );
    }
}


