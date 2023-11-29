// Exercise N.1
const navSearchBar = () => {
  const searchBarContainer = document.createElement("div");
  const logo = document.createElement("img");
  const searchBar = document.createElement("input");
  searchBarContainer.className = "search";
  logo.src =
    "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png";
  logo.alt = "netflix-clone-logo";
  searchBar.type = "text";
  searchBar.placeholder = "Search";

  searchBarContainer.append(logo, searchBar);

  return searchBarContainer;
};

const navLinksNavigation = () => {
  const linksNavigationContainer = document.createElement("div");
  const linksListWrapper = document.createElement("ul");
  const tvShows = document.createElement("li");
  const movies = document.createElement("li");
  const categoriesLabel = document.createElement("label");
  const selectionDropDown = document.createElement("select");
  const categoriesOptions = document.createElement("option");

  linksNavigationContainer.className = "links";
  linksListWrapper.className = "links-list";
  tvShows.textContent = "TV Shows";
  movies.textContent = "Movies";
  categoriesLabel.for = "categories";
  categoriesLabel.textContent = "Categories";
  selectionDropDown.name = "categories";
  selectionDropDown.id = "categories";
  categoriesOptions.value = "";

  linksNavigationContainer.append(linksListWrapper);
  linksListWrapper.append(
    tvShows,
    movies,
    categoriesLabel,
    selectionDropDown
  );
  selectionDropDown.append(categoriesOptions);

  return linksNavigationContainer;
};

// END Exercise N.1

// Advanced
// Modal card generator with eventlistener
const modalGen = (modalData) => {
  const container = document.createElement("div");
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const modalObject = document.createElement("p");
  const overview = document.createElement("p");
  const button = document.createElement("button");

  container.className = "modal-container";
  img.src = `https://image.tmdb.org/t/p/w1280${modalData.backdrop_path}`;
  img.alt = modalData.original_name;
  title.textContent = modalData.original_name;
  modalObject.textContent = "Most watched";
  overview.textContent = modalData.overview;
  button.className = "modalBtn";
  button.textContent = "Watch Now";

  container.append(img, title, modalObject, overview, button);

  button.addEventListener("click", () => {
    container.remove();
  });

  return container;
};
// END Advanced

const listsContainerElGen = (title) => {
  const container = document.createElement("div");
  const titleEl = document.createElement("h3");

  container.className = "lists-container";
  titleEl.textContent = title;

  container.append(titleEl);
  return container;
};

const cardsListElGen = () => {
  const container = document.createElement("div");

  container.className = "cards-list";

  return container;
};

const cardElGen = (imageData) => {
  const imageEl = document.createElement("img");

  imageEl.className = "card-item";
  imageEl.src = `https://image.tmdb.org/t/p/w500${imageData.poster_path}`;
  imageEl.alt = imageData.name;

  return imageEl;
};

export {
  navSearchBar,
  navLinksNavigation,
  modalGen,
  listsContainerElGen,
  cardsListElGen,
  cardElGen,
};
