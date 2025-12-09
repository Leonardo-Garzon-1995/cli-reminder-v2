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




// exporting functions
export {
    parseUnit, 
    convertTomillis
}