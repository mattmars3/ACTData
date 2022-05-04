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

    generateID() {
        let largest = 1;
        for (let i in this.testArray) {
            if (this.testArray[i].getID() > largest) {
                largest = this.testArray[i].getID();
            }
        }
        return largest+1;
    }
    // add a PracticeTest object and push it to the testArray object
    addTest(subject, amntCorrect, totQuestions, timeTaken, notes, date) {
        this.testArray.push(new PracticeTest(PracticeTest.createObjectForConstructor(
            subject, amntCorrect, totQuestions, timeTaken, this.generateID(), notes, date
        )))
    }

    writeTestArrayToJSON() {
        writeTestArray(this.testArray)
    }

    // prints the summaries of each test with chalk
    printSummaries() {
        for (let i in this.testArray) {
            this.testArray[i].printSummary();
        }
    }

    // returns an array of tests for a certain subject
    getTestsBySubject(subject) {
        const _ = []
        for (let i in this.testArray) {
            if (this.testArray[i].getSubject().toLowerCase() == subject.toLowerCase()) {
                _.push(this.testArray[i]);
            }
        }
        return _;
    }

    removeTestByNotes(notes) {
        const noteToSearch = new RegExp(notes, 'i');
            this.testArray = this.testArray.filter(
                ele => ele.getNotes().search(noteToSearch) == -1
            )
    }

    getAverages() {
        const arr = ['english', 'math', 'reading', 'science']
        for (let i = 0; i < 4; i++) {
            let testList = this.getTestsBySubject(arr[i])
            let points = 0, sum = 0;
            for (let j in testList) {
                let score = testList[j].getScore()
                points += score[0]; sum += score[1];
            }
            arr[i] = points / sum
        }


        for (let k in arr) {
            if (arr[k] == NaN) {
                console.log("asdf")
                arr[k] = "No scores"
            }
        }
        return {
            english: arr[0],
            math: arr[1],
            reading: arr[2],
            science: arr[3]
        };
    }

    removeTestByID(id) {
        for (let i in this.testArray) {
            if (this.testArray[i].getID() == id) {
                this.testArray.splice(i, 1)
            }
        }
    }

    getTestByID(id) {
        for (let i in this.testArray) {
            if (this.testArray[i].getID() == id) {return this.testArray[i]}
        }
    }

}