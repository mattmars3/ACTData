//  This class represents a practice test and has all field 
class PracticeTest {
    constructor(theSubject, theDate, amntCorrect, totQuest, timeTaken, theNotes="") {
        this.subject = theSubject;
        this.practiceDate = theDate; // A Date object of when I did the practice
        this.amountCorrect = amntCorrect;  
        this.totalQuestions = totQuest;
        this.timeToComplete = timeTaken; // The time to complete all of the section
        this.theNotes = theNotes; // Optional Notes about the test
    }
}