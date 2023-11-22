const info = document.getElementById('personalInfo');

function loadPersonalInfo(data) {
    const div1 = document.createElement('div');
    div1.className = "title text-center";
    div1.innerHTML = `<h1>${data.name}</h1>`

    const div2 = document.createElement('div');
    div2.className = "contact";
    div2.innerHTML = `<div class="icon-align">
                        <i class="bi bi-briefcase-fill me-2"></i>${data.desigination}
                    </div>
                    <div class="icon-align">
                        <i class="bi bi-geo-alt-fill me-2"></i>${data.location}
                    </div>
                    <div class="icon-align">
                        <i class="bi bi-envelope-at-fill me-2"></i>${data.mail}
                    </div>
                    <div class="icon-align">
                        <i class="bi bi-telephone-fill me-2"></i>${data.phone}
                    </div>`;

    info.appendChild(div1);
    info.appendChild(div2);
}


const personalDetails = {
    name: "Prabakaran M S",
    desigination: "Software Engineer",
    location: "Chennai, TamilNadu, INDIA",
    mail: "ms.prabakaran11@gmail.com",
    phone: "+91 - 9659108541"
}

loadPersonalInfo(personalDetails)