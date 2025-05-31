let doixung = "racecar";
let check = true; // mặc định chuỗi này là chuỗi đối xứng

// 0, 1, 2, 3
for (let i = 0; i < doixung.length / 2; i++) {
  if (doixung[i] != doixung[doixung.length - 1 - i]) {
    check = false;
    break;
  }
}

function doixung1(chuoi, check) {
  for (let i = 0; i < chuoi.length / 2; i++) {
    if (chuoi[i] != chuoi[chuoi.length - 1 - i]) {
      check = false;
      break;
    }
  }
}

console.log(doixung1("racecar", true));
console.log(doixung1("hello", true));

function doixung2() {
  let doixung = "racecar";
  let check = true; // mặc định chuỗi này là chuỗi đối xứng

  // 0, 1, 2, 3
  for (let i = 0; i < doixung.length / 2; i++) {
    if (doixung[i] != doixung[doixung.length - 1 - i]) {
      check = false;
      break;
    }
  }
  console.log(check);
}
doixung2();

//doixung[0] != doixungp[6] => false
//doixung[1] != doixung[5] => false
//doixung[2] != doixung[4] => false
//doixung[3] != doixung[3] => false

// Cách để dự đoán công thức chung: doixung.length - 1 - i : true

//doixung.length -1, doixung.length  = 7
//doixung[i] = doixung[doixung.length - 1]
//doixung[0] = doixung[6]
// doixung[1] = doixung[6] => sai

//doixung[0] = doixung[6 - 0]
// doixung[1] = doixung[6 -1 ]
// doixung[2] = doixung[6 -2 ]

//doixung[0] = doixung[doixung.length -1-i]
// doixung[1] = doixung[doixung.length -1-i]
// doixung[2] = doixung[doixung.length -1-i]

// doixung[1] = doixung[6-1] = doixung[5]
// doixung[2] = doixung[6-2] = doixung[4]

// var ref = {};
// function addQuantity(param) {
//   param = {};
//   param.quantity = 20;
//   return param; // { quantity: 20 }
// }
// ref = addQuantity(ref); // { quantity: 20 } => ref = { quantity: 20 }
// console.log(ref); // 20

// var ref = {};
// function addQuantity(param) {
//   param.quantity = 20;
// }
// addQuantity(ref);
// console.log(ref);

var a;
a = 1;
var ref = {};
function addQuantity(param) {
  param = { name: "trung" };
  param.quantity = 20;
}
addQuantity(ref);
console.log(ref);

var frontEnd;
var front_end;

// Boolean, number, string
// Array, Object
// Null vs Undefined

// const b = 100 / "a"; //console.log(b); // NaN
const b = "100ABC";

const c = Number(b); // NaN

const a = true;
for (let i = 0; i < 10; i++) {
  console.log(i);
  break;
}
