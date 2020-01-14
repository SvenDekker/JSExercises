// Create a program that prompts for a quote and an author. Display the quotation and author as follows:
// What is the quote? These aren't the droids you're looking for.
// Who said it? Obi-Wan Kenobi
// Obi-Wan Kenobi says, "These aren't the droids
// you're looking for."

const quote = prompt('What is the quote?')
const author = prompt('Who said it?')

prompt(`${author} says, ${quote}`)