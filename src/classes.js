//  This class represents a practice test and has all field 
export default class PracticeTest {
    constructor(theSubject, theDate, amntCorrect, totQuest, timeTaken, theNotes="") {
        this.subject = theSubject;
        this.practiceDate = theDate; // A Date object of when I did the practice
        this.amountCorrect = amntCorrect;  
        this.totalQuestions = totQuest;
        this.timeToComplete = timeTaken; // The time (in seconds) to complete all of the section
        this.theNotes = theNotes; // Optional Notes about the test
    }
    createPracticeTest(subject, amntCorrect, totalQuest, timeTaken, notes="", date="") {
        // ensure that the amount of questions correct and total amount of questions are valid
        if (parseInt(totalQuest) == NaN || parseInt(amntCorrect) == NaN) {
            return false;
        }
        if (amntCorrect > totalQuest) {return false;}

        // standardize the date and set it as a string because you cannot have Date objects in json
        const todayDate = new Date();
        let parsedDate;
        if (date == "") {
            parsedDate = `${todayDate.getFullYear}-${todayDate.getMonth}-${todayDate.getDate}`
        } else { parsedDate = date; }

        // turn timeTaken into seconds
        const timeArr = timeTaken.split(":")
        const timeSeconds = timeArr[0] * 60 + timeArr[1];

        // actually construct and return the practiceTest object
        return new PracticeTest(
            subject.toLowerCase(), parseInt(amntCorrect), parseInt(totalQuest), timeSeconds, parsedDate, notes
        )
    }
}