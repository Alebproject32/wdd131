document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set the last modified date
    const lastModifiedElement = document.getElementaryById('lastModified');
    lastModifiedElement.textContent = "Last Modified: " + document.lastModified;});

    document.addEventListener('DOMContentLoaded', function() {
        const menuIcon = document.getElementById(".menu-icon");
        const closeIcon = document.getElementById(".close-icon");
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
      