document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYearSpan = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;

    // Set the last modified date
    let lastModified = document.lastModified;
    console.log("lastModified: " + lastModified);});
