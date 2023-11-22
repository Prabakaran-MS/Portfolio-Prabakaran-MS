let projectContainer = document.querySelector('#projectContainer');

function loadProject(title, period, description, githubLink, projectDetails, technologiesUsed, img) {

    const project = document.createElement('div');
    project.className = 'projectDetails p-3 m-3 rounded';

    const row = document.createElement('div');
    row.className = 'row';

    const col1 = document.createElement('div');
    col1.className = 'col-md-4';

    col1.innerHTML = `<div class="icon-align">
                        <p><i class="bi bi-calendar me-2"></i>${period.length === 1 ? period[0] : period.join(" - ")}</p>
                    </div>         
                    <div class="w-100 p-2 d-md-block d-none">
                        <img src=${img} alt="project screenshot" class="w-100 p-2">
                    </div>`;

    const col2 = document.createElement('div');
    col2.className = 'col-md-8';

    const innerRow = document.createElement('div');
    innerRow.className = "row";

    innerRow.innerHTML = `<div class="col-10">
                            <h4>${title} <small><i class="bi bi-arrow-up-right"></i></small></h4>
                        </div>
                        <div class="col-2">
                            <a href=${githubLink} class="link-primary link-underline link-underline-opacity-0">Github</a>
                        </div>`;

    const pDescription = document.createElement('p');
    pDescription.textContent = description;

    const pDetails = document.createElement('ul');
    pDetails.className = "list-unstyled";

    projectDetails.forEach(info => {
        const list = document.createElement('li');
        list.className = "h-list"
        list.innerHTML = `<i class="bi bi-caret-right-fill me-2"></i>${info}`;
        pDetails.appendChild(list);
    });

    const techUsed = document.createElement('div');
    techUsed.className = "technology d-flex flex-wrap";

    technologiesUsed.forEach(tech => {
        const div = document.createElement('div');
        div.className = "rounded-pill text-bg-primary p-2 m-1"
        div.textContent = tech;
        techUsed.appendChild(div);
    });


    col2.appendChild(innerRow);
    col2.appendChild(pDescription);
    col2.appendChild(pDetails);
    col2.appendChild(techUsed);


    const col3 = document.createElement('div');
    col3.className = "col-md-12 d-md-none";
    col3.innerHTML = `<img src=${img} alt="project screenshot" class="w-100 p-2">`;

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    project.appendChild(row);

    projectContainer.appendChild(project);

}

const projectsData = [
    ['Expense Tracker', ['Oct 23'],
        'Expense management app with tracking, visualization, and state management.',
        'https://github.com/Prabakaran-MS/Expense-Tracker', [
            'Visualized spending habits over different time frames (week, month, year) for better financial insights.',
        ],
        ['JavaScript', 'HTML', 'CSS'],
        "./images/project/expense-tracker.png"
    ],
    ['Random Quote Generator', ['Oct 23'],
        'Developed a web application that generates random quotes using JavaScript.',
        'https://github.com/Prabakaran-MS/Random-Quote-Generator', [
            'Implemented a real-time quote generation feature for user engagement.',
            `
    Utilized asynchronous JavaScript to fetch and display quotes.
    `,
        ],
        ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        "./images/project/random-quote-generator.png"
    ],
    ['To-Do List Web App', ['Sep 23'],
        'Developed a task management web application for efficient task tracking.',
        'https://github.com/Prabakaran-MS/To-Do-list-Web-App', [
            'Features include adding, completing, and deleting tasks with a responsive design.',
        ],
        ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        "./images/project/to-do-list.png"
    ],
    ['CGPA Calculator', ['Sep 23'],
        'Designed a CGPA calculator for the Department of IST at Anna University.',
        'https://github.com/Prabakaran-MS/Au-Cgpa-Calculator', [
            'Streamlined academic tracking by enabling students to calculate their CGPA effortlessly.',
        ],
        ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'XLSX Library'],
        "./images/project/au-cgpa-calculator.png"
    ]
];


projectsData.forEach(data => {
    loadProject(...data);
});


let projectFooter = document.getElementById('projectFooter');
const username = 'Prabakaran-MS';

fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        const repositoryCount = data.public_repos;

        projectFooter.innerHTML = `<p>Click here to see the rest of 
                                        <a class="link-underline link-underline-opacity-0 badge  p-1 pe-2 text-warning-emphasis bg-warning-subtle rounded-pill" href="https://github.com/${username}?tab=repositories" target="_blank">
                                            <i class="bi bi-github me-2"></i> ${repositoryCount - projectsData.length -1}+
                                        </a> projects
                                    </p>`;

    })
    .catch(error => console.error('Error fetching data from GitHub API:', error));