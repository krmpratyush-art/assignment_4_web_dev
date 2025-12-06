const quizQuestions = [
{ question: "What does CPU stand for?", answer: "central processing unit" },
{ question: "Which company developed the Windows operating system?", answer: "microsoft" },
{ question: "What is the boiling point of water in Celsius?", answer: "100" },
{ question: "Which element has the chemical symbol 'O'?", answer: "oxygen" },
{ question: "What is the smallest prime number?", answer: "2" },
{ question: "Which planet is the largest in our solar system?", answer: "jupiter" },
{ question: "Who wrote the play 'Romeo and Juliet'?", answer: "william shakespeare" }

];

function runQuiz() {
    let score = 0;

    alert(
        "WELCOME TO THE QUIZ GAME \n\n" +
        "You will answer " + quizQuestions.length + " questions.\n" +
        "Type your answers carefully!\n\n" +
        "Press OK to begin."
    );

    for (let i = 0; i < quizQuestions.length; i++) {

        let userInput = prompt(
            "QUESTION " + (i + 1) + " / " + quizQuestions.length + "\n" +
            "----------------------------------\n" +
            quizQuestions[i].question + "\n\n" +
            "Type your answer below:"
        );

        if (userInput === null) {
            alert("Quiz cancelled. Goodbye!");
            return;
        }

        userInput = userInput.toLowerCase().trim();

        if (userInput === quizQuestions[i].answer) {
            alert("Correct! Good job!");
            score++;
        } else {
            alert(
                "Wrong Answer!\n" +
                "Correct answer was: " + quizQuestions[i].answer
            );
        }
    }

    alert(
        " QUIZ COMPLETED! \n\n" +
        "Your Final Score:\n" +
         score + " / " + quizQuestions.length + " \n\n" +
        "Thanks for playing!"
    );
}

runQuiz();