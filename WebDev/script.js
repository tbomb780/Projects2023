// Get the company name and established year elements
const companyNameElement = document.getElementById("company-name");
const establishedYearElement = document.getElementById("established-year");

// Update the company name dynamically
companyNameElement.textContent = "New Company Name";

// Update the established year dynamically
const currentYear = new Date().getFullYear();
establishedYearElement.textContent = "Est. " + currentYear;
