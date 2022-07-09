"use strict";

///////////////////////////
//////////////////
// Navbar

const hideButton = document.querySelector(".navbar_hide-button");
const listsContainer = document.querySelector(".navbar_lists-box");
const subitemsContainer = document.querySelectorAll(".navbar_subitems-box");
const nameLogoContainer = document.querySelector(".navbar_name-box");
const nameDashboard = document.querySelector(".navbar_dashboard-name");
const nameItemAll = document.querySelectorAll(".navbar_item-name");
const nameItemActive = document.querySelector(".navbar_item-name--active");
const nameSubitemAll = document.querySelectorAll(".navbar_subitem-name");

const namesToggle = () => {
  nameLogoContainer.classList.toggle("navbar_hide");
  nameDashboard.classList.toggle("navbar_hide");
  nameItemAll.forEach(function (el) {
    el.classList.toggle("navbar_hide");
  });
  nameSubitemAll.forEach(function (el) {
    el.classList.toggle("navbar_hide");
  });
};
//
////
//
//
////
//
//
////
//
listsContainer.addEventListener("click", function (e) {
  const parentContainer = e.target.closest(".navbar_items-box");
  const showContainer = parentContainer.lastElementChild;
  const matchContainer = parentContainer.lastElementChild.getAttribute("class");

  if (!nameLogoContainer.classList.contains("navbar_hide")) {
    if (matchContainer === "navbar_subitems-box" || matchContainer === "navbar_subitems-box navbar_subitems-box--show") {
      showContainer.classList.toggle("navbar_subitems-box--show");
    }
  }

  if (nameLogoContainer.classList.contains("navbar_hide")) {
    if (matchContainer === "navbar_subitems-box" || matchContainer === "navbar_subitems-box navbar_subitems-box--show") {
      showContainer.classList.toggle("navbar_subitems-box--show");
    }
    namesToggle();
  }
});
//
/////////
//
listsContainer.addEventListener("click", function (e) {
  const parentContainer = e.target.closest(".navbar_subitems-box");
  if (parentContainer) {
    parentContainer.classList.add("navbar_subitems-box--show");
  }
});
//
/////////
//
hideButton.addEventListener("click", function () {
  if (!nameLogoContainer.classList.contains("navbar_hide")) {
    namesToggle();
    subitemsContainer.forEach(function (el) {
      el.classList.remove("navbar_subitems-box--show");
    });
    hideButton.querySelector("svg").style.transform = "rotate(180deg)";
  } else {
    namesToggle();
    if (nameItemActive?.parentElement.nextElementSibling) {
      nameItemActive.parentElement.nextElementSibling.classList.add("navbar_subitems-box--show");
    }
    hideButton.querySelector("svg").style.transform = "rotate(0deg)";
  }
});
//
/////////
//

//
//
//
//
//
//
//
//
//
//
//
//
// document.querySelector(".navbar_hide-button").addEventListener("click", function () {
//   if (document.querySelector(".navbar_name-box").classList.contains("navbar_hide")) {
//     document.querySelector(".navbar_name-box").classList.toggle("navbar_hide");
//     document.querySelector(".navbar_dashboard-name").classList.toggle("navbar_hide");
//     document.querySelectorAll(".navbar_item-name").forEach(function (el) {
//       el.classList.toggle("navbar_hide");
//     });
//     document.querySelectorAll(".navbar_subitem-name").forEach(function (el) {
//       el.classList.toggle("navbar_hide");
//     });
//     document.querySelector(".sections").classList.toggle("sections--hide");
//   }

//   if (!document.querySelector(".navbar_name-box").classList.contains("navbar_hide")) {
//     document.querySelector(".navbar_name-box").classList.toggle("navbar_hide");
//     document.querySelector(".navbar_dashboard-name").classList.toggle("navbar_hide");
//     document.querySelectorAll(".navbar_item-name").forEach(function (el) {
//       el.classList.toggle("navbar_hide");
//     });
//     document.querySelectorAll(".navbar_subitem-name").forEach(function (el) {
//       el.classList.toggle("navbar_hide");
//     });
//     document.querySelector(".sections").classList.toggle("sections--hide");

//     console.log(document.querySelector(".navbar_name-box").getAttribute("class"));
//     console.log(document.querySelector(".navbar_name-box").classList.contains("navbar_hide"));
//   }
// });
