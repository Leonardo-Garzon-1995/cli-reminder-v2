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
        sound.play('./assets/sound2.mp3')
        setTimeout(() => {
            displayBanner(text)
        }, 3000);
    }, convertTomillis(time, parseUnit(unit)));
}

function displayCurrentTime() {
    displayBanner(getCurrentTime())
}

// stopwatch.js

function startTimer() {
    

let start = Date.now();
    const interval = setInterval(() => {
        let elapsed = Date.now() - start;
        let secs = Math.floor(elapsed / 1000);
        let mins = Math.floor(secs / 60);
        secs = secs % 60;
        let hund = Math.floor((elapsed % 1000) / 10);
        process.stdout.write(`\rElapsed: ${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}.${String(hund).padStart(2,'0')}`);
    }, 100);

    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log(); // newline
        process.exit();
    });
}



// exporting
export {
    setTimer,
    displayCurrentTime,
    startTimer
}