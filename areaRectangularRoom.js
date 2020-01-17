// Create a program that calculates the area of a room. Prompt
// the user for the length and width of the room in feet. Then
// display the area in both square feet and square meters.

let length = prompt('What is the length in feet?')
let width = prompt('What is the width of the room in feet?')
let calculationFeet = length * width

function calculationMeters() {
    return (calculationFeet / 10.763910417).toPrecision(5)
}

prompt(`You entered dimensions of ${length} feet by ${width} feet.`)
prompt(`The area is ${calculationFeet} square feet and ${calculationMeters()}.`)