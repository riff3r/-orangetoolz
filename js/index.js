// Selector

const mainMenu = document.querySelector("#menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelectorAll(".item a");
const card = document.querySelectorAll(".card");
const dropdownButton = document.querySelector(".dropdown-button");

const openMenu = document.querySelector(".nav-icon");

// Menu Drop down
const submenuHandler = (event) => {
  let parent = event.target.closest(".menu-dropdown");
  parent.classList.toggle("open");
};

dropdownButton.addEventListener("click", submenuHandler);

// Active menu
function handleActiveItem() {
  const existingImage = this.children[0].getAttribute("alt");

  menu.forEach((item) => {
    // Active Class
    item.classList.remove("active");
    this.classList.add("active");

    // Active image change
    this.children[0].src = `images/menu/${existingImage}-active.png`;

    if (!item.classList.contains("active")) {
      let prevImage = item.children[0].getAttribute("alt");

      item.children[0].src = `images/menu/${prevImage}.png`;
    }
  });
}

menu.forEach((item) => item.addEventListener("click", handleActiveItem));

// Responsive toggle
const toggleMenuHandler = () => {
  mainMenu.classList.toggle("active");
};

openMenu.addEventListener("click", toggleMenuHandler);

closeMenu.addEventListener("click", toggleMenuHandler);

// Active Card

const activeCardHandler = (event) => {
  console.log(event.target);
};

card.forEach((item) => item.addEventListener("click", activeCardHandler));

// Tabs
const tabs = document.querySelectorAll(".setting-header--tab");

const tabsContainer = document.querySelector(".setting-header--items");

const tabsContent = document.querySelectorAll(".tab-content");

const tabHandler = (e) => {
  const clicked = e.target;

  const invalidUlClick = clicked.classList.contains("setting-header--items");

  if (!invalidUlClick) {
    // Remove all class
    tabs.forEach((tab) => tab.classList.remove("active"));
    // Add active class
    clicked.classList.add("active");

    // Remove Active tag
    document
      .querySelectorAll(".tab-content")
      .forEach((tab) => tab.classList.remove("active"));

    // Active Content Area
    document
      .querySelector(`.setting-content--${clicked.dataset.tab}`)
      .classList.add("active");
  }
};

tabsContainer.addEventListener("click", tabHandler);
