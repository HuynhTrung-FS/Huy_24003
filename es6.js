// // block scope (Global Scope vs local Scope (function scope))
// var a = 10; // global scope
// function sum() {
//   var b = 20; //function scope || local scope
//   if (true) {
//     //block scope
//     var c = 20;
//   }
// }

// for (let i = 0; i < 10; i++) {
//   //block scope
// }

// // let
// let a = 10;
// if (true) {
//   let b = 20;
//   console.log(a); // 10
// }
// console.log(b); //Reference Error: b is not defined

// // So sánh let và var
// // 1.Khi sử dụng let chỉ được quyền khai báo 1 lần, với thằng var -> khai được nhìu lần với cùng 1 tên biến (ghi đè giá trị biến đã có => phát sinh lỗi không mon muốn => lỗi ko đáp ứng mong muốn )
// var fullName = "Nguyen Van A";

// console.log(fullName);

// let fullName1 = "Nguyen Van A";
// // let fullName1 = "Nguyen Van B";
// console.log(fullName1);

// // 2.
// function scopeTest() {
//   if (true) {
//     var name = "Nguyen Van A";
//     let age = 30;
//     console.log(age);
//   }
//   console.log(name);
// }

// scopeTest();
const sum = (a, b) => {
  return a + b;
};
console.log(sum);

// Rest parameters
const sumUp = function (...numbers) {
  console.log(numbers);
};

sumUp(1, 2, 3, 4, 5, 6, 7);

// spread operator: ngược lại với rest , : Spread -> phân tách các phần tử trong array, string, object, thành các giá trị riêng lẻ.
// array
const odd = [1, 3, 5];
const numbers1 = [2, 4, 6];
const numbersNew = [...numbers1, 7, 8, 9, ...odd];
console.log(numbersNew);

//object
const address = {
  street: "123 abc",
  city: "Ha noi",
  country: "Viet Nam",
};

const info = {
  name: "Nguyen Van A",
  age: 30,
  ...address,
};

console.log(info);
// info = {
//   name: "Nguyen Van A",
//   age: 30,
//   street: "123 abc",
//   city: "Ha noi",
//   country: "Viet Nam",
// }
// info.street = address.street;
// info.city = address.city;
// info.country = address.country;

const address2 = {
  ...address,
};

// for..of: dùng để lặp qua các phần tử trong array hoặc string.
// for..in: dùng để lặp qua các phần tử trong object.
const colors = ["red", "green", "blue"];
for (const item of colors.entries()) {
  console.log(item);
}
[0, "red"], [1, "green"], [2, "blue"];

//String
// const name = "Nguyen Van A";
// for (const item of name) {
//   console.log(item);
// }

//Object
const person = {
  name: "Nguyen Van A",
  age: 30,
};
for (const item in person) {
  console.log(item);
}
// name, age
for (const item of Object.entries(person)) {
  console.log(item);
}
// ["name", "Nguyen Van A"], ["age", 30];

// Template String: ${}
//Ví dụ:
// const name1 = "Nguyen Van A";
// const age = 30;
// console.log(`Hello "${name1}", you are "${age}" years old`);
// console.log("Hello" + name1 + ", you are " + age + " years old");

// array destructuring: có chức năng là trích xuất các phần tử trong array để gán bằng những biến riêng lẻ.
const list = ["javascript", "html", "css"];
// const javascript = list[0];
// const html = list[1];
// const css = list[2];
// const [javascript, html, css] = list; // array destructuring  [javascript, html, css] = ["javascript", "html", "css"]
// console.log(javascript);
// console.log(html);
// console.log(css);

// const [, , css] = list;
// console.log(css);

// const [javascript, ,] = list;
// console.log(javascript);

// Kết hợp với thằng rest parameters
// const [javascript, ...rest] = list;
// javascript = "javascript"
// rest = ["html", "css"]

// Nếu chẳng may mình đặt dư biến => biến đó sẽ có giá trị là undefined
// const [javascript, html, css, check] = list;
// console.log(check); // undefined

// Ví dụ nâng cao:
const list3 = ["Javascript", "C#", ["HTML", [1, 2]]];
const [, , [html3, [number1, number2]]] = list3;
console.log(html3); // HTML
console.log(css3); // CSS

// Mình cũng có thể thiết lập giá trị mặc định cho cho biến (default value)
const [javascript, html, css, check = true] = list;

// Object destructuring: là trích xuất các property (thuôc tính) trong object để gán bằng những biến riêng lẻ.
const person1 = {
  name: "Nguyen Van A",
  age: 30,
};

// chú ý: tên biến khai báo bên dưới phải giống với tên của property trong object
const { name, age } = person1;
console.log(name);
console.log(age);

// Chúng ta có thể khai báo tên biến khác với tên của property bằng cách:
const { name: name1, age: age1 } = person1;
console.log(name1);
console.log(age1);

//Object destructuring Kết hợp với rest parameters
const person2 = {
  name: "Nguyen Van b",
  age: 31,
  address: "Ha noi",
  country: "Viet Nam",
};
const { name: personName1, age: personAge1, ...rest1 } = person2;
console.log(personName1); // Nguyen Van B
console.log(personAge1); //30
console.log(rest1); // {address: "Ha noi", country: "Viet Nam"}

//object destructuring Kết hợp với function
const person3 = {
  name: "Nguyen Van c",
  age: 31,
  address: {
    city: "Ha Noi",
  },
};
function getPerson({
  name: personName2,
  age: personAge2,
  address: { city: personCity },
}) {
  console.log(`${personName2} - ${personAge2}`);
  console.log(personCity); // "Ha Noi"
}
getPerson(person3);
