"use strict";
//////  ------------------------------------------------- [ scrolling to top button ] ---------------------------------------------

///// checking position function
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

//////  -------------------------------------------------// [ scrolling to top button ] //---------------------------------------------

window.onload = checkThemeFromLocal;

//////  ------------------------------------------------- [ filter content ] ------------------------------------------------------

let tabs = document.querySelectorAll(".tabs li");
let content = document.querySelectorAll(".projects .card");

function hide(e) {
  e.classList.remove("img-expend");
  e.classList.add("img-shrink");
}

function show(e) {
  e.classList.add("img-expend");
  e.classList.remove("img-shrink");
}

///// when you click on filter tag
tabs.forEach((li) => {
  li.addEventListener("click", function (e) {
    tabs.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    let myLink = Array.from(
      document.querySelectorAll(
        `${e.currentTarget.dataset.cate}`
      )
    );

    content.forEach((card) => {
      hide(card);
    });

    content.forEach((card) => {
      if (myLink.includes(card)) {
        show(card);
      } else {
        hide(card);
      }
    });
  });
});

//////  -------------------------------------------------// [ filter content ] //------------------------------------------------------

//////  ------------------------------------------------- [head bar] -----------------------------------------------------------

let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => {
    item.classList.remove("active");
  });
  // list[i].classList.add("active");
}
list.forEach((e) => {
  e.addEventListener("click", activeLink);
});

//// changing active section technique

const sections = document.querySelectorAll(".section");
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
//////  -------------------------------------------------// [head bar] //----------------------------------------------------------

//////  ------------------------------------------------- [change logos] -------------------------------------------------------

//// variables
let icons = Array.from(document.querySelectorAll(".tool "));
let data1 = [
  '<img src="images/html-c.svg" alt="html-logo" />',
  '<img src="images/css-c.svg" alt="css-logo" />',
  '<img src="images/javascript-c.svg" alt="javascript-logo" />',
  `<img src="images/typescript-c.svg" alt="typescript-logo" />`,
  `<img src="images/reactjs-c.svg" alt="reactjs-logo" />`,
  `<img src="images/redux-c.svg" alt="redux-logo" />`,
  `<img src="images/bootstrap-c.svg" alt="bootstrap-logo" />`,
  '<img src="images/tailwind-css-c.png" alt="tailwind-css-logo" />',
  `<img src="images/git-c.svg" alt="Git-logo" />`,
  `<img src="images/github-c.svg" alt="GitHub-logo" />`,
  '<img src="images/vs-code-c.svg" alt="vs-code-logo" />',
  '<img src="images/database-c.png" alt="database-logo" />',
  '<img src="images/cpp-c.svg" alt="database-logo" />',
  '<img src="images/cSharp-c.svg" alt="database-logo" />',
  '<img src="images/postman-c.svg" alt="database-logo" />',
];
let data2 = [
  '<img src="images/html.svg" alt="html-logo" />',
  '<img src="images/css.svg" alt="css-logo" />',
  '<img src="images/javascript.svg" alt="javascript-logo" />',
  `<img src="images/typescript.svg" alt="typescript-logo" />`,
  `<img src="images/reactjs.svg" alt="reactjs-logo" />`,
  `<img src="images/redux.svg" alt="redux-logo" />`,
  `<img src="images/bootstrap.svg" alt="bootstrap-logo" />`,
  '<img src="images/tailwind-css.png" alt="tailwind-css-logo" />',
  `<img src="images/git.svg" alt="Git-logo" />`,
  `<img src="images/github.svg" alt="GitHub-logo" />`,
  '<img src="images/vs-code.png" alt="vs-code-logo" />',
  '<img src="images/database.png" alt="database-logo" />',
  '<img src="images/cpp.svg" alt="database-logo" />',
  '<img src="images/cSharp.svg" alt="database-logo" />',
  '<img src="images/postman.svg" alt="database-logo" />',
];

function changeIcons(currData) {
  for (let i = 0; i < icons.length; i++) {
    // console.log(icons[i].children[1]);
    let nameOfIcon = icons[i].children[1].innerHTML;
    icons[i].innerHTML = `${currData[i]}
    <p>${nameOfIcon}</p>
    `;
  }
}

//////  -------------------------------------------------// [change logos] //-----------------------------------------------------------

//////  ------------------------------------------------- [setting sec] ------------------------------------------------------------

//// variables
let settingButton = document.querySelector(".setting-icon");
let settingButtonI = document.querySelector(".setting-icon");
let settingSec = document.querySelector(".setting-sec");
let themes = document.querySelectorAll(".theme");
let arrOfThemeIcons = document.querySelectorAll(".theme span");
let landImg = document.querySelector(".land-img");
let skiImg = document.querySelector(".ski-img");
let conImg = document.querySelector(".con-img");



function changeSettingIcon() {
  if (settingButtonI.classList.contains("fa-gear")) {
    settingButtonI.classList.remove("fa-gear");
    settingButtonI.classList.add("fa-xmark");
  } else {
    settingButtonI.classList.remove("fa-xmark");
    settingButtonI.classList.add("fa-gear");
  }
}


// fa-solid fa-xmark
// fa-solid fa-gear fa-xl

// Click to open setting bar
settingButton.addEventListener("click", function () {
  settingSec.classList.toggle("hide-sec");
  changeSettingIcon()
});

///// close setting bar when click outside of it
document.addEventListener("click", function (event) {
  if (!settingSec.contains(event.target) && settingSec.classList.contains("hide-sec")) {
    settingSec.classList.remove("hide-sec");
    changeSettingIcon()
  }
});

////// get theme from local storage after page loading
function checkThemeFromLocal() {
  if (
    window.localStorage.getItem("portfolioTheme") ===
    "colorful-theme"
  ) {
    changeToTheme1();
  } else if (
    window.localStorage.getItem("portfolioTheme") === "dark-theme"
  ) {
    changeToTheme2();
  } else if (
    window.localStorage.getItem("portfolioTheme") === "light-theme"
  ) {
    changeToTheme3();
  } else {
    changeToTheme1();
  }
  themes.forEach((th) => {
    th.classList.remove("active");
  });
  themes.forEach((th) => {
    if (
      th.classList.contains(
        `${window.localStorage.getItem(
          "portfolioTheme"
        )}`
      )
    ) {
      th.classList.add("active");
    }
  });
}

function changeColorsVariables(colorVars, colorTheme) {
  for (let i = 0; i < colorVars.length; i++) {
    document.documentElement.style.setProperty(
      `${colorVars[i]}`,
      `${colorTheme[i]}`
    );
  }
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
  "#2b1f1a",
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

function changeThemeImages(number) {
  landImg.innerHTML = `<img src="images/landing${number}.svg" alt="landing-page-image"/>`;
  skiImg.innerHTML = `<img src="images/skills${number}.svg" alt="skills-image"/>`;
  conImg.innerHTML = `<img src="images/contact${number}.svg" alt="contact-image"/>`;
}

//// functions to change theme
function changeToTheme1() {
  changeColorsVariables(colorVariables, theme1Colors);
  changeThemeImages(1);
  changeIcons(data1);
}
function changeToTheme2() {
  changeColorsVariables(colorVariables, theme2Colors);
  changeThemeImages(2);
  changeIcons(data2);
}
function changeToTheme3() {
  changeColorsVariables(colorVariables, theme3Colors);
  changeThemeImages(2);
  changeIcons(data2);
}

//// changing theme technique

function triggerThemes(e) {
  if (e.currentTarget.classList[0] === "theme1") {
    setTimeout(changeToTheme1, 100);
    window.localStorage.setItem("portfolioTheme", "colorful-theme");
  } else if (e.currentTarget.classList[0] === "theme2") {
    setTimeout(changeToTheme2, 100);
    window.localStorage.setItem("portfolioTheme", "dark-theme");
  } else {
    setTimeout(changeToTheme3, 100);
    window.localStorage.setItem("portfolioTheme", "light-theme");
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

//////  -------------------------------------------------// [setting sec] //--------------------------------------------------------

//////  ------------------------------------------------- [preview project image] ----------------------------------------------------

let myProjects = Array.from(document.querySelectorAll(".card"));
let myImgs = Array.from(document.querySelectorAll(".card img"));

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("preview-window")) {
    animateDown(e.target);
    setTimeout(() => {
      e.target.remove();
    }, 450);
  } else if (e.target.classList.contains("preview-img")) {
    animateDown(e.target.parentElement);
    setTimeout(() => {
      e.target.parentElement.remove();
    }, 450);
  } else {
    return 0;
  }
});

myProjects.forEach(function (pro) {
  pro.addEventListener("click", function (e) {
    ///// if user click on any link ignore preview image
    if (
      e.target.classList == "none" ||
      e.target.parentElement.classList.contains("no-preview")
    ) {
      return;
    } else {
      // console.log(e.target.parentElement);
      // console.log(e.target.parentElement.classList);
      let myDiv = document.createElement("div");
      myDiv.classList = "preview-window";
      let myImg = this.children[0].cloneNode(true);
      myImg.classList = "preview-img";
      myDiv.appendChild(myImg);
      document.body.appendChild(myDiv);
      setTimeout(() => {
        animateUp(myDiv);
      }, 0);
    }
  });
});

function animateUp(ele) {
  ele.style.top = `0%`;
}
function animateDown(ele) {
  ele.style.top = `150%`;
}

//////  -------------------------------------------------// [preview project image] // ----------------------------------------------------

//////  ------------------------------------------------- [contact me]  ----------------------------------------------------

// variables

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let detailsInput = document.getElementById("details");
let submitBtn = document.querySelector(".submit-btn");
let myInputs = [nameInput, emailInput, subjectInput, detailsInput];

myInputs.forEach((input) => {
  input.oninput = function () {
    if (input.value === "" || input.value.length === 0) {
      submitBtn.classList.add("disabled");
    } else {
      submitBtn.classList.remove("disabled");
    }
  };
});

//////  -------------------------------------------------// [contact me] // ----------------------------------------------------

//////  ------------------------------------------------- [set Year]  ----------------------------------------------------

document.getElementById("year").innerHTML = new Date().getFullYear();

// //////  -------------------------------------------------// [set Year] // ----------------------------------------------------

//////  -------------------------------------------------// [change Language ] // ----------------------------------------------------

// scripts.js
function changeLanguage(language) {
  // Get all elements that have data attributes for different languages
  const elements = document.querySelectorAll('[data-en], [data-es]');
  // Loop through each element and update its text content based on the selected language
  elements.forEach(element => {
    element.textContent = element.getAttribute(`data-${language}`);
  });
}

// Optionally, save the user's language preference to localStorage
function saveLanguagePreference(language) {
  localStorage.setItem('preferredLanguage', language);
}

function loadLanguagePreference() {
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  if (preferredLanguage == "ar")
    document.querySelectorAll('.language-sec .tabs > input')[0].click();
  else
    document.querySelectorAll('.language-sec .tabs > input')[1].click();

  setLanguageClassForElements()
}

function changeDefaultRadioBtn(preferredLanguage) {
  const radioBtns = document.querySelectorAll('.language-sec .tabs > input');
  if (preferredLanguage == "ar") {
    radioBtns[0].checked = true;
  } else {
    radioBtns[1].checked = true;
  }
}

function changeFontForTheEntirePage(preferredLanguage) {
  if (preferredLanguage == "ar")
    // document.body.style.fontFamily = 'SF Pro Text, "SF Pro Icons", "AOS Icons", "Helvetica Neue", Helvetica, Arial, sans-serif, system-ui';
    document.body.style.fontFamily = '"Cairo", sans-serif';
  else
    document.body.style.fontFamily = 'Poppins, sans-serif !important';

}

function changeDirectionForTheEntirePage(preferredLanguage) {

  if (preferredLanguage == "ar")
    document.body.style.direction = 'rtl';
  else
    document.body.style.direction = 'ltr';

}

function toggleSocialClass() {
  ///// prevent over click if the chosen language is already selected
  const socials = document.querySelector('.social');
  const HiSection = document.querySelector('.hi-sec');
  const myCV = document.querySelector('.my-CV');
  const Contact = document.querySelector('.contact');



  if (localStorage.getItem('preferredLanguage') == socials.classList[1].toLowerCase()) return;

  if (socials.classList.contains('ar') && !socials.classList.contains('en')) {
    toggleClass(socials, 'ar', 'en');
    toggleClass(HiSection, 'ar', 'en');
    toggleClass(myCV, 'ar', 'en');
    toggleClass(Contact, 'ar', 'en');
  } else {
    toggleClass(socials, 'en', 'ar');
    toggleClass(Contact, 'en', 'ar');
    toggleClass(HiSection, 'en', 'ar');
    toggleClass(myCV, 'en', 'ar');
  }

}

function setLanguageClassForElements() {
  const preferredLanguage = localStorage.getItem('preferredLanguage');
  const HiSection = document.querySelector('.hi-sec');
  const myCV = document.querySelector('.my-CV');
  const Contact = document.querySelector('.contact');

  console.log(Contact);

  if (preferredLanguage == "ar") {
    toggleClass(HiSection, 'en', 'ar');
    toggleClass(myCV, 'en', 'ar');
    toggleClass(Contact, 'en', 'ar');
  } else {
    toggleClass(HiSection, 'ar', 'en');
    toggleClass(myCV, 'ar', 'en');
    toggleClass(Contact, 'ar', 'en');
  }

}


function toggleClass(element, oldClass, updatedClass) {
  element.classList.remove(oldClass);
  element.classList.add(updatedClass);
}


// Load the preferred language when the page is loaded
document.addEventListener('DOMContentLoaded', loadLanguagePreference);

// Add event listeners to the language buttons

document.querySelectorAll('.language-sec .tabs > input').forEach(button => {
  button.addEventListener('click', (event) => {
    const language = event.target.value.toLowerCase();
    changeLanguage(language);
    changeDirectionForTheEntirePage(language)
    changeFontForTheEntirePage(language)
    saveLanguagePreference(language);
    toggleSocialClass()
  });
});





//////  -------------------------------------------------// [change Language ] // ----------------------------------------------------

