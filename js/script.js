"use strict";

var userInterface = document.querySelector(".user-interface");
var modalCollection = userInterface.querySelectorAll(".modal");
var modals = Array.from(modalCollection);
var linkIconCollection = userInterface.querySelectorAll(".link-icon-container");
var linkIcons = Array.from(linkIconCollection);
var indicator = document.querySelector(".hover-indicator");

/* выпадашки юзер-интерфейса */
linkIcons.forEach(function(it) {
  it.addEventListener("mouseenter", function(evt) {
    var currentModal = evt.target.nextElementSibling;

    modals.forEach(function(it) {
      it.classList.add("hidden");
    });

    currentModal.classList.remove("hidden");
    indicator.classList.add("leave-indicate");

    indicator.addEventListener("mouseover", function indicate() {
      currentModal.classList.add("hidden");
      indicator.classList.remove("leave-indicate");
      indicator.removeEventListener("mouseover", indicate);
    });
  })
});

/* выпадающее меню */

var siteMenuItemCollection = document.querySelectorAll(".site-menu-item");
var siteMenuItems = Array.from(siteMenuItemCollection);

siteMenuItems.forEach(function(it) {
    it.addEventListener("mouseenter", function() {
      var dropDownMenu = it.querySelector(".drop-down-menu-wrap");

      if (dropDownMenu) {
        dropDownMenu.classList.remove("hidden");
        it.addEventListener("mouseleave", function hoverLeft() {
          dropDownMenu.classList.add("hidden");
          it.removeEventListener("mouseleave", hoverLeft);
        });
      }
    })
});

/* слайдер */

var body = document.querySelector("body");
var sliderSection = document.querySelector(".slider");
var slideCollection = sliderSection.querySelectorAll(".slider-item");
var slides = Array.from(slideCollection);

var sliderControlsCollection = sliderSection.querySelectorAll("button");
var sliderControls = Array.from(sliderControlsCollection);

sliderControls[0].addEventListener("click", function() {
  sliderControls.forEach(function(it) {
    it.classList.remove("active");
  });
  sliderControls[0].classList.add("active");
  body.style.backgroundColor = "#849d8f";
  slides.forEach(function(it) {
    it.classList.add("hidden");
  });
  slides[0].classList.remove("hidden");
});

sliderControls[1].addEventListener("click", function() {
  sliderControls.forEach(function(it) {
    it.classList.remove("active");
  });
  sliderControls[1].classList.add("active");
  body.style.backgroundColor = "#8996a6";
  slides.forEach(function(it) {
    it.classList.add("hidden");
  });
  slides[1].classList.remove("hidden");
});

sliderControls[2].addEventListener("click", function() {
  sliderControls.forEach(function(it) {
    it.classList.remove("active");
  });
  sliderControls[2].classList.add("active");
  body.style.backgroundColor = "#9d8b84";
  slides.forEach(function(it) {
    it.classList.add("hidden");
  });
  slides[2].classList.remove("hidden");
});

/* Модалка обратная связь */

var showFeedbackForm = document.querySelector(".show-feedback-form");
var feedbackFormOverlay = document.querySelector(".feedback-form-overlay");
var closeFeedback = document.querySelector(".close-form");

showFeedbackForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackFormOverlay.classList.remove("hidden");

  closeFeedback.addEventListener("click", function closeForm(evt) {
    evt.preventDefault();
    feedbackFormOverlay.classList.add("hidden");
    closeFeedback.removeEventListener("click", closeForm);
  })
});




