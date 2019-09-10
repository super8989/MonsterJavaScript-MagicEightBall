const message = document.querySelector(".message");
const question = document.querySelector("input");
const button = document.querySelector("button");

const answerArray = ["Maybe", "Probably", "Highly Likely", "I don't know", "Too bad", "Don't Count on it", "Next", "Good luck"];

button.addEventListener('click', function() {
    console.log(question.value);
    let res = Math.floor(Math.random() * answerArray.length);
    console.log(answerArray[res]);

    message.innerText = question.value + " " + answerArray[res];
    question.value = "";


})