/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Flourish Idahosa-Sunny",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Rice",
        "Eggs",
        "Toast",
        "Bread",
        "Salad"
    ],

    hobbies: [
        "Gaming",
        "Driving",
        "Listening to EDM",
        "Watching Sitcoms"
    ],

    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    { place: "Edo, Nigeria", length: "20 years" },
    { place: "Benue, Nigeria", length: "6 Months" },
    { place: "Accra, Ghana", length: "1 year" },
    { place: "Eastern Region, Ghana", length: "1 year"}
)

/* DOM Manipulation - Output */

/* Name */

document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('img').setAttribute('src', myProfile.photo);

document.querySelector('img').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach((hobbie) => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.getElementById('hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((places) => {
    let dt = document.createElement("dt");
    dt.innerHTML = `<strong>${places.place}`;
    let dd = document.createElement("dd");
    dd.innerHTML = places.length;
    
    let ddbreak = document.createElement("br")
    document.getElementById('places-lived').appendChild(ddbreak);
    document.getElementById('places-lived').append(dt, dd);
})
