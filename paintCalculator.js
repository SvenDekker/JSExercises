// Calculate gallons of paint needed to paint the ceiling of a
// room. Prompt for the length and width, and assume one
// gallon covers 350 square feet. Display the number of gallons
// needed to paint the ceiling as a whole number.

let length = prompt('What is the length of the ceiling?')
let width = prompt('What is the width of the ceiling?')
let totalFeet = length * width
let gallonsNeeded = Math.ceil(totalFeet / 350)

prompt(`You will need ${gallonsNeeded} gallons of paint to cover ${totalFeet} square feet`)

