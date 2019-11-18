'use strict'

const run = () => {

  let text = '0'
  text = text + 1   //uppg1=01

  let number = 0

  if (text.length > 1) {
    number = number + 1
  }

  let array = ['1', '2', '3', '4', '5', '6'] //uppg2=1
  for(let i = 0; i<3; i++) {
    array.pop()
  }

  console.log('GOOD BYE!') //uppg3= ['1', '2', '3']

}

run()
