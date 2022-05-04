import inquirer from "inquirer"
import child_process from 'child_process'
import chalk from 'chalk';

import PracticeTest from "./PracticeTest.js";
import { getTestArray, writeTestArray, clearStorage } from './store.js';
import { TestList } from './TestList.js'

// create a new testlist object
const myTestList = new TestList();
// load all of the tests from JSON
myTestList.setTestArrayFromJSON();

export function getInitialAction() {
    inquirer
        .prompt([
            { type: 'list', message: "What would you like to do?", name: 'initialAction', choices: [
                'Add a Test',
                'Remove a Test',
                'Display tests for a subject',
                'Show averages for subjects',
                'Display All Tests'
            ] }
        ])
        .then(answers => {
            switch (answers.initialAction) {
                case 'Add a Test':
                    addATest();
                    break;
                case 'Remove a Test':
                    removeATest();
                    break;
                case 'Display tests for a subject':
                    displayTestsForSubject();
                    break;
                case 'Show averages for subjects':
                    showAverages();
                    break;
                case 'Display All Tests':
                    displayAllTests();
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
        .then(ans => {
            myTestList.addTest(
                ans.subject, ans.amntCorrect, ans.totalQuestions, ans.timeToComplete, ans.notes, ans.date
            );
            myTestList.writeTestArrayToJSON();
        }).catch(err => {
            console.log(err)
        })
}

function removeATest() {
    inquirer
        .prompt([
            { type: 'input', message: 'Enter ID to remove.', name: 'id'}
        ])
        .then(ans => {
            myTestList.removeTestByID(ans.id);
            myTestList.writeTestArrayToJSON()
        })
}

function displayAllTests() {
    myTestList.printSummaries();
}

function displayTestsForSubject() {
    inquirer
        .prompt([
            { type: 'input', message: 'Enter subject.', name: 'subject'}
        ])
        .then(ans => {
            const testsOfSubject = myTestList.getTestsBySubject(ans.subject.toLowerCase());
            if (testsOfSubject.length == 0) {
                console.log(chalk.red("There are no " + ans.subject + " tests."))
            }
            for (let i in testsOfSubject) {
                testsOfSubject[i].printSummary(); 
            }
        })
        .catch(err => {console.log(err)})
}

function showAverages() {
    const avs = myTestList.getAverages()
    console.log("English: " + chalk.red(avs.english))
    console.log("Math: " + chalk.red(avs.math))
    console.log("Reading: " + chalk.red(avs.reading))
    console.log("Science: " + chalk.red(avs.science))
}


getInitialAction()
