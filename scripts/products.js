document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
  
    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
  
    // Menu toggle functionality
    const menuicon = document.querySelector(".menu-icon");
    const closeicon = document.querySelector(".close-icon");
    const navUl = document.getElementById("nav-list");
  
    menuicon.addEventListener("click", () => {
        navUl.classList.toggle("active");
        menuicon.classList.add("hidden");
        closeicon.style.display = "block";
    });
  
    closeicon.addEventListener("click", () => {
        navUl.classList.remove("active");
        menuicon.classList.remove("hidden");
        closeicon.style.display = "none";
    });
  });