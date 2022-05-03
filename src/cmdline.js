import inquirer from "inquirer"
import child_process from 'child_process'

const mainScriptPath = '.src/mainScript.js';
export function getInitialAction() {
    inquirer
        .prompt([
            { type: 'list', message: "What would you like to do?", name: 'initialAction', choices: [
                'Add a Test',
                'Remove a Test',
                'Display tests for a certain ____',
                'Show averages for subjects',
                'Display All Tests'
            ] }
        ])
        .then(answers => {
            switch (answers.initialAction) {
                case 'Add a Test':
                    addATest();
                    break;
                case 'Display All Tests':
                    child_process.execFile(mainScriptPath, ['displayAllTests']);
                    break;
            }
        });
}

function addATest() {
    inquirer
        .prompt([
            { type: 'input', message: "Enter the subject.", name: "subject"},
            { type: 'input', message: "Enter number of correct questions", name: 'amntCorrect'},
            { type: 'input', message: "Enter total number of questions", name: 'totalQuestions'},
            { type: 'input', message: 'Enter time to complete test', name: 'timeToComplete'},
            { type: 'input', message: "Enter date (press return if today)", name: 'date', default: 'today'},
            { type: 'input', message: "Enter notes", name: 'notes', default: 'No Notes'}
        ])
        .then(answers => {
            child_process.exec('./' + mainScriptPath, ['addATest', answers.subject, answers.amntCorrect, answers.totalQuestions, answers.timeToComplete, answers.date, answers.notes]);
        })
}

getInitialAction()