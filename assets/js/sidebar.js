(function () {
  "use strict";

  function initializeSidebar() {
    var content = document.querySelector(".sidebar-page__content");
    var navigation = document.querySelector(".sidebar-page__list");

    if (!content || !navigation) {
      return;
    }

    var sections = Array.prototype.slice.call(content.querySelectorAll(".sidebar-page__section"));
    var buttons = Array.prototype.slice.call(navigation.querySelectorAll("button"));

    if (sections.length === 0 || sections.length !== buttons.length) {
      return;
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        sections.forEach(function (otherSection, otherIndex) {
          var isActive = otherIndex === index;
          otherSection.hidden = !isActive;
          buttons[otherIndex].setAttribute("aria-current", isActive ? "page" : "false");
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initializeSidebar);
}());
