const data = {
    "minitel": {
        title: "Minitel",
        image: "../images/fable1.jpeg",
        fields: [
            {
                title: "Year",
                content: "2025"
            }, {
                title: "Year",
                content: "2025"
            }, {
                title: "Year",
                content: "2025"
            }
        ],
        sections: [
            {
                title: "Intro",
                content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus adipisci molestias
                voluptates. Quo voluptatum id sequi iure, qui delectus ducimus maxime eius rem adipisci
                quisquam saepe, laudantium doloremque officiis pariatur? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Libero aperiam autem impedit porro nulla eveniet, possimus,
                quos sapiente vero obcaecati, ex quidem neque! Blanditiis, fuga accusamus hic repellendus ut
                corrupti. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem rem ex quam? Odio
                excepturi sed debitis vero, nam itaque culpa illo dolor, distinctio iusto earum iure
                similique, vel soluta ratione!`,
                images: [
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable1.jpeg"
                ]
            }, {
                title: "Int2ro",
                content: "lo2rem",
                images: [
                    "../images/fable2.jpeg",
                    "../images/fable1.jpeg",
                    "../images/fable3.jpeg"
                ]
            }
        ]
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Get projects
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const project = urlParams.get('project');
    const projectData = data[project];

    // Set title
    document.getElementById("title").innerHTML = `${projectData.title}`;
    document.getElementById("header-image").src = `${projectData.image}`;

    // Create all the fields
    for (let i = 0; i < projectData.fields.length; i++) {
        const newElement = document.createElement("div");
        // newElement.classList = "c";
        newElement.innerHTML = `
            <p>${projectData.fields[i].title}</p>
            <p style="font-weight: 100;">${projectData.fields[i].content}</p>
        `

        document.getElementById("infobox").appendChild(newElement);
    }

    // Create all text sections
    for (let i = 0; i < projectData.sections.length; i++) {
        document.getElementById("content").innerHTML +=  `
            <div class="w-100 mb-2 py-2 mt-5"
                style="border-bottom: 1px solid var(--primary-muted); color: var(--primary-muted)">
                ${projectData.sections[i].title}
            </div>

            <div>${projectData.sections[i].content}</div>

                <!-- Images -->
                <div class="images d-flex flex-nowrap overflow-x-auto py-5" style="height: 400px;">
                    ${projectData.sections[i].images.map(el => `
                        <div class="me-4 h-100" style="aspect-ratio: 1 / 1; flex: 0 0 auto;">
                            <img class="w-100 h-100 object-fit-cover" src="` + el + `">
                        </div>
                    `).join("")}
                </div>
        `;
    }

    // Create all the images
    for (let i = 0; i < projectData.images.length; i++) {
        const newImage = document.createElement("img");
        newImage.classList = "img-fluid mb-3";
        newImage.src = projectData.images[i];
        document.getElementById("images").appendChild(newImage);
    }

    const infoBox = document.getElementById("infobox");
    for (let i = 0; i < projectData.info.length; i++) {
        infoBox.innerHTML += `
            <div class="row border-bottom ${i == 0 ? "border-top" : ""} p-2">
                <div class="col-auto">${projectData.info[i].title}</div>
                <div class="col"></div>
                <div class="col-auto">${projectData.info[i].value}</div>
            </div>
        `;
    }
});