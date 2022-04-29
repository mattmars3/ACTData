import yargs from "yargs"
import chalk from "chalk"
import inquirer from "inquirer"

function getInitialAction() {
    inquirer
        .prompt([
            { type: 'list', message: "What would you like to do?", name: 'command', choices: [
                'Add Score',
                'Print Average for Test',
                'Print last test date'
            ] }
        ])
        .then(answers => {
            console.log(answers)
        });
}

