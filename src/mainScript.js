#!/usr/bin/env node

// at the beginning of the program it will import the json file
// when a test is added it will write the the program and terminate

import { getInitialAction } from './cmdline.js'
import PracticeTest from './PracticeTest.js';
import { getTestArray, writeTestArray, clearStorage } from './store.js';
import { TestList } from './TestList.js'
import chalk from 'chalk'

console.log(chalk.bgGreen("ran mainscript"))

// get all the command line arguments
const args = process.argv;

// get the command which is the third argument
const doThis = args[2];

// create a new testlist object
const myTestList = new TestList();
// load all of the tests from JSON
myTestList.setTestArrayFromJSON();

// determine what the command is and do that action
switch (doThis) {
    case 'addATest':
        console.log(chalk.blue("Adding a test"))
        myTestList.addTest(args[3], args[4], args[5], args[6], args[7], args[8])
        myTestList.writeTestArrayToJSON();
        break;
    case 'removeATest':
        if (args[3] == 'date') {
            myTestList.removeTestByDate();
        } else if (args[3] == 'ID') {
            myTestList.removeTestByID(args[4]);
        }
        myTestList.writeTestArrayToJSON();
        break;
    case 'displayAllTests':
        console.log(chalk.blue("Displaying all tests"))
        myTestList.printSummaries();
        break;
    case 'displayTestsFor':
        console.log(chalk.red("Feature not yet implemented!"))
        break;
    case 'Show averages':
        console.log(chalk.red("Feature not yet implemented!"))
        break;
    default:
        console.log(chalk.red("Error in parsing command."))
}


