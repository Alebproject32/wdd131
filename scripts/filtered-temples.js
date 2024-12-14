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

  if (menuIcon && closeIcon) {
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
  }

  // Temple data
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caurimare, Caracas, Venezuela",
      dedicated: "2000, August, 20",
      area: 15332,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55702.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 21008,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44424,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-231947-wallpaper.jpg"
    }
  ];

  // Function to create and display temple cards
  function createTempleCard(temples) {
    const container = document.getElementById('temples-container');
    container.innerHTML = '';
    temples.forEach(temple => {
      let card = document.createElement("section");
      card.classList.add('temple-card');
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      container.appendChild(card);
    });
  }

  // Display all temples by default
  createTempleCard(temples);

  // Filter functions
  function filterOldTemples() {
    return temples.filter(temple => new Date(temple.dedicated.split(', ')[1]).getFullYear() < 1900);
  }

  function filterNewTemples() {
    return temples.filter(temple => new Date(temple.dedicated.split(', ')[1]).getFullYear() > 2000);
  }

  function filterLargeTemples() {
    return temples.filter(temple => temple.area > 90000);
  }

  function filterSmallTemples() {
    return temples.filter(temple => temple.area < 10000);
  }

  // Event listeners for navigation
  document.getElementById('home').addEventListener('click', () => createTempleCard());
  document.getElementById('old').addEventListener('click', () => createTempleCard(filterOldTemples()));
  document.getElementById('new').addEventListener('click', () => createTempleCard(filterNewTemples()));
  document.getElementById('large').addEventListener('click', () => createTempleCard(filterLargeTemples()));
  document.getElementById('small').addEventListener('click', () => createTempleCard(filterSmallTemples()));
});
