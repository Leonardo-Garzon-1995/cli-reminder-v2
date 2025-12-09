import {program} from "commander";
import * as func from "./lib/commands.js";

program
    .name("cli-reminder-v2")
    .version("1.0.0")
    .description("CLI Reminder")

program.command("setTimer")
    .description("Set a timer")
    .action(func.setTimer)
program.command("time")
    .description("Get the current time")
    .action(func.getCurrentTime)
program.command("stopwatch")
    .description("Start a stopwatch")
    .action(func.startTimer)
    
program.parse()