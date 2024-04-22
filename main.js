'use strict'
const { Dog } = require('./pets.js')
const { Hungry } = require('./states.js')

;(function () {
  const dog = new Dog('Dog')

  dog.setState(new Hungry(dog))
  dog.announce()

  dog
    .receive('meat')
    .then(async () => {
      await dog.receive('coca cola')
    })
    .then(() => {
      dog.receive('ball')
    })
})()
