export let isDarkMode = false;

export const darkMode = () => {
    if (isDarkMode) {
        const header = document.getElementById("header");
        header.style.backgroundColor = "";

        const i = document.getElementById("home");
        i.style.color = ""

        const  f= document.getElementById("home1");
        f.style.color = ""
    
        const nav = document.getElementById("nav1");
        nav.style.backgroundColor = "";

        document.getElementById("nav1").style.color = ""

        document.getElementById("nav2").style.backgroundColor = ""

        document.getElementById("background1").style.backgroundColor = "";

        document.getElementById("background2").style.backgroundColor = "";

        document.getElementById("button").style.color = "";

        const button = document.getElementById("button");
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = ""; 
            button.style.color = ""; 
        });

        document.getElementById("footer").style.backgroundColor = "";

        document.getElementById("footer").style.color = "";

        document.getElementById("body").style.backgroundImage = ""; 

    } else {
        document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.8)";

        document.getElementById("home").style.color = "white"

        document.getElementById("nav2").style.backgroundColor = "black"

        document.getElementById("home1").style.color = "white"

        document.getElementById("nav1").style.backgroundColor = "black"
    
        document.getElementById("nav1").style.color = "black";

        document.getElementById("background1").style.backgroundColor = "rgba(0, 0, 0, 0.9)";

        document.getElementById("background2").style.backgroundColor = "#aeaeae";

        document.getElementById("button").style.color = "#F1FAEE";

        const button = document.getElementById("button");
        button.addEventListener("mouseover", function() {
            button.style.backgroundColor = "#25418f"; 
            button.style.color = "black"; 
        });

        document.getElementById("footer").style.backgroundColor = "rgba(0, 0, 0, 1.5)";

        document.getElementById("footer").style.color = "#F1FAEE";

        document.getElementById("body").style.backgroundImage = "url('https://avee1000.github.io/cse121b/project/images/black1.jpg')"; 

        document.getElementById("body").style.backgroundSize = "120%";

        document.getElementById("body").style.backgroundPosition = "center";

        function handleMediaQueryChange(mediaQuery) {
            if (mediaQuery.matches) {
                document.getElementById("body").style.backgroundImage = "url('https://avee1000.github.io/cse121b/project/images/darkphone.jpg')"; 
            } else {
                document.getElementById("body").style.backgroundImage = "url('https://avee1000.github.io/cse121b/project/images/black1.jpg')"; 
            }
        }
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        
        handleMediaQueryChange(mediaQuery);

    }
    isDarkMode = !isDarkMode;
}

