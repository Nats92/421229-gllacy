"use strict";

var browString = navigator.appVersion;
var ie = browString.indexOf("Trident");

var userInterface = document.querySelector(".user-interface");
var indicator = document.querySelector(".hover-indicator");
var body = document.querySelector("body");

function addHandler(icon, modal) {
  icon.addEventListener("mouseenter", function() {
    modal.classList.remove("hidden");
    indicator.classList.add("leave-indicate");

    indicator.addEventListener("mouseover", function hideModal() {
      modal.classList.add("hidden");
      indicator.classList.remove("leave-indicate");
      indicator.removeEventListener("mouseover", hideModal);
    })
  })
}
function slideSwitch(activeControl, activeSlide, inactiveControl1, inactiveControl2, inactiveSlide1, inactiveSlide2, backColor) {
  activeControl.addEventListener("click", function() {
    inactiveControl1.classList.remove("active");
    inactiveControl2.classList.remove("active");

    activeControl.classList.add("active");
    activeSlide.classList.remove("hidden");

    inactiveSlide1.classList.add("hidden");
    inactiveSlide2.classList.add("hidden");
    body.style.backgroundColor = backColor;
  })
}

if ( ie > 0 ) {
  /* user-navigation */
  var searchIcon = userInterface.querySelector(".link-icon-container.search");
  var modalSearch = userInterface.querySelector(".modal-search");

  var logInIcon = userInterface.querySelector(".link-icon-container.login");
  var modalLogIn = userInterface.querySelector(".modal-log-in");

  var cartIcon = userInterface.querySelector(".link-icon-container.cart");
  var modalOrder = userInterface.querySelector(".modal-order");

  addHandler(searchIcon, modalSearch);
  addHandler(logInIcon, modalLogIn);
  addHandler(cartIcon, modalOrder);

  /* выпадающее меню */
  var menuCatalog = document.querySelector(".drop-down-contains");
  var dropDown = menuCatalog.querySelector(".drop-down-menu-wrap");
  menuCatalog.addEventListener("mouseenter", function() {
    dropDown.classList.remove("hidden");

    menuCatalog.addEventListener("mouseleave", function() {
      dropDown.classList.add("hidden");
    })
  });

  /* slider */
  var controlButton1 = document.querySelector(".slider-controls button:first-child");
  var controlButton2 = document.querySelector(".slider-controls button:nth-child(2)");
  var controlButton3 = document.querySelector(".slider-controls button:nth-child(3)");
  var slide1 = document.querySelector(".slider-item:first-child");
  var slide2 = document.querySelector(".slider-item:nth-child(2)");
  var slide3 = document.querySelector(".slider-item:nth-child(3)");

  slideSwitch(controlButton1, slide1, controlButton2, controlButton3, slide2, slide3, "#849d8f");
  slideSwitch(controlButton2, slide2, controlButton1, controlButton3, slide1, slide3, "#8996a6");
  slideSwitch(controlButton3, slide3, controlButton1, controlButton2, slide1, slide2, "#9d8b84");

} else {
  var modalCollection = userInterface.querySelectorAll(".modal");
  var modals = Array.from(modalCollection);
  var linkIconCollection = userInterface.querySelectorAll(".link-icon-container");
  var linkIcons = Array.from(linkIconCollection);

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
}

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



