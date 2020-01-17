// Create a simple self-checkout system. Prompt for the prices
// and quantities of three items. Calculate the subtotal of the
// items. Then calculate the tax using a tax rate of 5.5%. Print
// out the line items with the quantity and total, and then print
// out the subtotal, tax amount, and total.

let priceItem1 = prompt('Enter the price of item 1: ')
let quantityItem1 = prompt('Enter the quantity of item 1: ')

let priceItem2 = prompt('Enter the price of item 2: ')
let quantityItem2 = prompt('Enter the quantity of item 2: ')

let priceItem3 = prompt('Enter the price of item 3: ')
let quantityItem3 = prompt('Enter the quantity of item 3: ')

let subtotal = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + (priceItem3 * quantityItem3)
let tax = subtotal * 0.055
let total = subtotal + tax

prompt(`Subtotal: $${subtotal}\nTax: $${tax}\nTotal: $${total}`)
