'use strict'

class School {
  name
  gardener = 'Johhny the Busher'
  #location
  static #schools = []

  constructor(name, location, gardener) {
    this.name = name
    this.#location = location
    this.gardener = gardener
    School.addSCool(this)
    School.logCreation()
  }

  static addSCool(school) {
    this.#schools.push(school)
  }

  static logCreation() {
    console.log('New school created')
  }

  logGarderner() {
    console.log(`Gardener of ${this.name}: ${this.gardener} at location: ${this.#location}`)
  }
}

const school = new School('ABC School', 'New York', 'John')
const school2 = new School('DEF School', 'New York', 'Jane')
console.log(school)
// console.log(school.#location)
school.logGarderner()
// School.logCreation()
console.log(School.#schools)
