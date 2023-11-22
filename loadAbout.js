const aboutContainer = document.getElementById('aboutContainer');

function loadAbout(data) {

    data.forEach(info => {
        const p = document.createElement('p');
        p.textContent = info;

        aboutContainer.appendChild(p);
    });
}


const datas = [
    "Hello! I'm Prabakaran M S, a passionate software enthusiast. I specialize in a range of technologies, such as HTML, CSS, JavaScript, Bootstrap, React, Python, and even delve into machine learning with Flask, C, and C++. My heart lies in creating smartsolutions, and I'm always ready to explore new horizons through continuous learning.",
    "My goal is to develop smart, efficient software solutions that help businesses thrive. I'm genuinely excited about the boundless opportunities in technology and look forward to tackling fresh challenges and embracing advancements in this field. Let's connect and explore these exciting possibilities together!"
]

loadAbout(datas)