"use strict";

var userInterface = document.querySelector(".user-interface");
var modal = userInterface.querySelectorAll(".modal");
var modals = Array.from(modal);
var linkIcon = userInterface.querySelectorAll(".link-icon-container");
var linkIcons = Array.from(linkIcon);

/* выпадашки юзер-интерфейса */
linkIcons.forEach(function(it) {
  it.addEventListener("mouseenter", function(evt) {
    // debugger
    var currentModal = evt.target.nextElementSibling;

    modals.forEach(function(it) {
      it.classList.add("hidden");
    });

    currentModal.classList.remove("hidden");

    // currentModal.addEventListener("mouseleave", function() {
    //   currentModal.classList.add("hidden");
    // });
    document.querySelector("body").addEventListener("mouseenter", function() {
      currentModal.classList.add("hidden");
    })
  })
});

/* выпадающее меню */

var siteMenuItem = document.querySelector(".site-menu-item");

siteMenuItem.addEventListener("mouseover", function(evt) {
  var dropDown = evt.target.nextElementSibling;
  dropDown.classList.remove("hidden");
  dropDown.addEventListener("mouseleave", function() {
    dropDown.classList.add("hidden");
  })
});



