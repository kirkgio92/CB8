//// FUNCTION SECTIONS ////
// Short function
const cE = (type) => document.createElement(type);

// Creating needed element

// Header Elements
const topHeadEl = cE("header");
const topHeadTitle = cE("h2");
const topHeadSearchCartBtnsEl = cE("div");
const topHeadSearchBtn = cE("button");
const topHeadCartBtn = cE("button");

// Cards Section Elements
const sectionEl = cE("section");
const titleEl = cE("h3");
const flexContainer = cE("div");
const containerEl = cE("div");
const categNavContainer = cE("section");
const categNavWrapper = cE("nav");

// Category navigation generator 
const categNavBar = (arrayCategNavBarData) => {
  const categWrapper = cE("div");
  const btn = cE("button");
  const desc = cE("p");

  categWrapper.className =
    arrayCategNavBarData.wrapperClass;
  btn.className = arrayCategNavBarData.btnClass;
  desc.textContent = arrayCategNavBarData.pDesc;

  // I NEED TO APPEND YET
  categNavWrapper.append(categWrapper);
  categWrapper.append(btn);
  btn.append(desc);

  return categWrapper;
};

// Card generator <-- TRY & CATCH -->
const catCardGen = (arrayListData) => {
  try {
    const cardEl = cE("div");
    const imgEl = cE("img");
    const cardTxtWrapper = cE("div");
    const price = cE("p");
    const itemName = cE("h4");
    const heartBtnEl = cE("button");
    const cartBtnEl = cE("button");

    cardEl.className = "card";
    imgEl.src = arrayListData.imgUrl;
    imgEl.alt = arrayListData.itemName;
    cardTxtWrapper.className = "card_text";
    price.textContent = arrayListData.price + " $";
    itemName.textContent = arrayListData.itemName;
    heartBtnEl.className =
      "fa-sharp fa-regular fa-heart fa-2x";
    cartBtnEl.className = "fas fa-shopping-cart fa-2x";

    cardEl.append(imgEl, cardTxtWrapper);
    cardTxtWrapper.append(
      itemName,
      price,
      heartBtnEl,
      cartBtnEl
    );

    return cardEl;
  } catch (error) {
    console.error("error", error);
  }
};

// Object array (List of Item)
const catListData = [
  {
    id: 1,
    itemName: "Tom",
    imgUrl: "https://robohash.org/1?set=set4",
    price: "1,000.00",
  },
  {
    id: 2,
    itemName: "Fiocco",
    imgUrl: "https://robohash.org/2?set=set4",
    price: "800.00",
  },
  {
    id: 3,
    itemName: "Rambo",
    imgUrl: "https://robohash.org/3?set=set4",
    price: "1,200.00",
  },
  {
    id: 4,
    itemName: "The DJ",
    imgUrl: "https://robohash.org/4?set=set4",
    price: "750.00",
  },
  {
    id: 5,
    itemName: "Hatter",
    imgUrl: "https://robohash.org/5?set=set4",
    price: "850.00",
  },
  {
    id: 6,
    itemName: "Patched Eye",
    imgUrl: "https://robohash.org/6?set=set4",
    price: "1,500.00",
  },
  {
    id: 7,
    itemName: "Cold",
    imgUrl: "https://robohash.org/7?set=set4",
    price: "1,150.00",
  },
  {
    id: 8,
    itemName: "Firey",
    imgUrl: "https://robohash.org/8?set=set4",
    price: "2,000.00",
  },
  {
    id: 9,
    itemName: "Happy",
    imgUrl: "https://robohash.org/9?set=set4",
    price: "1,199.00",
  },
];

// Object array (Data for the category nagigation bar)
const categNavBarData = [
  {
    id: "all",
    wrapperClass: "wrapper_category",
    btnClass: "fas fa-search fa-2x",
    pDesc: "All",
  },
  {
    id: "dog",
    wrapperClass: "wrapper_category",
    btnClass: "fas fa-dog fa-2x",
    pDesc: "Dogs",
  },
  {
    id: "horse",
    wrapperClass: "wrapper_category",
    btnClass: "fas fa-horse fa-2x",
    pDesc: "Horses",
  },
  {
    id: "dragon",
    wrapperClass: "wrapper_category",
    btnClass: "fas fa-dragon fa-2x",
    pDesc: "Dragons",
  },
  {
    id: "spider",
    wrapperClass: "wrapper_category",
    btnClass: "fas fa-spider fa-2x",
    pDesc: "Spiders",
  },
];
// END FUNCTIONS SECTION //

//// ALL OTHERS SECTION ////
// CLASSING AND TEXTING
topHeadEl.className = "top_header";
topHeadTitle.textContent = "Find the perfect pet for you";
topHeadSearchCartBtnsEl.className = "search_cart_btns";
topHeadSearchBtn.className = "fas fa-search fa-2x";
topHeadCartBtn.className = "fas fa-cart-arrow-down fa-2x";
sectionEl.className = "recommended";
titleEl.textContent = "Recommended for you";
flexContainer.className = "flex_start_container";
containerEl.className = "cards_container";
categNavContainer.className = "category_nav_container";
categNavWrapper.className = "category_nav";

// APPENDING
document.body.append(topHeadEl);
topHeadEl.append(topHeadTitle);
topHeadEl.append(topHeadSearchCartBtnsEl);
topHeadSearchCartBtnsEl.appendChild(topHeadSearchBtn);
topHeadSearchCartBtnsEl.appendChild(topHeadCartBtn);
document.body.append(categNavContainer);
categNavContainer.append(categNavWrapper);

document.body.append(sectionEl);
sectionEl.append(titleEl);
sectionEl.append(flexContainer);
flexContainer.append(containerEl);

// MAPPING
catListData.map((list) =>
  containerEl.appendChild(catCardGen(list))
);

categNavBarData.map((NavBarData) =>
categNavWrapper.append(categNavBar(NavBarData))
);

//// ALL OTHERS SECTION ////
