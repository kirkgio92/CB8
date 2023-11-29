import { httpGET } from "./modules/http.js";
import {
  navSearchBar, // Exercise N.1 - importing
  navLinksNavigation, // Exercise N.1 - importing
  modalGen, // Advanced Exercise
  listsContainerElGen,
  cardsListElGen,
  cardElGen,
} from "./modules/components.js";

// const asyncModalPopUp = async (endpoint) => {
//   const data = await httpGET(endpoint);
//   const firstArrayElement = data.results[0];

//   const modal = modalGen(firstArrayElement);
//   document.body.append(modalGen(firstArrayElement));

//   return modal;
// };

// Advanced exercise Modal with a random series and a timeout
const asyncModalPopUp = async (endpoint) => {
  const data = await httpGET(endpoint);
  const randomObject = Math.floor(
    Math.random() * data.results.length
  );
  const randomElementObj = data.results[randomObject];

  const modal = modalGen(randomElementObj);
  document.body.append(modal);

  return modal;
};

// Advanced exercise
setTimeout(() => {
  asyncModalPopUp("tv/popular");
}, 3000);

const asyncListContainerElGen = async (endpoint, title) => {
  const data = await httpGET(endpoint);
  const listContainerEl = listsContainerElGen(title);
  const cardsListEl = cardsListElGen();

  data.results.map((serie) => cardsListEl.append(cardElGen(serie)));
  listContainerEl.append(cardsListEl);

  return listContainerEl;
};

const topNavBar = document.querySelector(".navbar");
const navSearchBarEl = navSearchBar();
const navLinksNavigationEl = navLinksNavigation();
const mainSectionEl = document.querySelector(".main");

Promise.all([
  asyncListContainerElGen("movie/upcoming", "Movies - Upcoming"),
  asyncListContainerElGen(
    "movie/now_playing",
    "Movies - Now Playing"
  ),
  asyncListContainerElGen("tv/top_rated", "Serie Tv - Top Rated"),
  asyncListContainerElGen("tv/popular", "Serie Tv - Popular"),
]).then((elements) => elements.map((el) => mainSectionEl.append(el)));

topNavBar.append(navSearchBarEl, navLinksNavigationEl);
