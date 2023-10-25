export const quoteElement = document.getElementById("quotes");
export let quoteList = [];

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

export const displayRandomQuote = (said) => {

    console.log(said);
    const randomIndex = Math.floor(Math.random() * said.length);
    const quoteText = said[randomIndex].quote;

    const h2 = document.createElement("h2");
    h2.innerHTML = `<p><strong> "${quoteText}"</strong></p>`;
    h2.style.textAlign = "center";
    h2.style.position = "relative";
    h2.style.bottom = "55px";
    h2.style.color = "white";

   
    
    function handleMediaQueryChange(mediaQuery) {
        if (mediaQuery.matches) {
            const words = said[randomIndex].quote.split(' ');
            if (words.length > 12) {
                h2.style.fontSize = "3px";
                h3.style,fontSize = "30%"
            } else if (words.length > 30) {
                h2.style.fontSize = "2px";
            } else if (words.length > 40) {
                h2.style.fontSize = "1px";
            }
        } else {
            const words = said[randomIndex].quote.split(' ');
            if (words.length > 20 && words.length < 100) {
                h2.style.fontSize = "18px";
            } else if (words.length > 30 && words.length < 100) {
                h2.style.fontSize = "11px";
            } else if (words.length > 40) {
                h2.style.fontSize = "8px";
            }
        }
    }
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    handleMediaQueryChange(mediaQuery);

    const h3 = document.createElement("h3");
    let autho = said[randomIndex].author;
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
    h3.style.bottom = "50px";

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
    const response = await fetch("https://dummyjson.com/quotes?limit=0&skip=50");

    if (response.ok) {
        const jsonData = await response.json();
        quoteList = jsonData.quotes;
        displayRandomQuote(quoteList);
    }
};

export const search = (said) => {

}


function copyQuoteToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => {
                document
                showAlert("Quote copied to clipboard.", 1000);
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

function showAlert(message, duration) {
    const alertDiv = document.createElement("div");
    alertDiv.id = "alert";
    alertDiv.textContent = message;
    alertDiv.style.position = "fixed";
    alertDiv.style.bottom = "10px";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translateX(-50%)";
    alertDiv.style.backgroundColor = "#d4515c";
    alertDiv.style.opacity = "0.8";
    alertDiv.style.color = "white";
    alertDiv.style.padding = "10px";
    alertDiv.style.borderRadius = "20px";
    alertDiv.style.fontFamily = "Belanosima"

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        document.body.removeChild(alertDiv);
    }, duration);
}