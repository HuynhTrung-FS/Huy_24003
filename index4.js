// Khai báo function
// function có tham số (parameter)
function tinhTong1(a, b) {
  return a + b;
}

//function không có tham số
function tinhTong2() {
  let a = 1;
  let b = 2;
  return a + b;
}

console.log(tinhTong1(1, 2));

const arr = [2, 3, 4];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
