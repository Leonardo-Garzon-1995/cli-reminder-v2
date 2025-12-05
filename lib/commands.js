import inquirer from "inquirer";
import { displayBanner } from "./formatters.js"
import { parseUnit, convertTomillis, getCurrentTime } from "./helpers.js"
import player from "play-sound"

const sound = player()
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
        sound.play('./assets/sound2.mp3', (err) => console.log(err))
        setTimeout(() => {
            displayBanner(text)
        }, 3000);
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