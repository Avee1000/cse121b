const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    if (response.ok)
    {
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", + results);
}

getPokemon(url);
console.log("second: ", + results)
