import inquirer from "inquirer"

import PracticeTest from './PracticeTest.js';
import { getTestArray, writeTestArray, clearStorage } from './store.js';
import { TestList } from './TestList.js'

let theTestObject = [];

export function getTestList(testList) {
    theTestList = testList;
}

export function getInitialAction() {
    let testVar = {}
    inquirer
        .prompt([
            { type: 'list', message: "What would you like to do?", name: 'initialAction', choices: [
                'Add a Test',
                'Remove a Test',
                'Display tests for a certain ____',
                'Show averages for subjects'
            ] }
        ])
        .then(answers => {
            testVar = answers;
        });
    return testVar;
}

function addATest() {
    inquirer
        .prompt([
            { type: 'input', message: "Enter the subject.", name: "subject"},
            { type: 'input', message: "Enter number of correct questions", name: 'amntCorrect'},
            { type: 'input', message: "Enter total number of questions", name: 'totalQuestions'},
            { type: 'input', message: 'Enter time to complete test', name: 'timeToComplete'},
            { type: 'confirm', message: "Was this test today?", name: 'wasToday'}
        ])
        .then(answers => {

        })
}
