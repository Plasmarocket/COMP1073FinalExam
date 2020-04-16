// JavaScript Document

// person class is created with the constuctor for name age gender and classes while it uses intrest instead of classes in the constuctor

class Person {
  constructor(name, age, gender, classes) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //greeting function is created where it says Hi! I'm and name of person in the console log
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };
  //bye function is created where is says the name then has left the building. bye for now! in the console log
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//two new person object instance are created one part and one harmanpreet
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//teacher class is created that uses information is person class
class Teacher extends Person {
  constructor(name, last, age, gender, interests, subject, grade) {
    //super is created to grab information from person such as name age gender and intrests
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    //uses two new variables for the teacher class which is subject and grade
    this.subject = subject;
    this.grade = grade;
  }
}

//teacher object instance
let teacher = new Teacher('Jessica', 'Gilfaillan', 26, 'female', ['JavaScript', 'PHP'], 'JavaScript',90); 
