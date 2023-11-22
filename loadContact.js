const contact = document.getElementById('contactContainer');

function loadContact(datas) {

    const detailsContainer = document.createElement('ul');
    detailsContainer.className = "list-inline";

    datas.forEach(data => {
        const [iconHTML, link] = data;
        const list = document.createElement('li');
        list.className = "list-inline-item mx-2";

        const a = document.createElement('a');
        a.className = "text-white ";
        a.innerHTML = iconHTML;
        a.href = link;
        a.target = '_blank';

        list.appendChild(a);
        detailsContainer.appendChild(list);
    });

    contact.appendChild(detailsContainer);

}


const contactData = [
    [`<i class="bi bi-instagram"></i>`,
        "https://www.instagram.com/prabakaran.ms/"
    ],
    [`<i class="bi bi-github"></i>`,
        "https://github.com/Prabakaran-MS"
    ],
    [`<i class="bi bi-linkedin"></i>`,
        "https://www.linkedin.com/in/prabakaran-m-s-897782182/ "
    ],
];

loadContact(contactData);