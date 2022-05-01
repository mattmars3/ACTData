#!/usr/bin/env node

// at the beginning of the program it will import the json file
// when a test is added it will write the the program and terminate

import { getInitialAction } from './cmdline.js'
import PracticeTest from './PracticeTest.js';
import { getTestArray, writeTestArray, clearStorage } from './store.js';
import { TestList } from './TestList.js'

const args = process.argv;

const doThis = args[2];

const myTestList = new TestList();
myTestList.setTestArrayFromJSON();

switch (doThis) {
    case 'addATest':
        myTestList.addTest(args[3], args[4], args[5], args[6], args[7], args[8])
        myTestList.writeTestArrayToJSON();
        break;
    case 'removeATest':
        break;
    case 'displayTestsFor':
        break;
    case 'Show averages':
        break;
    default:
        console.log("HI")
}


/*
// create basic functionality
const myTestList = new TestList();
myTestList.setTestArrayFromJSON();

// test functionality
myTestList.addTest("math", 39, 40, "55:50", "This is a random string of text that contains many words.")


*/
// console.log(getInitialAction())
