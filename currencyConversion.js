// Write a program that converts currency. Specifically, convert
// euros to U.S. dollars. Prompt for the amount of money in
// euros you have, and prompt for the current exchange rate
// of the euro. Print out the new amount in U.S. dollars. 

let amountFrom = prompt('How many euros are you exchanging?') 
let rateFrom = prompt('What is the exchange rate? (€)')
let rateTo = prompt('What is the exchange rate? ($) ')
let amountTo =  ((amountFrom * rateFrom) / rateTo).toPrecision(5)

prompt(`${amountFrom} euros at an exchange rate of ${rateFrom} is ${amountTo} U.S. dollars`)

