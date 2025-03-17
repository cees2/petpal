"use strict";

const faqClickHandler = function (event) {
  event.stopPropagation();

  const { target } = event;
  const clickedFAQElement = target.closest(".faq-element");
  const hiddenContentElement = clickedFAQElement.querySelector(
    ".faq-hidden-content"
  );
  const isExpanding = hiddenContentElement.style.height === "";

  clickedFAQElement.classList.toggle("faq-content-expanded");

  if (isExpanding) {
    hiddenContentElement.style.height = `${hiddenContentElement.scrollHeight}px`;
    hiddenContentElement.style.margin = "0 9.6rem 3.2rem";
  } else {
    hiddenContentElement.style.height = "";
    hiddenContentElement.style.margin = "0 9.6rem";
  }
};

const faqSection = document.querySelector("section.faq");
faqSection.addEventListener("click", faqClickHandler);

const currentYear = new Date().getFullYear();
const footerRightsSpan = document.querySelector(".footer-rights");
footerRightsSpan.textContent = `© Copyright ${currentYear} by Petpal LLC. All rights reserved`;

const mainNavList = document.querySelector(".main-header-nav-list ");
const mainNavListClickHandler = (event) => {
  const { target } = event;
  const hrefAttribute = target.getAttribute("href");
  const scrollDestination = document.querySelector(hrefAttribute);
  scrollDestination?.scrollIntoView({ behavior: "smooth", block: "start" });
};

mainNavList.addEventListener("click", mainNavListClickHandler);

const mobileMenuTrigger = document.querySelector(".mobile-menu-trigger");
const mobileMenuHide = document.querySelector(".mobile-menu-hide");

const mobileMenuTrigerClickHanler = (event) => {
  const mainNavContainer = document.querySelector(".main-nav");
  mainNavContainer.classList.toggle("mobile-nav-active");
};

mobileMenuTrigger.addEventListener("click", mobileMenuTrigerClickHanler);
mobileMenuHide.addEventListener("click", mobileMenuTrigerClickHanler);
