// Object nâng cao
// Object destructuring
// => đây là một cú pháp của ES6, cho phép trích xuất giá trị từ một object và gán chúng vào một biến riêng biệt. => ngắn gọn

// Lợi ích:
// code ngắn gọn hơn : person.firstName, person.lastName, person.age
// Code dễ đọc hơn.
// Giảm lỗi: nguy cơ sai sót.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

// Cách 1: băt buộc tên thuộc tính trong person và tên biến phải giống nhau.
const { firstName, lastName, age } = person;
console.log(firstName);
console.log(lastName);
console.log(age);

// Cách 2: dùng Alias, ko cần phải bát buộc tên thuộc tính trong person và tên biến phải giống nhau.
const { firstName: firstName1, lastName: lastName1, age: age1 } = person;
console.log(firstName1);
console.log(lastName1);
console.log(age1);

// Destructuring với giá trị mặc định
const person2 = {
  firstName2: "John",
  age2: 30,
};
const { firstName2, age2, city = "New York" } = person2;
console.log(firstName2);
console.log(age2);
console.log(city);

// Destructuring Nested Object (Object lồng nhau)
const user = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    state: "NY",
    zip: "10001",
  },
  isAdmin: false,
};
const {
  name,
  address: { street, state },
} = user;
console.log(name);
console.log(street);
console.log(state);

// Một số ứng dụng khác của destructuring
// Tham số hàm
function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}
displayUser(user); // { name, age } = user

// Trả về giá trị từ hàm
function getUser() {
  return {
    name33: "John",
    age33: 30,
  };
}
const { name33: name3, age33: age3 } = getUser(); // { name33: name3, name33: name3 } = {name33: "John", age33: 30}
console.log(name3);
console.log(age3);

// Xoá thuộc tính : dùng delete.
const car = {
  make: "Toyota",
  model: "Honda",
  city: undefined,
  year: null,
};

// delete car.model;
// console.log(car);

// Kiểm tra một thuôc tính trong object : Nếu có tồn tại thì xoá, không thì log ra "không tồn tại"
if (car.make) {
  delete car.make;
} else {
  console.log("Khong ton tai");
}

console.log(car.make); // undefined
console.log(car.city); // undefined
console.log(car.year); // null
