#!/usr/bin/env node

import PracticeTest from "./classes.js";
import yargs from "yargs"
import chalk from "chalk"
import inquirer from "inquirer"

inquirer
    .prompt([
        { type: 'list', message: "What would you like to do?", name: 'command', choices: [
            'Print Scores',
            'Print Average for Test',
            'Print last test date'
        ] }, { type: 'input', message: "What is your favorite color?", name: "favoriteColor"}
    ])
    .then(answers => {
        console.log(answers)
    });

