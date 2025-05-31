var numbers = [10, 20, 30, 40, 50];
console.log(numbers[2]);
console.log(numbers.length); // 5

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // 10 20 30 40 50
  //   break;
  //   continue;
}
//method trong array
//forEach (index: được dùng khi mình áp dụng những bài toán về index.)
numbers.forEach(function (item, index) {
  //   if (item == 30) {
  //     return; // continue
  //   }
  console.log(item + " - " + index);
  // khong co kieu break, continue.
});

// Chạy tay
// item = 10 => console.log(item) => 10
// item = 20 => console.log(item) => 20
// item = 30 => console.log(item) => 30 ...

// filter: lọc => cách thức hoạt động giống như forEach
var numbers1 = [11, 12, 13, 14, 15];
var ketqua = numbers1.filter(function (item) {
  if (item > 12) return true;
  // Lưu ý:trong function, đòi hỏi chúng ta phải cần trả về 1 trong 2 giá trị true hoặc false.
  return false;
});
console.log(ketqua); // 13, 14, 15
// filter: nó sẽ không ảnh hưởng đến mảng gốc.
console.log(numbers1);

// indexOf: lấy ra chỉ số của một mảng
var numbers2 = [11, 12, 13, 14, 15, 12];
var vitri = numbers2.indexOf(12); // trả về index đầu tiên mà giá trị phần tử nó tìm thấy được.
var vitri2 = numbers2.indexOf(16);
console.log(vitri); //1
console.log(vitri2); // -1 (=> khong tim thay duoc gia tri do ben trong mang).

// push() vs pop(): thêm và xoá phần tử ở cuối mảng

// shift() vs unshift(): xoá và thêm phần tử ở đầu mảng

// map(): return new array
var arrayNew = [1, 2, 3];
var arrayNew2 = arrayNew.map(function (item) {
  return item * 2;
}); // [2, 4, 6]

// flatmap
// arrayNew2 = arrayNew.flatMap();

var arrayNew3 = arrayNew.map(function (item) {
  return [item, item * 2];
});
// [
//   [1, 2],
//   [2, 4],
//   [3, 6],
// ];
// [1,2,2,4,3,6]

// concat : ghep hai mang
//reverse: dao nguoc phan tu cua mang
var arrayNew4 = [1, 2, 3];
// join("-"); // 1-2-3

//reduce
const arrayChoose = [1, 2, 3];
const result = arrayChoose.reduce((total, item) => {
  return total + item;
}, 0);
console.log(result); //6

// splice: xóa phần tử
arrayChoose.splice(1, 1, 5);
