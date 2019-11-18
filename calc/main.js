'use strict'

const prompt = require('prompt-sync')()

const run = () => {

  // console.log(eval(prompt('Calculation:')))

  let number1 = prompt('Number1:')
  let number2 = prompt('Number2:')
  number1 = parseInt(number1)
  number2 = parseInt(number2)

  let result = number1 + number2

  console.log(result)

}

run()
