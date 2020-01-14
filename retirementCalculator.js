// Create a program that determines how many years you have
// left until retirement and the year you can retire. It should
// prompt for your current age and the age you want to retire
// and display the output as shown in the example that follows.

let age = prompt('What is your current age?')
let retirementAge = prompt('At what age do you want to retire?')
let yearsLeft = retirementAge - age
let today = new Date()

prompt(`You have ${yearsLeft} years left until you can retire. It's ${today.getFullYear()}, so you can retire in ${today.getFullYear() + yearsLeft}`)