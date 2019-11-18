'use strict'

const prompt = require('prompt-sync')()

const run = () => {

    let number1 = prompt('Number1:')
    let number2 = prompt('Number2:')
    let answer = null
    answer = parseInt(number1) + parseInt(number2)
    console.log(answer)

}

run()