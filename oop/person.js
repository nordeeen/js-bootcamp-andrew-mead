// prototype adalah objek pada objek ini.

// constructor function (firstName, lastName, age, likes=[])
// myPerson prototype getBio + let bio = my name is firstName and lastName and age
// bio += likes.forEach
// myPerson prototype setName (fullName.split('') + firstName and lastName)

// Constructor Function

//===========//

// Class and Constructor
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `my name is ${this.firstName} ${this.lastName} and my age is ${this.age} years old.  `;

    this.likes.forEach(like => {
      bio += `  ${this.firstName} and my likes is ${like}.`;
    });

    return bio;
  }

  set fullName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Subclasses / Inheritance
class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  // getBio() versi Employee
  getBio() {
    return `${this.fullName} is a ${this.position}.`;
  }
  getYearsLeft() {
    return this.age - 30;
  }
}

// === challange === //

class Students extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  updateGrade(change) {
    this.grade = this.grade + change;
  }

  getBio() {
    const statusGrade = this.grade >= 70 ? 'passing' : 'failing';
    return `${this.firstName} is ${statusGrade} in class.`;
  }
}

// Instance
// Sebuah objek baru yang di buat dari sebuah constructor disebut sebagai instance.
const dataStudent = new Students('Jhon', 'Doe', 23, 100, ['Reading Book']);
dataStudent.updateGrade(50); // -50
console.log(dataStudent);
console.log(dataStudent.getBio());

console.log('=*=*=*=*=*=*=*=*=*=*=*=*==*=*=*=*=*=*=*=*=*=*=*=*=');

const getData = new Employee('Adi', 'Hidayat', 55, 'Teacher', ['Travelling']);
getData.fullName = 'Bambang Pamungkas';
console.log(getData);
console.log(getData.getBio());
console.log(getData.getYearsLeft());

const getData2 = new Person('Cecep', 'Supriyatna', 23);
console.log(getData2.getBio());
