//  This class represents a practice test and has all field 
export default class PracticeTest {
    static createObjectForConstructor(subject, amntCorrect, totalQuest, timeTaken, notes="", date="") {
        // ensure that the amount of questions correct and total amount of questions are valid
        if (parseInt(totalQuest) == NaN || parseInt(amntCorrect) == NaN) {
            return false;
        }
        if (amntCorrect > totalQuest) {return false;}

        // standardize the date and set it as a string because you cannot have Date objects in json
        const todayDate = new Date();
        let parsedDate;
        if (date == "") {
            parsedDate = `${todayDate.getFullYear()}-${todayDate.getMonth()}-${todayDate.getDate()}`
        } else { parsedDate = date; }

        // turn timeTaken into seconds
        const timeArr = timeTaken.split(":")
        const timeSeconds = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]);

        return {
            subject: subject.toLowerCase(), // subject name in lower case
            amntCorrect: parseInt(amntCorrect), // amount correct
            totalQuestions: parseInt(totalQuest), // total amount of questions
            timeToComplete: timeSeconds, // time used to complete the questions in seconds
            practiceDate: parsedDate, // date of the practice in order YYYY-MM-DD
            notes: notes // any additional notes;
        }
    }

    constructor(object) {
        this.subject = object.subject;
        this.amntCorrect = object.amntCorrect;
        this.totalQuestions = object.totalQuestions;
        this.timeToComplete = object.timeToComplete;
        this.practiceDate = object.practiceDate;
        this.notes = object.notes;
    }

    // Turn the practice time from seconds to a colonized time
    practiceTimeToString(format) {
        if (format) {
            return Math.floor(this.timeToComplete / 60).toString() + ":" + this.timeToComplete % 60;
        }
        return this.practiceTime;
    }

    // returns date taken in string format
    getDateString() {
        return this.practiceDate;
    }
    // return the date taken as a date object
    getPracticeDateObject() {
        const theDate = this.getDateString().split("-")
        return new Date(theDate[0], theDate[1], theDate[2]);
    }

    getSubject() {
        return this.subject.substring(0, 1).toUpperCase() + this.subject.substring(1);
    }

    // returns the score as a string in fraction format
    getScoreString() {
        return this.amntCorrect.toString() + "/" + this.totalQuestions.toString();
    }

    // returns notes or, if there arent any, returns "No notes."
    getNotes() {
        if (this.notes == "") {
            return "No notes."
        } else {
            return this.notes;
        }
    }

    setNotes(newNotes) {
        this.notes = newNotes.toString();
    }

    // SHOULD ONLY BE USED FOR DEBUGGING - prints attributes
    printSummary() {
        console.log("-----------------")
        console.log(this.getSubject() + " Practice Test on " + this.practiceDate + "\nScore: " + this.getScoreString())
        console.log("Time: " + this.practiceTimeToString(true))
        console.log("Notes: " + this.getNotes())
    }
}