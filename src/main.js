#!/usr/bin/env node

// at the beginning of the program it will import the json file
// when a test is added it will write the the program and terminate

import { getInitialAction } from './cmdline.js'


/*
// create basic functionality
const myTestList = new TestList();
myTestList.setTestArrayFromJSON();

// test functionality
myTestList.addTest("math", 39, 40, "55:50", "This is a random string of text that contains many words.")

// myTestList.writeTestArrayToJSON();

*/
console.log(getInitialAction())

