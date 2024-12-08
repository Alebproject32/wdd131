document.addEventListener("DOMContentLoaded", function () {
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    var date = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = "Last Modified: " + date;

    const temp = 10; // Static temperature value in Celsius
    const windSpeed = 5; // Static wind speed value in km/h

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("windChill").textContent = windChill;

    function calculateWindChill(temp, windSpeed) {
        // Wind chill calculation formula for Celsius
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
        } else {
            return "N/A";
        }
    }
});
