function parseUnit(u) {
    const s = u.toLowerCase()
    if (["s", "sec", "secs", "second", "seconds"].includes(s)) return "s";
    if (["m", "min", "mins", "minute", "minutes"].includes(s)) return "m";
    if (["h", "hr", "hrs", "hour", "hours"].includes(s)) return "h";
    if (["d", "day", "days"].includes(s)) return "d";
    return null
}
function convertTomillis(num, unit) {
    switch(unit) {
        case 's':
            return num * 1000;
        case 'm':
            return num * 60000;
        case 'h':
            return num * 3600000;
        case 'd':
            return num * 86400000;
        default:
            throw new Error('Invalid parameter');
    }
}

// pomodoro timer
function pomodoroTimer(time = 25, rest = 10) {
    const pomodoroTime = time * 60 * 1000; // 25 minutes in milliseconds
    // const breakTime = rest * 60 * 1000; // 5 minutes in milliseconds
    const start = new Date();

    console.log("\x1b[33mPomodoro timer started!\x1b[0m");
    const interval = setInterval(() => {
        const elapsed = new Date() - start;
        const remaining = pomodoroTime - elapsed;
        let minutes = Math.floor(remaining / 60000);
        let seconds = Math.floor((remaining % 60000) / 1000);
        minutes = minutes.toString().padStart(2, '0');
        seconds = seconds.toString().padStart(2, '0');
        process.stdout.write(`\x1b[36mPomodoro time remaining: ${minutes}:${seconds}\x1b[0m\r`);
        if (remaining <= 0) {
            clearInterval(interval);
            console.log()
            console.log("\x1b[31mPomodoro time is up!\x1b[0m");
        }
    }, 1000)

    setTimeout(() => {
        console.log("\x1b[33mBreak time started!\x1b[0m");
        const breakInterval = setInterval(() => {
            const elapsed = new Date() - start;
            const remaining = pomodoroTime + rest * 60 * 1000 - elapsed;
            let minutes = Math.floor(remaining / 60000);
            let seconds = Math.floor((remaining % 60000) / 1000);
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');
            process.stdout.write(`\x1b[32mBreak time remaining: ${minutes}:${seconds}\x1b[0m\r`);
            if (remaining <= 0) {
                clearInterval(breakInterval);
                console.log()
                console.log("\x1b[31mBreak time is over!\x1b[0m");
            }
        }, 1000)
    }, pomodoroTime + 1000);
    
    process.on('SIGINT', () => {
        clearInterval(interval);
        console.log(); // newline
        process.exit();
    })
}



// exporting functions
export {
    parseUnit, 
    convertTomillis, 
    pomodoroTimer
}