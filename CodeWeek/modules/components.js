const createEl = (el) => document.createElement(el);

const menuEl = () => {
  const container = createEl("div");
  const logoContainer = createEl("div");
  const logo = createEl("img");
  const nagivationContainer = createEl("div");
  const listWrapper = createEl("ul");
  const archiveEl = createEl("li");
  const uiElementsEl = createEl("li");
  const tabelsEl = createEl("li");
  const formsEl = createEl("li");
  const cardsEl = createEl("li");

  container.className = "navigation-menu";
  logoContainer.className = "logo-container";
  logo.className = "logo";
  logo.src = "https://img.logoipsum.com/330.svg";
  logo.alt = "Logo";
  nagivationContainer.className = "navigation-links";
  archiveEl.textContent = "Archive";
  uiElementsEl.textContent = "Elements";
  tabelsEl.textContent = "Tables";
  formsEl.textContent = "Forms";
  cardsEl.textContent = "Cards";

  logoContainer.append(logo);
  nagivationContainer.append(listWrapper);
  listWrapper.append(
    archiveEl,
    uiElementsEl,
    tabelsEl,
    formsEl,
    cardsEl
  );
  container.append(logoContainer, nagivationContainer);

  return container;
};

const sectionMainTitle = () => {
  const container = createEl("section");
  const titleSection = createEl("h1");

  container.className = "title-container";
  titleSection.className = "section_title";
  titleSection.textContent = "Archive";

  container.append(titleSection);

  return container;
};

const sectionActiveUsers = () => {
  const container = createEl("section");
  const titleSection = createEl("h3");

  container.className = "title-container";
  titleSection.className = "section_title";
  titleSection.textContent = "Active Users";

  container.append(titleSection);

  return container;
};

const sectionNonActiveUsers = () => {
  const container = createEl("section");
  const titleSection = createEl("h3");

  container.className = "title-container";
  titleSection.className = "section_title";
  titleSection.textContent = "Non Active Users";

  container.append(titleSection);

  return container;
};

const headerBarActive = () => {
  const container = createEl("div");
  const name = createEl("h4");
  const email = createEl("h4");
  const website = createEl("h4");
  const active = createEl("h4");

  container.className = "headerBar-active-container";
  website.className = "website-active";
  name.textContent = "User";
  email.textContent = "Email";
  website.textContent = "Website";
  active.textContent = "Is Active?";

  container.append(name, email, website, active);

  return container;
};

const cardContainerActive = () => {
  const container = createEl("div");

  container.className = "card-container";

  return container;
};

const headerBarNotActive = () => {
  const container = createEl("div");
  const name = createEl("h4");
  const email = createEl("h4");
  const website = createEl("h4");
  const active = createEl("h4");

  container.className = "headerBar-NOTactive-container";
  website.className = "website-NONactive";
  name.textContent = "User";
  email.textContent = "Email";
  website.textContent = "Website";
  active.textContent = "Is Active?";

  container.append(name, email, website, active);

  return container;
};

const cardContainerNotActive = () => {
  const container = createEl("div");

  container.className = "card-container";

  return container;
};

const cardEl = (dataFetch) => {
  const wrapper = createEl("div");
  const user = createEl("p");
  const email = createEl("p");
  const website = createEl("p");
  const status = createEl("p");

  wrapper.className = "wrapper-card";

  user.className = "user-card";
  email.className = "email-card";
  website.className = "website-card";
  status.className = "status-card";

  user.textContent = dataFetch.name;
  email.textContent = dataFetch.email;
  website.textContent = dataFetch.website;
  status.textContent = dataFetch.active;

  wrapper.append(user, email, website, status);

  return wrapper;
};

const footerSection = () => {
  const container = createEl("footer");

  const logoContainer = createEl("div");
  const logo = createEl("img");
  const logoDescr = createEl("p");

  const companyContainer = createEl("div");
  const companyTitle = createEl("h4");
  const blog = createEl("a");
  const aboutUs = createEl("a");
  const download = createEl("a");
  const hiring = createEl("a");

  container.className = "footer-container";
  logoContainer.className = "logoFooter-container";
  logo.className = "logo-footer";
  logo.src = "https://img.logoipsum.com/330.svg";
  logo.alt = "Logo-footer";
  logoDescr.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, earum.";

  companyContainer.className = "company";
  companyTitle.textContent = "Company";
  blog.href = "/";
  aboutUs.href = "/";
  download.href = "/";
  hiring.href = "/";
  blog.textContent = "Blog";
  aboutUs.textContent = "About Us";
  download.textContent = "Download";
  hiring.textContent = "We're Hiring";

  logoContainer.append(logo, logoDescr);
  companyContainer.append(
    companyTitle,
    blog,
    aboutUs,
    download,
    hiring
  );

  container.append(logoContainer, companyContainer);

  return container;
};

export {
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
};
