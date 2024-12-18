document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
  
    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
  
    // Menu toggle functionality
    const menuIcon = document.querySelector("menu-icon");
    const closeIcon = document.querySelector("close-icon");
    const navUl = document.getElementById("nav-list");
  
    menuIcon.addEventListener("click", () => {
        navUl.classList.toggle("active");
        menuIcon.classList.add("hidden");
        closeIcon.style.display = "block";
    });
  
    closeIcon.addEventListener("click", () => {
        navUl.classList.remove("active");
        menuIcon.classList.remove("hidden");
        closeIcon.style.display = "none";
    });
  });