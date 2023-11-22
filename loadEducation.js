const educationsContainer = document.querySelector(".educationContainer");

function loadEducation(degree, years, college, location, logoPath) {

    const educationDiv = document.createElement("div");
    educationDiv.className = "educationDetails p-3 my-3";

    const row = document.createElement("div");
    row.className = "row";

    const col1 = document.createElement("div");
    col1.className = "col-9";

    const degreeElement = document.createElement("h4");
    degreeElement.textContent = degree;

    const collegeElement = document.createElement("p");
    collegeElement.textContent = college;

    const locationElement = document.createElement("p");
    locationElement.innerHTML = `<i class="bi bi-geo-alt me-2"></i>${location}`

    col1.appendChild(degreeElement);
    col1.appendChild(collegeElement);
    col1.appendChild(locationElement);


    const col2 = document.createElement("div");
    col2.className = "col-3 text-center";

    const periodElement = document.createElement("p");
    periodElement.innerHTML = `<i class="bi bi-calendar me-2"></i>${years.join(" - ")}`

    const imageDiv = document.createElement("div");
    imageDiv.innerHTML = `<img src=${logoPath} alt="college logo" style="height: 3.5rem;">`

    col2.appendChild(periodElement);
    col2.appendChild(imageDiv);


    row.appendChild(col1);
    row.appendChild(col2);

    educationDiv.appendChild(row);

    educationsContainer.appendChild(educationDiv)
}


// Call the function to load education data
loadEducation("MCA", ["2021", "2023"],
    "College of Engineering, Guindy",
    "Chennai", "./images/education/CEG.png");
loadEducation("BSc", ["2018", "2021"],
    "PSG College of Arts & Science",
    "Coimbatore", "./images/education/PSG.png");