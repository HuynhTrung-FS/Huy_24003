"use strict";
// function greeting() {
//   var hello = "Hello World!";
//   console.log(hello);
// }

// console.log(hello);

// Scope: 2 loại cơ bản => local scope vs global scope
// Global Scope: là phần có thể được được truy cập ở khắp nơi trong chương trình.
var number1 = 10;

function increase() {} //=> global

function sum() {
  console.log(number1);
  increase();
  window.number1 = 20;
}

sum();

// đặc biệt, tất cả các biến ở phạm vi global sẽ trờ thành property của window object (mặc định sẽ có object là một window)
console.log(window);

// Local Scope: cũng có thể là gọi function scope. => tất cả các biến trong function thì nó không truy xuất ra bên ngoài.
// Local scope/function scope nó là con của thằng global scope
// function greeting() {
//   var hello = "Hello World!";
//   console.log(hello);
// }

// console.log(hello);

// Nested scope: có thể khai báo một hàm bên trong hàm khác (hàm con)
function outer() {
  var number1 = 10;
  function inner() {
    var number1 = 20;
    console.log(number1);
  }
  inner();
  console.log(number1);
}

// use strict mode:
var job = "Developer";
console.log(job);

// Hoisting: move declaration to top of current scope => đưa các phần khai báo lên trên cùng/đầu của scope hiện tại.
var param = 20;
console.log(param); // undefined

greeting();
function greeting() {
  console.log(1);
}

// Nên khai báo trước rồi mưới sử dụng , không nên khai báo sau rồi mới sử dụng.

var a;
var b = 30;
console.log(b); // b =30
console.log(a); // undefined
console.log(a + b);
a = 20;
