"use strict";
// scrolling to top button
let mySpan = document.querySelector("span[class ='top_button']");
window.addEventListener("scroll", showTopButton);
function showTopButton() {
  this.scrollY >= 650
    ? mySpan.classList.add("show_button")
    : mySpan.classList.remove("show_button");
}
mySpan.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// scrolling to top button

window.onload = checkThemeFromLocal;

// progress bar filling
let allSpans = document.querySelectorAll(".bars .prog > span");
let targetSection = document.querySelector(".skills-sec");
window.addEventListener("scroll", progFilling);
function progFilling() {
  if (window.scrollY >= targetSection.offsetTop - 100) {
    allSpans.forEach((ele) => {
      ele.style.width = ele.dataset.width;
    });
  }
}
// progress bar filling

// head bar
let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
  });
  list[i].classList.add("active");
}
list.forEach((e) => {
  e.addEventListener("click", activeLink);
});

const sections = document.querySelectorAll(".section");
//// changing active section technique
window.addEventListener("scroll", () => {
  let currentSection = null;
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    // Check if the top and bottom of the section are within the viewport
    if (
      sectionTop <= window.innerHeight / 2 &&
      sectionBottom >= window.innerHeight / 2
    ) {
      currentSection = section.id;
    }
  });

  // update the nav-bar section active
  if (currentSection) {
    list.forEach((item) => {
      if (item.hasAttribute(`${currentSection}`)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
});

// head bar

////// setting bar

//// variables
let settingButton = document.querySelector(".setting-icon");
let settingSec = document.querySelector(".setting-sec");
let themes = document.querySelectorAll(".theme");
let arrOfThemeIcons = document.querySelectorAll(".theme span");
let landImg = document.querySelector(".land-img");
let skiImg = document.querySelector(".ski-img");
let conImg = document.querySelector(".con-img");

// Click to open setting bar
settingButton.addEventListener("click", function () {
  settingSec.classList.toggle("hide-sec");
});

document.addEventListener("click", function (event) {
  if (!settingSec.contains(event.target)) {
    settingSec.classList.remove("hide-sec");
  }
});

////// get theme from local storage after page loading
function checkThemeFromLocal() {
  if (window.localStorage.getItem("portfolioTheme") === "one") {
    changeToTheme1();
  } else if (window.localStorage.getItem("portfolioTheme") === "two") {
    changeToTheme2();
  } else {
    changeToTheme3();
  }
  themes.forEach((th) => {
    th.classList.remove("active");
  });
  themes.forEach((th) => {
    if (th.classList.contains(`${window.localStorage.getItem("portfolioTheme")}`)) {
      th.classList.add("active");
    }
  });
}

let colorVariables = [
  "--master-color",
  "--second-color",
  "--third-color",
  "--fourth-color",
  "--fifth-color",
  "--hight-contrast",
  "--text-color",
];
let theme1Colors = [
  "#03042a",
  "#a7c5f1",
  "#cc8fac",
  "#4b4584",
  "#210d49",
  "#140d36",
  "#f7f7f7",
];
let theme2Colors = [
  "#0a0a0c",
  "#001910",
  "#ddd",
  "#ff9d9d",
  "#795548",
  "#121212",
  "#f7f7f7",
];
let theme3Colors = [
  "#eee",
  "#001910",
  "#121212",
  "#101010",
  "#eeeeee",
  "#ecebec",
  "#000000",
];

function changeColorsVariables(colorVars, colorTheme) {
  for (let i = 0; i < colorVars.length; i++) {
    document.documentElement.style.setProperty(
      `${colorVars[i]}`,
      `${colorTheme[i]}`
    );
  }
}


function changeThemeImages(number) {
  landImg.innerHTML = `<img src="images/landing${number}.svg" alt="landing-page-image"/>`;
  skiImg.innerHTML = `<img src="images/skills${number}.svg" alt="skills-image"/>`;
  conImg.innerHTML = `<img src="images/contact${number}.svg" alt="contact-image"/>`;
}

//// functions to change theme
function changeToTheme1() {
  changeColorsVariables(colorVariables, theme1Colors);
  changeThemeImages(1);
}
function changeToTheme2() {
  changeColorsVariables(colorVariables, theme2Colors);
  changeThemeImages(2);
}
function changeToTheme3() {
  changeColorsVariables(colorVariables, theme3Colors);
  changeThemeImages(2);
}

//// changing theme technique

function triggerThemes(e) {
  if (e.currentTarget.classList[0] === "theme1") {
    setTimeout(changeToTheme1, 100);
    window.localStorage.setItem("portfolioTheme", "one");
  } else if (e.currentTarget.classList[0] === "theme2") {
    setTimeout(changeToTheme2, 100);
    window.localStorage.setItem("portfolioTheme", "two");
  } else {
    setTimeout(changeToTheme3, 100);
    window.localStorage.setItem("portfolioTheme", "three");
  }
}

themes.forEach((th) => {
  th.addEventListener("click", function (e) {
    themes.forEach((th) => {
      th.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    triggerThemes(e);
  });
});

////// setting bar
