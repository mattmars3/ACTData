import PracticeTest from './PracticeTest.js';
import { getTestArray, writeTestArray } from './store.js'

/* 
    This class is constructs a list of Tests that, with the set and write test array methods,
    will contain all the active javascript objects and can do operations on the entire set of tests
*/
export class TestList {
    constructor() {
        this.testArray;
    }

    setTestArrayFromJSON() {
        this.testArray = getTestArray()
    }

    getTestArray() {
        return this.testArray;
    }

    // add a PracticeTest object and push it to the testArray object
    addTest(subject, amntCorrect, totQuestions, timeTaken, notes="", date="") {
        this.testArray.push(new PracticeTest(PracticeTest.createObjectForConstructor(
            subject, amntCorrect, totQuestions, timeTaken, notes, date
        )))
    }

    writeTestArrayToJSON() {
        writeTestArray(this.testArray)
    }

    printSummaries() {
        for (let i in this.testArray) {
            this.testArray[i].printSummary();
        }
    }

    // returns an array of tests for a certain subject
    returnTestsBySubject(subject) {
        const _ = []
        for (let i in this.testArray) {
            if (this.testArray[i].getSubject() == subject.toLowerCase()) {
                _.push(this.testArray[i]);
            }
            return _;
        }
    }

    removeTestByNotes(notes) {
        const noteToSearch = new RegExp(notes, 'i');
            this.testArray = this.testArray.filter(
                ele => ele.getNotes().search(noteToSearch) == -1
            )
    }
}