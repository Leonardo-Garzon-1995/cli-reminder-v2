import inquirer from "inquirer";
import { displayBanner } from "./formatters.js"
import { parseUnit, convertTomillis, pomodoroTimer } from "./helpers.js"
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

// displays current time 
function getCurrentTime() {
    const interval = setInterval(() => {
        const now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()

        hours = hours.toString().padStart(2, '0')
        minutes = minutes.toString().padStart(2, '0')
        seconds = seconds.toString().padStart(2, '0')
        const output = `Local time: ${hours}:${minutes}:${seconds}`
        process.stdout.write(`\x1b[36m${output}\x1b[0m\r`);
    }, 1000)

    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log(); // newline
        process.exit();
    });
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
        const output = `Elapsed: ${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}.${String(hund).padStart(2,'0')}`
        process.stdout.write(`\x1b[36m${output}\x1b[0m\r`);
    }, 100);

    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log(); // newline
        process.exit();
    });
}

// set pomodoro timer
async function setPomodoro() {
    const {time, rest} = await inquirer.prompt([
        {
            name: "time",
            type: "number",
            message: "Set the pomodoro time in minutes:",
        },
        {
            name: "rest",
            type: "number",
            message: "Set the rest time in minutes:",
        }
    ])    

    pomodoroTimer(time, rest)
}



// exporting
export {
    setTimer,
    getCurrentTime,
    startTimer,
    setPomodoro
}