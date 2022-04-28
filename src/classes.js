//  This class represents a practice test and has all field 
export default class PracticeTest {
    constructor(subject, amntCorrect, totalQuest, timeTaken, notes="", date="") {
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

        // actually construct and return the practiceTest object
        this.subject = subject.toLowerCase(); // subject name in lower case
        this.amntCorrect = parseInt(amntCorrect); // amount correct
        this.totalQuestions = parseInt(totalQuest); // total amount of questions
        this.timeToComplete = timeSeconds; // time used to complete the questions in seconds
        this.practiceDate = parsedDate; // date of the practice in order YYYY-MM-DD
        this.notes = notes;
    }

    practiceTimeToString() {
        let returnString = "";
        return Math.floor(this.timeToComplete / 60).toString() + ":" + this.timeToComplete % 60;
    }

    static capitalize(string) {
        return string.substring(0, 1).toUpperCase() + string.substring(1);
    }

    getSubject() {return this.subject;}

    printSummary() {
        console.log(PracticeTest.capitalize(this.subject) + " Practice Test on " + this.practiceDate + "\nScore: " + this.amntCorrect + "/" + this.totalQuestions)
        console.log("Time: " + this.practiceTimeToString())
        if (this.notes != "") {
            console.log("Notes: " + notes)
        }
    }
}