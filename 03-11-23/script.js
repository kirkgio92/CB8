// Excercise n.1
function getTemperatureStatus(actualTemp) {
  if (actualTemp >= -100 && actualTemp <= 0) {
    return "Freddo";
  } else if (actualTemp >= 1 && actualTemp <= 25) {
    return "Mite";
  } else if (actualTemp >= 26 && actualTemp <= 100) {
    return "Caldo";
  } else {
    return "Valore non valido. Il mio range va da -100 a +100.";
  }
}

// console.log(getTemperatureStatus(-13));

// Excercise n.2
const personId = {
  name: "Pippo",
  surname: "Pluto",
  age: 31,
  citizenship: "Italiano",
  residence: "Milano",
  recap: function () {
    return (
      "Mi chiamo " +
      this.name +
      " " +
      this.surname +
      ", ho " +
      this.age +
      "anni." +
      " Sono " +
      this.citizenship +
      " e vivo a " +
      this.residence +
      "."
    );
  },
};

console.log(personId.recap());

console.log(" "); // A log to put an empty space in the console


// Advanced Excercise by myself <=========================

// const favoritesMovies = [];

// let movie1 = "Interstellar";
// let movie2 = "Manchester By The Sea";
// let movie3 = "American Sniper";
// let movie4 = "Oppenheimer";

// function addFavoritesMovies() {
//     favoritesMovies.push(movie1);
//     favoritesMovies.push(movie2);
//     favoritesMovies.push(movie3);
//     favoritesMovies.push(movie4);
// };

// function showFavoritesMovies () {
//     for (let i = 0; i < favoritesMovies.length; i++) {
//         console.log(i + ": " + favoritesMovies[i]);
//     }
// }

// function deleteFromFavorites () {
//    favoritesMovies.splice(2, 1);
// }

// addFavoritesMovies();

// console.log("===> Below movie array")
// showFavoritesMovies();

// deleteFromFavorites();

// console.log("") // A log to put an empty space in the console

// console.log("===> Below movie array after the .splice")
// showFavoritesMovies();


///////////////////////////////////////////////////////////////////////////////////////


// Advanced Excercise after watching other colleague excercise 
// (this seems to be scalable, as you can add movies without touching the code)

const favoritesMovies = [];

function addFavoritesMovies(movie) {
  favoritesMovies.push(movie);
}

function showFavoritesMovies() {
  for (let i = 0; i < favoritesMovies.length; i++) {
    console.log(i + ": " + favoritesMovies[i]);
  }
}

function deleteFromFavorites() {
  favoritesMovies.splice(2, 1);
}

addFavoritesMovies("Interstellar");
addFavoritesMovies("Manchester By The Sea");
addFavoritesMovies("American Sniper");
addFavoritesMovies("Oppenheimer");

console.log("===> Below movie array");
showFavoritesMovies();

deleteFromFavorites();

console.log(""); // A log to put an empty space in the console

console.log("===> Below movie array after the .splice");
showFavoritesMovies();
