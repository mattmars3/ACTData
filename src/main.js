import PracticeTest from "./classes.js";

function createPracticeTest(subject, amntCorrect, totalQuest, timeTaken, notes="", date="") {
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

const firstTest = createPracticeTest("English", 4, 8, "5:32")
