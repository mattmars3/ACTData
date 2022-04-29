import PracticeTest from './classes.js';
import * as fs from 'fs';

const testTest = new PracticeTest("english", 5, 6, '5:20')

// returns a real javascript array of PracticeTest Objects
export function getTestArray() {
    const testArray = JSON.parse(fs.readFileSync('./src/Tests.json').toString());
    const finalTestArray = []
    if (testArray.length == undefined) {console.log("ERROR: JSON data is not an array");}
    for (let i in testArray) {
        finalTestArray.push(new PracticeTest(testArray[i])) 
    }
}

// receives a real javascript array of PracticeTest objects and writes them to JSON
export function writeTestArray(testArray) {
    fs.writeFileSync('./src/Test.json', testArray)
}


