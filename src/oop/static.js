class School {
  constructor(name, location) {
    this.name = name
    this.location = location
    School.logCreation()
  }

  static logCreation() {
    console.log('New school created')
  }
}

const school = new School('ABC School', 'New York')
const school2 = new School('DEF School', 'New York')
console.log(school)
