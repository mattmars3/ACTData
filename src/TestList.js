import { getTestArray, writeTestArray } from './store.js'

/* 
    This class is constructs a list of Tests that, with the set and write test array methods,
    will contain all the active javascript objects and can do operations on the entire set of tests
*/
export class TestList {
    constructor() {
        this.testArray;
    }

    setTestArray() {
        this.testArray = getTestArray()
    }

    writeCurrentTestArray() {
        writeTestArray(this.testArray)
    }

    printSummaries() {
        for (let i in this.testArray) {
            this.testArray[i].printSummary();
        }
    }

    removeTestByNotes(notes) {
        const noteToSearch = new RegExp(notes, 'i');
            this.testArray = this.testArray.filter(
                ele => ele.getNotes().search(noteToSearch) == -1
            )
            
    }
}