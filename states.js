'use strict'
const { red, green } = require('chalk')

const TIMER = 2000

class BaseState {
  constructor(name = 'base', pet = null) {
    this.name = name
    this.pet = pet
  }
  setPet(pet) {
    this.pet = pet
  }
  checkState() {
    console.log(this.name)
  }
  announce() {
    console.log('Base')
  }
  async receive(something) {
    console.log(`Thank you ${something}`)
    return
  }
}

class Hungry extends BaseState {
  constructor(pet) {
    super('Hungry', pet)
  }

  announce() {
    console.log(red('You need to feed your pet'))
  }

  async receive(food) {
    console.log(`Thank you, ${this.pet.name} will eat ${food}`)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.pet) {
          this.pet.setState(new Thirsty(this.pet))
          this.pet.announce()
        }
        resolve()
      }, TIMER)
    })
  }
}

class Thirsty extends BaseState {
  constructor(pet) {
    super('Thirsty', pet)
  }
  announce() {
    console.log(red('You need to give your pet water'))
  }

  async receive(drinks) {
    console.log(`Thank you, ${this.pet.name} will drink ${drinks}`)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.pet) {
          this.pet.setState(new Boring(this.pet))
          this.pet.announce()
        }
        resolve()
      }, TIMER)
    })
  }
}

class Boring extends BaseState {
  constructor(pet) {
    super('Boring', pet)
  }

  announce() {
    console.log(red('You need to play with your pet'))
  }

  async receive(something) {
    console.log(`Thank you, ${this.pet.name} will play with ${something}`)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.pet) {
          this.pet.setState(new Happy(this.pet))
          this.pet.announce()
        }
        resolve()
      }, TIMER)
    })
  }
}

class Happy extends BaseState {
  constructor(pet) {
    super('Happy', pet)
  }

  announce() {
    console.log(green('Your pet is happy'))
  }
}

module.exports = { BaseState, Hungry, Thirsty, Boring, Happy }
