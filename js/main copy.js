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
  if (window.localStorage.getItem("Ptheme") === "one") {
    changeToTheme1();
  } else if (window.localStorage.getItem("Ptheme") === "two") {
    changeToTheme2();
  } else {
    changeToTheme3();
  }
  themes.forEach((th) => {
    th.classList.remove("active");
  });
  themes.forEach((th) => {
    if (th.classList.contains(`${window.localStorage.getItem("Ptheme")}`)) {
      th.classList.add("active");
    }
  });
}

//// functions to change theme
function changeToTheme1() {
  document.documentElement.style.setProperty("--master-color", "#03042a");
  document.documentElement.style.setProperty("--second-color", "#a7c5f1");
  document.documentElement.style.setProperty("--third-color", "#cc8fac");
  document.documentElement.style.setProperty("--fourth-color", "#4b4584");
  document.documentElement.style.setProperty("--fifth-color", "#210d49");
  document.documentElement.style.setProperty("--hight-contrast", "#140d36");
  document.documentElement.style.setProperty("--text-color", "#f7f7f7");
  landImg.innerHTML = `<img src="images/landing1.svg" alt="landing-page-image"/>`;
  skiImg.innerHTML = `<img src="images/skills1.svg" alt="skills-image"/>`;
  conImg.innerHTML = `<img src="images/contact1.svg" alt="contact-image"/>`;
}
function changeToTheme2() {
  document.documentElement.style.setProperty("--master-color", "#0a0a0c");
  document.documentElement.style.setProperty("--second-color", "#001910");
  document.documentElement.style.setProperty("--third-color", "#ddd");
  document.documentElement.style.setProperty("--fourth-color", "#ff9d9d");
  document.documentElement.style.setProperty("--fifth-color", "#795548");
  document.documentElement.style.setProperty("--hight-contrast", "#121212");
  document.documentElement.style.setProperty("--text-color", "#f7f7f7");
  landImg.innerHTML = `<img src="images/landing2.svg"  alt="landing-page-image" />`;
  skiImg.innerHTML = `<img src="images/skills2.svg" alt="skills-image" />`;
  conImg.innerHTML = `<img src="images/contact2.svg" alt="contact-image" />`;
}
function changeToTheme3() {
  document.documentElement.style.setProperty("--master-color", "#eee");
  document.documentElement.style.setProperty("--second-color", "#001910");
  document.documentElement.style.setProperty("--third-color", "#121212");
  document.documentElement.style.setProperty("--fourth-color", "#101010");
  document.documentElement.style.setProperty("--fifth-color", "#eeeeee");
  document.documentElement.style.setProperty("--hight-contrast", "#ecebec");
  document.documentElement.style.setProperty("--text-color", "#000000");
  landImg.innerHTML = `<img src="images/landing2.svg" alt="landing-page-image"/> `;
  skiImg.innerHTML = `<img src="images/skills2.svg" alt="skills-image" />`;
  conImg.innerHTML = `<img src="images/contact2.svg" alt="contact-image" />`;
}

//// changing theme technique

function triggerThemes(e) {
  if (e.currentTarget.classList[0] === "theme1") {
    setTimeout(changeToTheme1, 100);
    window.localStorage.setItem("Ptheme", "one");
  } else if (e.currentTarget.classList[0] === "theme2") {
    setTimeout(changeToTheme2, 100);
    window.localStorage.setItem("Ptheme", "two");
  } else {
    setTimeout(changeToTheme3, 100);
    window.localStorage.setItem("Ptheme", "three");
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
