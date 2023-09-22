// const candies = ["chocolate", "caramel", "toffee"];
// const friends = [...candies];
// console.log(friends);

// let speed = 78;
// speed = 78-5;
// console.log(speed);

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

//select the *section* tag
const sect = document.querySelector("section");
//select the *p* tag
const para = document.createElement("p");
//create a new text inside
para.textContent = "we hope you enjoyed the ride";
//append the new text to the ending of the previously selected *section* tag
sect.appendChild(para);

//create a text node
const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);
//append
const linkPara = document.querySelector("p");
linkPara.appendChild(text);
linkPara.remove();