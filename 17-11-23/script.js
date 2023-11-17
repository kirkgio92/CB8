const cE = (type) => document.createElement(type);

// Generating the popup
const popupEl = (text, textYes, textNo) => {
  const containerEl = cE("div");
  const textEl = cE("p");
  const btnContainer = cE("div");
  const btnYes = cE("button");
  const btnNo = cE("button");
  containerEl.className = "popup";
  btnContainer.className = "btnWrapper";
  btnYes.className = "verified";
  btnNo.className = "not-verified";
  textEl.textContent = text;
  btnYes.textContent = textYes;
  btnNo.textContent = textNo;
  containerEl.append(textEl, btnContainer);
  btnContainer.append(btnYes, btnNo);

  return containerEl;
};

// Creating the content not visible before the YES popup clicked
const pageContent = cE("main");
pageContent.textContent = "Now you can see this!!!";
pageContent.className = "content";

// Exercise N.1/Advanced --> Done
pageContent.remove();

const popupAgeCheckTimer = setTimeout(() => {
  const popupAgeCheck = popupEl(
    "Are you 18+ year old?",
    "Yes",
    "No"
  );
  document.body.append(popupAgeCheck);
  const btnYesPopup = document.querySelector(".verified");
  const btnNoPopup =
    document.querySelector(".not-verified");
  btnYesPopup.addEventListener("click", () => {
    popupAgeCheck.remove();
    // togglePageOnOff.style.display = "flex";
    document.body.append(pageContent);
  });
  btnNoPopup.addEventListener("click", () => {
    window.location.href = "https://www.google.com";
  });
}, 3500);

// Exercise N.2 --> Done
// Checking what's inside the database
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) =>
    console.log(
      data.products.filter((prod) => prod.price < 50)
    )
  );
