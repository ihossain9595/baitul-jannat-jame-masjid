"use strict";

const headerMenuIcon = document.querySelector(".header_menu-icon");
const sidebarHeadingIcon = document.querySelector(".sidebar_heading-icon");
const sidebarHeadingBox = document.querySelector(".sidebar_heading-box");
const sidebarHeadingBox2 = document.querySelector(".sidebar_heading-box2");
const sidebarSubheadingBox = document.querySelector(".sidebar_subheading-box");
const sidebarArrowRight = document.querySelector(".sidebar_arrow--right");
const sidebarArrowDown = document.querySelector(".sidebar_arrow--down");

sidebarHeadingBox.addEventListener("click", function () {
  sidebarSubheadingBox.classList.toggle("sidebar_subheading-box--hidden");
  sidebarArrowRight.classList.toggle("sidebar_arrow--right-hidden");
  sidebarArrowDown.classList.toggle("sidebar_arrow--down-hidden");
});

headerMenuIcon.addEventListener("click", function () {
  sidebarHeadingBox2.classList.toggle("display--none");
  sidebarSubheadingBox.classList.toggle("display--none");
  if (sidebarHeadingBox2.classList.contains("display--none")) {
    console.log("HeLLO");
    sidebarHeadingIcon.style.fontSize = "3rem";
  } else {
    sidebarHeadingIcon.style.fontSize = "1.8rem";
    sidebarHeadingIcon.style.marginRight = "0";
  }
});
