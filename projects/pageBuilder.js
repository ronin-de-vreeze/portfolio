const data = {
    "minitel": {
        title: "Minitel",
        image: "../images/retro1.JPG",
        fields: [
            {
                title: "Year",
                content: "2025"
            }, {
                title: "Type",
                content: "Personal"
            }, {
                title: "Tags",
                content: "Retro, ESP32 / Arduino, Recycle, API"
            }
        ],
        sections: [
            {
                title: "Saving old tech",
                content: `A couple of years ago my obsession with old forgotten tech stared to develop. THis resulted in me hoarding every piece of (broken) technology that I could get my hands on. Over the years I have build a little collection of computers, laptops, phones, random stuff, radios, printers and such, to hopefully use them in a future projects. (I dont own the last two (yet), I just saw them in a museum and was inspired)`,
                images: [
                    "../images/retro1.JPG",
                    "../images/retro2.JPG",
                    "../images/retro5.jpeg",
                    "../images/retro3.jpeg",
                    "../images/retro4.jpeg"
                ],
                videos: []
            }, {
                title: "The Alcatel Minitel",
                content: "On a cintage market in France, I found my favorite piece of techonlogy so far. A more than 40 year old Computer, the Alcatel Minitel A1. it was originally used as a device to save and phone your contacts, eliminating the use for memorizing all of your numbers.",
                images: [],
                videos: []
            }, {
                title: "Converting it",
                content: "The first thing on the to-do list was to interface with it somehow. I found nothing on the machine except what seemed to e a MIDI port on the back. After consulting some forums online I was confident enough to try it out. I smashed some soft soldering tin in each of the port-holes and connected them to a ESP32. With just i few lines of code I was able to send any character to the screen, one of which could clear the screen. In essence, this was enough to be able to write to the whole screen so I moved to the next step.",
                images: [],
                videos: []
            }, {
                title: "Integration",
                content: "The end goal was to connect my to-do list from Trello to the computer. To get there, I first wanted to connect the ESP32 to the internet, because it has been a struggle in the past, so I listed out the wifi networks present. After that the integration of the Trello API was pretty simple. I ask the API to give me all the card from all the boards and ",
                images: [],
                videos: [
                    "../images/retro6.mp4"
                ]
            }, {
                title: "Links",
                content: "If you are interested in doing the same, these are the articles I consulted. Or contact me, I am happy to help!<br><br>https://github.com/TkkrLab/minitel-hackaday<br>https://github.com/eserandour/Minitel1B<br>https://github.com/64rulez/PyMoIP<br>https://forum.museeminitel.fr/t/server-building/400/12<br>https://minitel.us/hacking",
                images: [],
                videos: []
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
        document.getElementById("content").innerHTML += `
            <div class="w-100 mb-2 py-2 mt-5"
                style="border-bottom: 1px solid var(--primary-muted); color: var(--primary-muted);">
                ${projectData.sections[i].title}
            </div>

            <div>${projectData.sections[i].content}</div>

                <!-- Images -->
                <div class="images d-flex flex-nowrap overflow-x-auto pt-5 ${(projectData.sections[i].images.length == 0 && projectData.sections[i].videos.length == 0) ? "d-none" : ""

            }" style="height: 400px; margin-bottom: 100px;">
                    ${projectData.sections[i].images.map(el => `
                        <div class="me-4 h-100" style="aspect-ratio: 1 / 1; flex: 0 0 auto;">
                            <img class="w-100 h-100 object-fit-cover" src="` + el + `">
                        </div>
                    `).join("")}

                    ${projectData.sections[i].videos.map(el => `
                        <div class="me-4" style="flex: 0 0 auto; max-width: 100%;">
                            <video class="" style="height: auto; max-height: 40vh;" controls>
                                <source src="${el}" type="video/mp4">
                            </video>
                        </div>
                    `).join("")}
                </div>
        `;
    }
});