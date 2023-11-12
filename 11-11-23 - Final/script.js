// EXERCISE 1
// Function that will create the hero section
const heroGenerator = (title, descr, hideBtnText) => {
  const heroContainer = document.createElement("main");
  const heroTitle = document.createElement("h1");
  const heroDescr = document.createElement("p");
  const heroHideBtn = document.createElement("button");
  heroContainer.setAttribute("class", "heroContainer");
  heroTitle.textContent = title;
  heroDescr.textContent = descr;
  heroHideBtn.setAttribute("class", "hideBtn");
  heroHideBtn.textContent = hideBtnText;
  heroContainer.append(heroTitle, heroDescr, heroHideBtn);
  return heroContainer;
};

document.body.append(
  heroGenerator(
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam distinctio quo architecto et. Dolor exercitationem repellendus, voluptas ipsam minus totam sequi facere expedita iste ea fugiat ratione iusto amet sed",
    "Click to hide me",
    "Click to show me"
  )
);

const toggleBtn = document.createElement("button");
toggleBtn.setAttribute("class", "showBtn");
toggleBtn.textContent = "Click Me";
document.body.append(toggleBtn);

// EXERCISE 2
// Creating a variable to call the 2 buttons and for the heroContainer
const hideHeroBtn = document.querySelector(".hideBtn");
const showHeroBtn = document.querySelector(".showBtn");
const heroSection = document.querySelector(".heroContainer");

// Creating the event on click
hideHeroBtn.addEventListener("click", () => {
  heroSection.style.display = "none";
  toggleBtn.style.display = "block";
});

toggleBtn.addEventListener("click", () => {
  toggleBtn.style.display = "none";
  heroSection.style.display = "flex";
});

// EXERCISE 3
// Creating a new div
const imgGalleryWrapper = () => {
  const imgWrapper = document.createElement("div");
  imgWrapper.setAttribute("class", "imgWrapper");
  return imgWrapper;
};

// Appending the new div to the body
document.body.append(imgGalleryWrapper());
const imgWrapper = document.querySelector(".imgWrapper");

// Creating the imgGenerator function
const imgGenerator = (id, imgUrl, altText) => {
  const img = document.createElement("img");
  img.setAttribute("class", "imgGallery");
  img.setAttribute("id", id);
  img.setAttribute("src", imgUrl);
  img.setAttribute("alt", altText);
  return img;
};

// Appending the function to the div created before
imgWrapper.append(
  imgGenerator(
    "1",
    "https://picsum.photos/200/200?1",
    "Immagine alternativa 1"
  ),
  imgGenerator(
    "2",
    "https://picsum.photos/200/200?2",
    "Immagine alternativa 2"
  ),
  imgGenerator(
    "3",
    "https://picsum.photos/200/200?3",
    "Immagine alternativa 3"
  ),
  imgGenerator("4", "https://picsum.photos/200/200?4", "Immagine alternativa 4")
);

// EXERCISE 4
const imageList = [
  {
    id: 1,
    imgUrl: "https://picsum.photos/200/200?random=6",
    altText: "Immagine 1",
  },
  {
    id: 2,
    imgUrl: "https://picsum.photos/200/200?random=10",
    altText: "Immagine 2",
  },
  {
    id: 3,
    imgUrl: "https://picsum.photos/200/200?random=9",
    altText: "Immagine 3",
  },
  {
    id: 4,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 4",
  },
  {
    id: 5,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 5",
  },
  {
    id: 6,
    imgUrl: "https://picsum.photos/200/200?random=3",
    altText: "Immagine 6",
  },
  {
    id: 7,
    imgUrl: "https://picsum.photos/200/200?random=7",
    altText: "Immagine 7",
  },
  {
    id: 8,
    imgUrl: "https://picsum.photos/200/200?random=4",
    altText: "Immagine 8",
  },
  {
    id: 9,
    imgUrl: "https://picsum.photos/200/200?random=2",
    altText: "Immagine 9",
  },
  {
    id: 10,
    imgUrl: "https://picsum.photos/200/200?random=1",
    altText: "Immagine 10",
  },
];

// Creating a new div
const imgGalleryWrapper2 = () => {
  const imgWrapper2 = document.createElement("div");
  imgWrapper2.setAttribute("class", "imgWrapper2");
  return imgWrapper2;
};

// Appending the new div to the body
document.body.append(imgGalleryWrapper2());
const imgWrapper2 = document.querySelector(".imgWrapper2");

// Creating the pure function
imageList.forEach((img) => {
  imgWrapper2.appendChild(imgGenerator(img.id, img.imgUrl, img.altText));
});
