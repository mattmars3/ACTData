#!/usr/bin/env node

// at the beginning of the program it will import the json file
// when a test is added it will write the the program and terminate

import PracticeTest from './PracticeTest.js';
import { getTestArray, writeTestArray, clearStorage } from './store.js';
import { TestList } from './TestList.js'

const myTestList = new TestList();
myTestList.setTestArray();
myTestList.printSummaries();

/*
clearStorage()

const myTestArray = getTestArray();
for (let i = 0; i < myTestArray.length; i++) {
    console.log(myTestArray[i].printSummary())
}

const one = new PracticeTest(PracticeTest.createObjectForConstructor("english", 70, 75, '38:30'))
myTestArray.push(one)

writeTestArray(myTestArray)
*/