import {
  menuEl,
  sectionMainTitle,
  headerBarActive,
  cardContainerActive,
  cardEl,
  headerBarNotActive,
  cardContainerNotActive,
  sectionActiveUsers,
  sectionNonActiveUsers,
  footerSection,
} from "./modules/components.js";

import { httpGET } from "./modules/http.js";

const menu = menuEl();
const header = sectionMainTitle();
const barActive = headerBarActive();
const cardWrapperActive = cardContainerActive();
const barNotActive = headerBarNotActive();
const cardWrapperNotActive = cardContainerNotActive();
const headerActive = sectionActiveUsers();
const headerNonActive = sectionNonActiveUsers();
const footer = footerSection();

const generateCardsActive = async () => {
  const data = await httpGET();
  data.forEach((item) => {
    if (item.active) {
      const card = cardEl(item);
      cardWrapperActive.append(card);
    }
  });
};

const generateCardsNotActive = async () => {
  const data = await httpGET();
  data.forEach((item) => {
    if (!item.active) {
      const card = cardEl(item);
      cardWrapperNotActive.append(card);
    }
  });
};

generateCardsActive();
generateCardsNotActive();

document.body.append(
  menu,
  header,
  headerActive,
  barActive,
  cardWrapperActive,
  headerNonActive,
  barNotActive,
  cardWrapperNotActive,
  footer
);
