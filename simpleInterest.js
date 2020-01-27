// Create a program that computes simple interest. Prompt for
// the principal amount, the rate as a percentage, and the time,
// and display the amount accrued (principal + interest).

let principal = prompt('Enter the principal: ')
let rate = prompt('Enter the rate of interest: ')
let years = prompt('Enter the number of years: ')
let amountAccrued = principal(1 + rate * years)

prompt(`After ${years} years at ${rate}, the investment will be worth $${amountAccrued}`)

