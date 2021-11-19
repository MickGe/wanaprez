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
    const eUrlField = document.getElementById("wanaprez-fromurl-url");
    const eUrlButton = document.getElementById("wanaprez-fromurl-button");
    const eTextField = document.getElementById("wanaprez-fromtext-md");
    const eTextButton = document.getElementById("wanaprez-fromtext-button");
    const eDemoLink = document.getElementById("wanaprez-demo");

    function startFromUrl() {
        const prezUrl = eUrlField.value;

        if (!prezUrl) {
            alert("Please enter an URL.");
            return;
        }

        console.log(`Loading prez from URL: ${prezUrl}`);
        hideHome();
        prez.prezFromUrl(prezUrl);
    }

    function startFromText() {
        const prezText = eTextField.value;
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

    eUrlButton.onclick = startFromUrl;
    eTextButton.onclick = startFromText;
    eDemoLink.onclick = startFromDemo;
}

addEventListener("load", main);

module.exports = {
    hideHome,
    showHome,
};
