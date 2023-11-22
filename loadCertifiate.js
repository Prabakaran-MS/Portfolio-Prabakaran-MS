certificateContainer = document.getElementById("accordionExample");

function loadCertificate(datas) {

    let c = 0;

    datas.forEach(data => {
        c += 1;
        const div = document.createElement('div');
        div.className = "accordion-item";
        div.innerHTML = `
        <h4 class="accordion-header">
            <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse${c}">
                <i class="bi bi-patch-check me-2"></i>${data[0]}
            </button>
        </h4>
        <div id="collapse${c}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
            <div class="accordion-body text-center">
            <img src=${data[1]} alt="certificate${c}" class="w-75 ">
            </div>
        </div>                    
        `;
        certificateContainer.appendChild(div);
    });
}





data = [
    ["Git Github", "./images/certificate/git-github.jpg"],
    ["Twitter Bootstrap", "./images/certificate/twitter-bootstrap.jpg"],
    ["Asynchronous JavaScript", "./images/certificate/asynchronous-javascript.jpg"],
    ["Object Oriented JavaScript", "./images/certificate/object-oriented-javascript.jpg"],
    ["JavaScript es6", "./images/certificate/javascript-es6.jpeg"],
    ["Front End Development - html", "./images/certificate/front-end-development-html.jpg"]
]


loadCertificate(data)