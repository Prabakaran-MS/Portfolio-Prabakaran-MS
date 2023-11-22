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
                        <h4>${data.Organisation} <small><i class="bi bi-arrow-up-right"></i></small></h4>
                        <p>${data.desigination} </p>
                        <p>${data.workDetail}</p>
                        <div class="technology d-flex flex-wrap">
                        ${data.techUsed.map(tech => `<div class="rounded-pill text-bg-primary p-2 m-1">${tech}</div>`).join('')}
                        </div>
                    </div>`;

    div.appendChild(row);
    experienceContainer.appendChild(div);
}

const mphasis = {
    Organisation: "Mphasis",
    desigination: "Software Engineer",
    period: ["2024", "PRESENT"],
    workDetail: "Develop high-quality production code for diverse client projects, including prestigious institutions like Harvard Business School, Vanderbilt University, and more. Provide leadership and mentorship within the engineering department.",
    techUsed: ['JavaScript', 'HTML', 'CSS', 'Bootstrap']
}

loadPersonalInfo(mphasis);