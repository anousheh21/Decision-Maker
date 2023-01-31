//assigned the const 'button' to the submit button
const button = document.querySelector(".submit");
//assigned the const 'answer' to the empty p tag
const answer = document.querySelector(".answer");
//assigned the const 'question' to the form element
let question = document.querySelector(".question");
//assigned the const questionOutput to the empty p with class questionOutput
const questionOutput = document.querySelector(".questionOutput");
//assigned const userInput to the input text field
let userInput = document.getElementById("userInput");
//created an array with answers to the question
const outputs = ['yes', 'no'];


//event listener, listens for when the submit button is clicked
button.addEventListener('click', () => {
    //clears printed question
    questionOutput.textContent = '';
    //if statement to validate whether the input field contains content
    if (userInput.value == '') {
        answer.textContent = 'Please Enter a Question...'
    } else {
        //clears answer
        answer.textContent = '';
        textValue();
        //question.reset();
        //output is assigned a random array item from the outputs array
        let output = randomOutput();
        //after 100 milliseconds, the p tag gets filled with the output, and displays on the screen
        setTimeout(() => {answer.textContent = output;}, 10);
        //after 100 milliseconds, the form 'reset' so will become empty, as opposed to being filled with user text
        setTimeout(() => {question.reset()}, 100);
        }
});

//function to randomly choose an item from the outputs array
function randomOutput() {
    return outputs[Math.floor(Math.random() * outputs.length)];
}

//function to take the question that the user typed into the form and assign it as text to the questionOutput p tag
function textValue() {
    questionOutput.textContent = userInput.value;
}


