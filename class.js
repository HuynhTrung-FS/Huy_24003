// Class trong javascript
//  Class : như 1 bản thiết kế trong một ngôn ngữ lập
// Class là một khuôn mẫu (blueprint) tạo ra các object có cùng một thuộc tính (properties) và phương thức (methods)
// Class giúp tổ chức code hướng đối tượng (Object Oriented Programming - OOP).

class Animal {
  constructor(name, age) {
    // constructor: phuong thuc khoi tao
    this.name = name; // thuoc tinh
    this.age = age; // thuoc tinh
  }

  // phuong thuc: methods
  describe() {
    console.log(`Animal: name is ${this.name} and age is ${this.age}`);
  }

  makeSound() {
    this.describe();
    console.log("The animal makes a sound");
  }
}

const animalValue = new Animal("Dog", 3);
animalValue.makeSound();
console.log(animalValue.name);
console.log(animalValue.age);

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  bark() {
    console.log("Woof woof!");
  }
  describe() {
    super.describe();
    console.log(`Dog: My name is ${this.name} and I'm ${this.age} years old`);
  }
}

const dog = new Dog("Dog", 3);
const cat = new Animal("Cat", 2);
dog.describe();

// instanceof: kieerm tra xem object nay co phai la doi tuong cua class nao khong
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog); // true
console.log(cat instanceof Dog); // false
