// Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of
// slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. 
// If there are leftovers, show the number of leftover pieces.

let people = prompt('How many people?')
let pizzas = prompt('How many pizzas do you have?')
let slices = prompt('How many slices per pizza?')
let totalSlices = pizzas * slices 
let slicesPerPerson = Math.floor(totalSlices / people)
let leftoverPieces = totalSlices % people

if (slicesPerPerson === 1) {
    prompt(`${people} people with ${pizzas} pizzas. Each person gets ${slicesPerPerson} slice of pizza. There are ${leftoverPieces} leftover pieces`)
    
} else if (slicesPerPerson > 1 || slicesPerPerson === 0) {
    prompt(`${people} people with ${pizzas} pizzas. Each person gets ${slicesPerPerson} slices of pizza. There are ${leftoverPieces} leftover pieces`)
}

