const prez = require("./prez.js");

function hideHome() {
    const eHomeDiv = document.getElementById("wanaprez-home");
    const eNoticeDiv = document.getElementById("notice");
    const cKey = document.getElementById("cKey");
    const fKey = document.getElementById("fKey");
    cKey.addEventListener("click", prez._toggleColors);
    fKey.addEventListener("click", prez._toggleFullscreen);
    eHomeDiv.style.display = "none";
    eNoticeDiv.style.opacity = 0.5;
    eNoticeDiv.style.transform = "unset";
    const noticeDpNoneTimeout = setTimeout(() => {
        eNoticeDiv.style = "";
    }, 5000);
    return () => clearTimeout(noticeDpNoneTimeout);
}

function showHome() {
    const eHomeDiv = document.getElementById("wanaprez-home");
    eHomeDiv.style.display = "block";
}

function main() {
    const eFromUrlForm = document.getElementById("wanaprez-fromurl-form");
    const eFromTextForm = document.getElementById("wanaprez-fromtext-form");
    const eDemoLink = document.getElementById("wanaprez-demo");

    function startFromUrl(prezUrl) {
        if (!prezUrl) {
            alert("Please enter an URL.");
            return;
        }

        console.log(`Loading prez from URL: ${prezUrl}`);
        hideHome();
        prez.prezFromUrl(prezUrl);
    }

    function startFromText(prezText) {
        if (!prezText) {
            alert("Please enter some text.");
            return;
        }

        console.log("Loading prez from text");
        hideHome();
        prez.prezFromText(prezText);
    }

    function startFromDemo(event) {
        console.log("Loading demo prez");
        event.preventDefault();
        hideHome();
        prez.prezFromUrl("./prez.md");
    }

    eFromUrlForm.onsubmit = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const url = data.get("url");

        startFromUrl(url);
    };

    eFromTextForm.onsubmit = e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const text = data.get("text");

        startFromText(text);
    };

    eDemoLink.onclick = startFromDemo;
}

addEventListener("load", main);

module.exports = {
    hideHome,
    showHome,
};
