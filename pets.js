'use strict'

const { BaseState } = require('./states.js')

class BasePet {
  constructor(name, state = new BaseState()) {
    this.name = name
    this.state = state
  }
  setState(state) {
    this.state = state
  }
  checkState() {
    return this.state.checkState()
  }
  announce() {
    return this.state.announce()
  }
  receive(something) {
    return this.state.receive(something)
  }
}

class Dog extends BasePet {}
class Cat extends BasePet {}

module.exports = { Dog, Cat, BasePet }
