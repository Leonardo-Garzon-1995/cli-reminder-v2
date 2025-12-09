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

function getCurrentTime() {
    const time = new Date()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    hours = hours.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')

    return  `${hours}:${minutes}`
}

// exporting functions
export {
    parseUnit, 
    convertTomillis,
    getCurrentTime,
}