// import { abs } from "math";
// console.log(abs(-10)); // trị tuyệt đối

// import b, { abs as TTD, PI } from "./math.js";
// // console.log(abs(-10)); // 10
// console.log(PI); // 3.14

// // a = 100; // những biến/hàm được export từ 1 module thì không thể thay đổi giá trị của nó
// // console.log(a);
// console.log(TTD(-10)); // 10
// console.log(b); // lấy giá trị default

import * as mathModule from "./math.js";
// mathModule: là object của thằng math.js
console.log(mathModule.abs(-10));
console.log(mathModule.PI);
