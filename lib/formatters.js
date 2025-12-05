// UI

// Box styling

const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    reset: "\x1b[0m"
}

const arrColors = ["red", "green", "yellow", "blue", "magenta", "cyan", "white"]
const randomColor = arrColors[Math.floor(Math.random() * arrColors.length)]

export function displayBanner(text) {
    console.log(colors[randomColor])
    console.log("╔" + "=".repeat(50) + "╗");
    console.log("║" + " " + colors.reset + text.padEnd(49) + colors[randomColor] + "║");
    console.log("╚" + "=".repeat(50) + "╝");
    console.log(colors.reset)
}

