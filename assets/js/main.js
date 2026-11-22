// Mobile menu, CV download menus and the year in the footer.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // CV menus: one button opens a list of CV versions
  var menus = Array.prototype.slice.call(document.querySelectorAll(".cv-menu"));

  function closeMenu(menu, focusButton) {
    var button = menu.querySelector("button");
    var list = menu.querySelector(".cv-options");
    button.setAttribute("aria-expanded", "false");
    list.hidden = true;
    if (focusButton) button.focus();
  }

  menus.forEach(function (menu) {
    var button = menu.querySelector("button");
    var list = menu.querySelector(".cv-options");

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var willOpen = list.hidden;
      menus.forEach(function (m) { closeMenu(m, false); });
      if (willOpen) {
        list.hidden = false;
        button.setAttribute("aria-expanded", "true");
      }
    });

    menu.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !list.hidden) closeMenu(menu, true);
    });

    // close after picking a version
    list.addEventListener("click", function (event) {
      if (event.target.tagName === "A") closeMenu(menu, false);
    });
  });

  // click anywhere else closes open CV menus
  document.addEventListener("click", function (event) {
    menus.forEach(function (menu) {
      if (!menu.contains(event.target)) closeMenu(menu, false);
    });
  });

  // close the mobile menu after choosing a page link
  if (links && toggle) {
    links.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && !event.target.closest(".cv-menu") && links.classList.contains("is-open")) {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
});
