// Write a program to compute the value of an investment
// compounded over time. The program should ask for the
// starting amount, the number of years to invest, the interest
// rate, and the number of periods per year to compound.

let p = prompt('What is the principal amount? ')
let r = prompt('What is the rate?')
let t = prompt('What is the number of years?')
let n = prompt('What is the number of times the interest is compounded per year?')

let compoundInterest = p * Math.pow((1 + ((r / 100) / n)), (n * t)).toFixed(5)
prompt(`€${p} invested at ${r}% for ${t} years compounded ${n} times per year is €${compoundInterest}.`)

