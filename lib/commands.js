import inquirer from "inquirer";
import { displayBanner } from "./formatters.js"
import { parseUnit, convertTomillis, getCurrentTime } from "./helpers.js"
import sound from "play-sound"
async function setTimer() {
    const {text, time, unit} = await inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "Set your reminder"
        },
        {
            name: "time",
            type: "number",
            message: "Set the time",
        },
        {
            name: "unit",
            type: "select",
            message: "Set the unit",
            choices: ["seconds", "minutes", "hours"]
        }
    ])
    setTimeout(() => {
        displayBanner(text)
    }, convertTomillis(time, parseUnit(unit)));
}

function displayCurrentTime() {
    displayBanner(getCurrentTime())
}



// exporting
export {
    setTimer,
    displayCurrentTime
}