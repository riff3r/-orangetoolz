// Selector

const mainMenu = document.querySelector("#menu");
const closeMenu = document.querySelector(".close");
const menu = document.querySelectorAll(".item a");
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
