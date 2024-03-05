import { HomePage, AboutPage, MenuPage } from "./pageLoad.js";

console.log("Wonderfull! noixe");
// alert("Bruh");

function component() {
    const contentContainer = document.getElementById("content");
    const buttons = document.querySelectorAll("button");
    buttons.forEach((element) => {
        const elemClass = element.className;
        element.addEventListener("click", () => {
            contentContainer.innerHTML = ""; // ######  Clears the Screen  ###### //
            if (elemClass === "Home") {
                HomePage();
            } else if (elemClass === "About") {
                AboutPage();
            } else if (elemClass === "Menu") {
                MenuPage();
            }
        });
    });
    return contentContainer;
}

document.body.appendChild(component());
