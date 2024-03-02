const path = require("path");
const colors = require("colors");
const caller = require("caller");

class Logger {
    constructor() {
        this.prefix = " >> ";
        this.levels = {
            sub: "    ",
            debug: "DEBU".blue,
            info: "INFO".green,
            warn: "WARN".yellow,
            error: "ERRO".red,
            fatal: "FATL".red.bgWhite,
        };
    }

    getCallerFunctionName() {
        const callerPath = caller(3); // Adjust the argument based on your project structure
        const relativePath = path.relative(process.cwd(), callerPath);
        return `[${relativePath}]`;
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const callerInfo = this.getCallerFunctionName();
        const formattedMessage = `${timestamp.gray} ${this.levels[level]}${this.prefix}${callerInfo.gray} ${message}`;
        console.log(formattedMessage);
    }

    sub(message) {
        this.log("sub", message);
    }

    debug(message) {
        this.log("debug", message);
    }

    info(message) {
        this.log("info", message);
    }

    warn(message) {
        this.log("warn", message);
    }

    error(message) {
        this.log("error", message);
    }

    fatal(message) {
        this.log("fatal", message);
    }
}

let logger = new Logger();

module.exports = logger;
