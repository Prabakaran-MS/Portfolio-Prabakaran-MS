const experienceContainer = document.getElementById('experienceContainer');

function loadPersonalInfo(data) {
    const div = document.createElement('div');
    div.className = "experienceDetails rounded p-3";

    const row = document.createElement('div');
    row.className = "row";
    row.innerHTML = `<div class="col-md-3">
                        <i class="bi bi-calendar me-2"></i>${data.period.join(" - ")}
                    </div>
                    <div class="col-md-9">
                        <h4>
                            <img src="${data.logo}" alt="${data.Organisation} logo" class="me-2" style="width: 40px; height: 40px;">
                            ${data.Organisation} <small><i class="bi bi-arrow-up-right"></i></small>
                        </h4>
                        <p>${data.designation}</p>
                        <p>${data.location}</p>
                        <p>${data.workDetail}</p>
                        <div class="technology d-flex flex-wrap">
                        ${data.techUsed.map(tech => `<div class="rounded-pill text-bg-primary p-2 m-1">${tech}</div>`).join('')}
                        </div>
                    </div>`;

    div.appendChild(row);
    experienceContainer.appendChild(div);
}


const advantest = {
    Organisation: "Advantest",
    designation: "Junior Software Engineer",
    location: "Chennai, India",
    logo: "./images/organization/Advantest.png", 
    period: ["Jan 2023", "Present"],
    workDetail: "Developed high-quality production code for diverse client projects. Worked on server projects and driverSets, including adding features, refactoring code, and creating documentation. Enhanced company software product suite with focus on performance improvements and bug fixes. Automated deployment processes by creating batch scripts for publish folder generation and managed shell scripts for various tasks. Conducted manual testing to ensure software quality and performance.",
    techUsed: ['C#', 'Winforms', 'Shell Script', 'Batch Script']
};

// Load personal info for both Mphasis and Advantest
loadPersonalInfo(advantest);
