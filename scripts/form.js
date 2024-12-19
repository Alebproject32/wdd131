document.addEventListener("DOMContentLoaded", function () {
    // Set the current year
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
  
    // Set the last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = "Last Modified: " + document.lastModified;
    // Product array
    const products = [
        { id: 0, name: "Select a Product..." },
        { id: 1, name: "Product 1. Frozen chocolate with vanilla sponge cake and peanuts." },
        { id: 2, name: "Product 2. Avenger´s cake with USA color flags, chocolate chips and bits of cookies." },
        { id: 3, name: "Product 3. Cupcakes filled and covered of lemon cream." },
    ];

    // Populate the product select field
    const productSelect = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // LocalStorage review counter
    window.onload = function() {
        const reviewsCount = localStorage.getItem('reviewsCount') || 0;
        localStorage.setItem('reviewsCount', parseInt(reviewsCount) + 1);
        console.log(`Number of reviews submitted: ${localStorage.getItem('reviewsCount')}`);
    };
});
