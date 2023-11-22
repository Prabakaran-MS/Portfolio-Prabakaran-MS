const skillContainer = document.getElementById('skillContainer');

function loadSkill(data) {
    const div = document.createElement('div');
    div.className = "d-flex flex-wrap gap-2";

    data.forEach(skill => {
        const innerDiv = document.createElement('div');
        innerDiv.className = "text-bg-primary rounded-pill px-2 ";
        innerDiv.textContent = skill;

        div.appendChild(innerDiv);
    });

    skillContainer.appendChild(div);
}


const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
    "C",
    "C++",
    "Python",
    "Flask",
    "Machine Learning",
    "MySQL"
]

loadSkill(skills)