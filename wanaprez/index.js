const prez = require("./prez.js");
const home = require("./home.js");

function main() {
    if (prez.config.url != "/") {
        home.hideHome();
        prez.prezFromUrl(prez.config.url);
    } else {
        home.showHome();
    }
}

addEventListener("load", main);
