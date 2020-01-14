// Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains

let question = prompt('What is the input string?')


if (question.length === 0) {
    prompt('You must enter something you fool!')
} else {
    prompt(`${question} has ${question.length} characters`)
}